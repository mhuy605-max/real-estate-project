import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";

export type VipGrade = "Standard" | "Gold" | "Platinum" | "Diamond";
export type RentStatus = "Cleared" | "Pending";
export type Role = "admin" | "investor";

export interface Report {
  id: string;
  timestamp: string;
  title: string;
  content: string;
}

export interface Inquiry {
  id: string;
  investorId: string;
  title: string;
  body: string;
  createdAt: string;
  status: "Pending" | "Answered";
  reply?: string;
  repliedAt?: string;
}

export interface InvestorProfile {
  uid: string;
  password: string;
  role: "investor";
  name: string;
  unit: string;
  nationality: string;
  vipGrade: VipGrade;
  purchasePrice: number;
  currentValue: number;
  rentStatus: RentStatus;
  lastLogin: string;
  disabled: boolean;
  monthlyRentalIncome: { month: string; income: number }[];
  reports: Report[];
}

export interface AdminProfile {
  uid: string;
  password: string;
  role: "admin";
  name: string;
}

export type AnyUser = InvestorProfile | AdminProfile;

interface SystemMeta {
  lastSaved: string;
  lastBackup: string;
}

interface PortalState {
  users: AnyUser[];
  inquiries: Inquiry[];
  system: SystemMeta;
  session: AnyUser | null;
}

const nowIso = () => new Date().toISOString();

const seed: PortalState = {
  users: [
    {
      uid: "admin",
      password: "admin123",
      role: "admin",
      name: "MR. PHAM",
    },
    {
      uid: "kim",
      password: "kim123",
      role: "investor",
      name: "KIM SEO-JUN",
      unit: "Zone 4 Premium – A동 1204호",
      nationality: "South Korea",
      vipGrade: "Platinum",
      purchasePrice: 280000,
      currentValue: 332967,
      rentStatus: "Cleared",
      lastLogin: "2026-06-18 09:42",
      disabled: false,
      monthlyRentalIncome: [
        { month: "Jan", income: 1820 },
        { month: "Feb", income: 1840 },
        { month: "Mar", income: 1880 },
        { month: "Apr", income: 1910 },
        { month: "May", income: 1940 },
        { month: "Jun", income: 1980 },
      ],
      reports: [
        {
          id: "r1",
          timestamp: "2026-05-30",
          title: "Q2 Asset Performance Summary",
          content:
            "Unit A-1204 maintained 100% occupancy in Q2. Rental income up 4.2% QoQ. No maintenance incidents recorded.",
        },
      ],
    },
    {
      uid: "lee",
      password: "lee123",
      role: "investor",
      name: "LEE MIN-HO",
      unit: "Zone 2 Skyline – B동 905호",
      nationality: "South Korea",
      vipGrade: "Gold",
      purchasePrice: 210000,
      currentValue: 238500,
      rentStatus: "Pending",
      lastLogin: "2026-06-15 21:08",
      disabled: false,
      monthlyRentalIncome: [
        { month: "Jan", income: 1380 },
        { month: "Feb", income: 1380 },
        { month: "Mar", income: 1400 },
        { month: "Apr", income: 1400 },
        { month: "May", income: 1420 },
        { month: "Jun", income: 0 },
      ],
      reports: [],
    },
    {
      uid: "noah",
      password: "noah123",
      role: "investor",
      name: "NOAH PARK",
      unit: "Zone 1 – C동 302호",
      nationality: "USA",
      vipGrade: "Standard",
      purchasePrice: 165000,
      currentValue: 172000,
      rentStatus: "Cleared",
      lastLogin: "2025-12-01 10:00",
      disabled: true,
      monthlyRentalIncome: [],
      reports: [],
    },
  ],
  inquiries: [
    {
      id: "q1",
      investorId: "kim",
      title: "Next dividend timing?",
      body: "When can I expect the next rental distribution?",
      createdAt: "2026-06-10",
      status: "Answered",
      reply:
        "Dividends are processed monthly on the 5th. Your next distribution is scheduled for July 5.",
      repliedAt: "2026-06-11",
    },
    {
      id: "q2",
      investorId: "lee",
      title: "Pending rent on June",
      body: "I noticed June rent shows pending — any update?",
      createdAt: "2026-06-16",
      status: "Pending",
    },
  ],
  system: {
    lastSaved: nowIso(),
    lastBackup: "2026-06-18T03:00:00Z",
  },
  session: null,
};

interface PortalContextValue {
  state: PortalState;
  login: (uid: string, password: string) => { ok: boolean; reason?: string };
  logout: () => void;
  submitInquiry: (investorId: string, title: string, body: string) => void;
  replyInquiry: (inquiryId: string, reply: string) => void;
  updateInvestor: (
    uid: string,
    patch: Partial<Pick<InvestorProfile, "currentValue" | "rentStatus">>,
    newReport?: { title: string; content: string },
  ) => void;
  disableInvestor: (uid: string) => void;
  createInvestor: (i: Omit<InvestorProfile, "role" | "lastLogin" | "disabled" | "monthlyRentalIncome" | "reports">) => void;
  backupNow: () => void;
}

const PortalContext = createContext<PortalContextValue | null>(null);

export function PortalProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<PortalState>(seed);

  const login = useCallback((uid: string, password: string) => {
    let result: { ok: boolean; reason?: string } = { ok: false, reason: "Invalid Credentials" };
    setState((s) => {
      const u = s.users.find((u) => u.uid.toLowerCase() === uid.toLowerCase());
      if (!u || u.password !== password) {
        result = { ok: false, reason: "Invalid Credentials" };
        return s;
      }
      if (u.role === "investor" && u.disabled) {
        result = { ok: false, reason: "This account has been disabled by an administrator." };
        return s;
      }
      result = { ok: true };
      const stamped =
        u.role === "investor"
          ? { ...u, lastLogin: new Date().toISOString().slice(0, 16).replace("T", " ") }
          : u;
      return {
        ...s,
        session: stamped,
        users: s.users.map((x) => (x.uid === u.uid ? stamped : x)),
      };
    });
    return result;
  }, []);

  const logout = useCallback(() => setState((s) => ({ ...s, session: null })), []);

  const submitInquiry = useCallback((investorId: string, title: string, body: string) => {
    setState((s) => ({
      ...s,
      inquiries: [
        ...s.inquiries,
        {
          id: `q${Date.now()}`,
          investorId,
          title,
          body,
          createdAt: new Date().toISOString().slice(0, 10),
          status: "Pending",
        },
      ],
      system: { ...s.system, lastSaved: nowIso() },
    }));
  }, []);

  const replyInquiry = useCallback((inquiryId: string, reply: string) => {
    setState((s) => ({
      ...s,
      inquiries: s.inquiries.map((q) =>
        q.id === inquiryId
          ? {
              ...q,
              reply,
              status: "Answered",
              repliedAt: new Date().toISOString().slice(0, 10),
            }
          : q,
      ),
      system: { ...s.system, lastSaved: nowIso() },
    }));
  }, []);

  const updateInvestor = useCallback(
    (
      uid: string,
      patch: Partial<Pick<InvestorProfile, "currentValue" | "rentStatus">>,
      newReport?: { title: string; content: string },
    ) => {
      setState((s) => ({
        ...s,
        users: s.users.map((u) => {
          if (u.uid !== uid || u.role !== "investor") return u;
          const next: InvestorProfile = { ...u, ...patch };
          if (newReport && newReport.title && newReport.content) {
            next.reports = [
              {
                id: `r${Date.now()}`,
                timestamp: new Date().toISOString().slice(0, 10),
                title: newReport.title,
                content: newReport.content,
              },
              ...next.reports,
            ];
          }
          return next;
        }),
        system: { ...s.system, lastSaved: nowIso() },
      }));
    },
    [],
  );

  const disableInvestor = useCallback((uid: string) => {
    setState((s) => ({
      ...s,
      users: s.users.map((u) =>
        u.uid === uid && u.role === "investor" ? { ...u, disabled: true } : u,
      ),
      system: { ...s.system, lastSaved: nowIso() },
    }));
  }, []);

  const createInvestor = useCallback(
    (i: Omit<InvestorProfile, "role" | "lastLogin" | "disabled" | "monthlyRentalIncome" | "reports">) => {
      setState((s) => {
        if (s.users.some((u) => u.uid === i.uid)) return s;
        const fresh: InvestorProfile = {
          ...i,
          role: "investor",
          lastLogin: "—",
          disabled: false,
          monthlyRentalIncome: [
            { month: "Jan", income: 0 },
            { month: "Feb", income: 0 },
            { month: "Mar", income: 0 },
            { month: "Apr", income: 0 },
            { month: "May", income: 0 },
            { month: "Jun", income: 0 },
          ],
          reports: [],
        };
        return {
          ...s,
          users: [...s.users, fresh],
          system: { ...s.system, lastSaved: nowIso() },
        };
      });
    },
    [],
  );

  const backupNow = useCallback(() => {
    setState((s) => ({ ...s, system: { ...s.system, lastBackup: nowIso() } }));
  }, []);

  const value = useMemo<PortalContextValue>(
    () => ({
      state,
      login,
      logout,
      submitInquiry,
      replyInquiry,
      updateInvestor,
      disableInvestor,
      createInvestor,
      backupNow,
    }),
    [state, login, logout, submitInquiry, replyInquiry, updateInvestor, disableInvestor, createInvestor, backupNow],
  );

  return <PortalContext.Provider value={value}>{children}</PortalContext.Provider>;
}

export function usePortal() {
  const ctx = useContext(PortalContext);
  if (!ctx) throw new Error("usePortal must be used inside PortalProvider");
  return ctx;
}

export function getInvestors(users: AnyUser[]): InvestorProfile[] {
  return users.filter((u): u is InvestorProfile => u.role === "investor");
}
