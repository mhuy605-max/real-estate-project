import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-BM69R9gw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var CARE_CATEGORIES = [
	"Housing",
	"Paperwork",
	"Medical",
	"Schooling",
	"Settlement",
	"Other"
];
var CARE_STATUSES = [
	"New",
	"In Progress",
	"Pending Info",
	"Resolved",
	"Closed"
];
var STAGES = [
	"Pre-Arrival",
	"Arrived",
	"Housed",
	"Settled"
];
var nowISO = () => (/* @__PURE__ */ new Date()).toISOString();
var rid = (p) => `${p}-${Math.random().toString(36).slice(2, 8).toUpperCase()}`;
var initialState = {
	users: [
		{
			uid: "noah",
			password: "noah123",
			role: "admin",
			name: "NOAH"
		},
		{
			uid: "sara",
			password: "sara123",
			role: "staff",
			name: "SARA NGUYEN"
		},
		{
			uid: "staff2",
			password: "staff123",
			role: "staff",
			name: "Hoang Le"
		},
		{
			uid: "kim",
			password: "kim123",
			role: "employee",
			name: "KIM SEO-JUN",
			companyId: "co-samjin",
			nationality: "Korea",
			familySize: 3,
			languagePref: "ko",
			stage: "Housed",
			housing: {
				district: "Thao Dien, District 2",
				rentUsd: 2100,
				leaseStart: "2026-03-01",
				leaseEnd: "2027-03-01",
				depositUsd: 4200,
				depositReturned: false
			},
			disabled: false
		},
		{
			uid: "lee",
			password: "lee123",
			role: "employee",
			name: "LEE MIN-HO",
			companyId: "co-samjin",
			nationality: "Korea",
			familySize: 1,
			languagePref: "ko",
			stage: "Pre-Arrival",
			disabled: false
		},
		{
			uid: "employee3",
			password: "employee123",
			role: "employee",
			name: "Daniel Roberts",
			companyId: "co-arcwave",
			nationality: "UK",
			familySize: 4,
			languagePref: "en",
			stage: "Arrived",
			disabled: false
		}
	],
	companies: [{
		id: "co-samjin",
		name: "Samjin Electronics Vietnam",
		tier: "Pro",
		contractStart: "2026-01-15",
		contractEnd: "2027-01-15",
		hrContactName: "Park Min-Jun",
		hrContactEmail: "minjun.park@samjin.example",
		seats: 12
	}, {
		id: "co-arcwave",
		name: "Arcwave Logistics",
		tier: "Trial",
		contractStart: "2026-06-01",
		contractEnd: "2026-07-01",
		hrContactName: "Linh Nguyen",
		hrContactEmail: "linh@arcwave.example",
		seats: 3
	}],
	requests: [
		{
			id: "CR-1001",
			submittedAt: "2026-06-14T03:00:00Z",
			category: "Housing",
			subject: "Aircon making loud noise",
			details: "The bedroom unit started rattling last night. Could a technician come this week?",
			status: "In Progress",
			employeeId: "employee",
			companyId: "co-samjin",
			assignedStaffUid: "staff",
			thread: [{
				id: "m1",
				authorRole: "employee",
				authorName: "Ji-Hoon Kim",
				body: "Started last night around 11pm.",
				at: "2026-06-14T03:00:00Z"
			}, {
				id: "m2",
				authorRole: "staff",
				authorName: "Mai Tran",
				body: "We've contacted the landlord. Technician scheduled for Thursday 2pm.",
				at: "2026-06-14T08:30:00Z"
			}]
		},
		{
			id: "CR-1002",
			submittedAt: "2026-06-17T01:20:00Z",
			category: "Schooling",
			subject: "International school options in D2",
			details: "Looking for a primary school recommendation for our 7-year-old.",
			status: "New",
			employeeId: "employee",
			companyId: "co-samjin",
			thread: [{
				id: "m1",
				authorRole: "employee",
				authorName: "Ji-Hoon Kim",
				body: "Looking for a primary school recommendation for our 7-year-old.",
				at: "2026-06-17T01:20:00Z"
			}]
		},
		{
			id: "CR-1003",
			submittedAt: "2026-06-18T07:00:00Z",
			category: "Paperwork",
			subject: "TRC renewal next month",
			details: "My temporary residence card expires in July. What documents do I need?",
			status: "Pending Info",
			employeeId: "employee3",
			companyId: "co-arcwave",
			assignedStaffUid: "staff2",
			thread: [{
				id: "m1",
				authorRole: "employee",
				authorName: "Daniel Roberts",
				body: "Expires 22 July.",
				at: "2026-06-18T07:00:00Z"
			}]
		},
		{
			id: "CR-1004",
			submittedAt: "2026-06-19T10:00:00Z",
			category: "Medical",
			subject: "English-speaking pediatrician?",
			details: "Need a recommendation, ideally near Thao Dien.",
			status: "New",
			guestName: "Anna Schmidt",
			guestContact: "anna.schmidt@example.com",
			thread: [{
				id: "m1",
				authorRole: "guest",
				authorName: "Anna Schmidt",
				body: "Need a recommendation, ideally near Thao Dien.",
				at: "2026-06-19T10:00:00Z"
			}]
		},
		{
			id: "CR-1005",
			submittedAt: "2026-06-20T02:00:00Z",
			category: "Settlement",
			subject: "Bank account setup",
			details: "Which banks accept TRC + work permit and offer English app?",
			status: "Resolved",
			employeeId: "employee3",
			companyId: "co-arcwave",
			assignedStaffUid: "staff",
			thread: []
		}
	],
	reports: [{
		id: "RP-001",
		companyId: "co-samjin",
		kind: "Monthly",
		periodLabel: "May 2026",
		generatedAt: "2026-06-01T00:00:00Z",
		summary: "12 requests handled; 9 resolved within SLA. 3 new housing moves."
	}],
	activityLog: [],
	session: null,
	system: { lastSaved: nowISO() }
};
var CarePortalContext = (0, import_react.createContext)(null);
function CarePortalProvider({ children }) {
	const [state, setState] = (0, import_react.useState)(initialState);
	const log = (s, actor, action) => ({
		...s,
		activityLog: [{
			id: rid("L"),
			at: nowISO(),
			actor,
			action
		}, ...s.activityLog].slice(0, 200),
		system: { lastSaved: nowISO() }
	});
	const login = (0, import_react.useCallback)((uid, password) => {
		let found = null;
		setState((s) => {
			const u = s.users.find((x) => x.uid === uid && x.password === password && !x.disabled);
			if (!u) return s;
			found = u;
			return log({
				...s,
				session: u
			}, uid, "logged in");
		});
		return found;
	}, []);
	const logout = (0, import_react.useCallback)(() => setState((s) => ({
		...s,
		session: null
	})), []);
	const submitCareRequest = (0, import_react.useCallback)((input) => {
		const id = rid("CR");
		const req = {
			id,
			submittedAt: nowISO(),
			status: "New",
			category: input.category,
			subject: input.subject,
			details: input.details,
			employeeId: input.employeeId,
			companyId: input.companyId,
			guestName: input.guestName,
			guestContact: input.guestContact,
			thread: [{
				id: rid("M"),
				authorRole: input.employeeId ? "employee" : "guest",
				authorName: input.guestName ?? input.employeeId ?? "Employee",
				body: input.initialMessage ?? input.details,
				at: nowISO()
			}]
		};
		setState((s) => log({
			...s,
			requests: [req, ...s.requests]
		}, input.guestName ?? input.employeeId ?? "guest", `submitted ${id}`));
		return req;
	}, []);
	const assignCareRequest = (0, import_react.useCallback)((requestId, staffUid) => {
		setState((s) => log({
			...s,
			requests: s.requests.map((r) => r.id === requestId ? {
				...r,
				assignedStaffUid: staffUid,
				status: r.status === "New" ? "In Progress" : r.status
			} : r)
		}, s.session?.uid ?? "system", `assigned ${requestId} → ${staffUid}`));
	}, []);
	const updateCareRequestStatus = (0, import_react.useCallback)((requestId, status) => {
		setState((s) => log({
			...s,
			requests: s.requests.map((r) => r.id === requestId ? {
				...r,
				status
			} : r)
		}, s.session?.uid ?? "system", `${requestId} → ${status}`));
	}, []);
	const replyToCareRequest = (0, import_react.useCallback)((requestId, body) => {
		setState((s) => {
			const session = s.session;
			const authorRole = session?.role ?? "guest";
			const authorName = session?.name ?? "Guest";
			const msg = {
				id: rid("M"),
				authorRole,
				authorName,
				body,
				at: nowISO()
			};
			return log({
				...s,
				requests: s.requests.map((r) => r.id === requestId ? {
					...r,
					thread: [...r.thread, msg]
				} : r)
			}, session?.uid ?? "guest", `replied to ${requestId}`);
		});
	}, []);
	const createCareCompany = (0, import_react.useCallback)((input) => {
		const c = {
			...input,
			id: rid("co")
		};
		setState((s) => log({
			...s,
			companies: [...s.companies, c]
		}, s.session?.uid ?? "system", `created company ${c.name}`));
		return c;
	}, []);
	const updateCareCompany = (0, import_react.useCallback)((id, patch) => {
		setState((s) => log({
			...s,
			companies: s.companies.map((c) => c.id === id ? {
				...c,
				...patch
			} : c)
		}, s.session?.uid ?? "system", `updated company ${id}`));
	}, []);
	const createCareEmployee = (0, import_react.useCallback)((input) => {
		const u = {
			...input,
			role: "employee"
		};
		setState((s) => log({
			...s,
			users: [...s.users, u]
		}, s.session?.uid ?? "system", `created employee ${u.uid}`));
		return u;
	}, []);
	const updateCareEmployee = (0, import_react.useCallback)((uid, patch) => {
		setState((s) => log({
			...s,
			users: s.users.map((u) => u.uid === uid ? {
				...u,
				...patch
			} : u)
		}, s.session?.uid ?? "system", `updated employee ${uid}`));
	}, []);
	const generateCareReport = (0, import_react.useCallback)((companyId, kind, periodLabel, summary) => {
		const rep = {
			id: rid("RP"),
			companyId,
			kind,
			periodLabel,
			generatedAt: nowISO(),
			summary
		};
		setState((s) => log({
			...s,
			reports: [rep, ...s.reports]
		}, s.session?.uid ?? "system", `generated report ${rep.id}`));
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		state,
		login,
		logout,
		submitCareRequest,
		assignCareRequest,
		updateCareRequestStatus,
		replyToCareRequest,
		createCareCompany,
		updateCareCompany,
		createCareEmployee,
		updateCareEmployee,
		generateCareReport
	}), [
		state,
		login,
		logout,
		submitCareRequest,
		assignCareRequest,
		updateCareRequestStatus,
		replyToCareRequest,
		createCareCompany,
		updateCareCompany,
		createCareEmployee,
		updateCareEmployee,
		generateCareReport
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarePortalContext.Provider, {
		value,
		children
	});
}
function useCarePortal() {
	const ctx = (0, import_react.useContext)(CarePortalContext);
	if (!ctx) throw new Error("useCarePortal must be inside CarePortalProvider");
	return ctx;
}
var getCompanyName = (companies, id) => companies.find((c) => c.id === id)?.name ?? "—";
var getCareStaff = (users) => users.filter((u) => u.role === "staff");
//#endregion
export { getCareStaff as a, STAGES as i, CARE_STATUSES as n, getCompanyName as o, CarePortalProvider as r, useCarePortal as s, CARE_CATEGORIES as t };
