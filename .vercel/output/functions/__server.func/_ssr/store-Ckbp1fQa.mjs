import { o as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { c as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/store-Ckbp1fQa.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var nowIso = () => (/* @__PURE__ */ new Date()).toISOString();
var nowDisplay = () => (/* @__PURE__ */ new Date()).toISOString().slice(0, 16).replace("T", " ");
var seed = {
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
			name: "SARA NGUYEN",
			department: "Sales"
		},
		{
			uid: "kim",
			password: "kim123",
			role: "investor",
			name: "KIM SEO-JUN",
			unit: "Zone 4 Premium – A동 1204호",
			nationality: "South Korea",
			vipGrade: "Platinum",
			purchasePrice: 28e4,
			currentValue: 332967,
			rentStatus: "Cleared",
			lastLogin: "2026-06-18 09:42",
			disabled: false,
			monthlyRentalIncome: [
				{
					month: "Jan",
					income: 1820
				},
				{
					month: "Feb",
					income: 1840
				},
				{
					month: "Mar",
					income: 1880
				},
				{
					month: "Apr",
					income: 1910
				},
				{
					month: "May",
					income: 1940
				},
				{
					month: "Jun",
					income: 1980
				}
			],
			reports: [{
				id: "r1",
				timestamp: "2026-05-30",
				title: "Q2 Asset Performance Summary",
				content: "Unit A-1204 maintained 100% occupancy in Q2. Rental income up 4.2% QoQ. No maintenance incidents recorded."
			}]
		},
		{
			uid: "lee",
			password: "lee123",
			role: "investor",
			name: "LEE MIN-HO",
			unit: "Zone 2 Skyline – B동 905호",
			nationality: "South Korea",
			vipGrade: "Gold",
			purchasePrice: 21e4,
			currentValue: 238500,
			rentStatus: "Pending",
			lastLogin: "2026-06-15 21:08",
			disabled: false,
			monthlyRentalIncome: [
				{
					month: "Jan",
					income: 1380
				},
				{
					month: "Feb",
					income: 1380
				},
				{
					month: "Mar",
					income: 1400
				},
				{
					month: "Apr",
					income: 1400
				},
				{
					month: "May",
					income: 1420
				},
				{
					month: "Jun",
					income: 0
				}
			],
			reports: []
		}
	],
	inquiries: [{
		id: "q1",
		investorId: "kim",
		title: "Next dividend timing?",
		body: "When can I expect the next rental distribution?",
		createdAt: "2026-06-10",
		status: "Answered",
		reply: "Dividends are processed monthly on the 5th. Your next distribution is scheduled for July 5.",
		repliedAt: "2026-06-11",
		repliedBy: "NOAH"
	}, {
		id: "q2",
		investorId: "lee",
		title: "Pending rent on June",
		body: "I noticed June rent shows pending — any update?",
		createdAt: "2026-06-16",
		status: "Pending"
	}],
	leads: [{
		id: "l1",
		submittedAt: "2026-06-19 14:32",
		name: "NGUYEN THI LINH",
		phone: "0901 234 567",
		customerType: "Expat / Professional",
		area: "Zone 4",
		budget: "$800–$1,200 / mo",
		propertyType: "Apartment",
		size: "2 Bedrooms",
		moveIn: "2026-08-01",
		priorities: [
			"Near work",
			"Good transportation",
			"Security"
		],
		notes: "Looking for a fully furnished apartment close to the CBD.",
		status: "New"
	}],
	activityLog: [{
		id: "log1",
		actorId: "noah",
		actorName: "NOAH",
		actorRole: "admin",
		action: "Replied to inquiry",
		detail: "Next dividend timing?",
		timestamp: "2026-06-11T08:14:00Z"
	}],
	system: {
		lastSaved: nowIso(),
		lastBackup: "2026-06-18T03:00:00Z"
	},
	session: null
};
var PortalContext = (0, import_react.createContext)(null);
function PortalProvider({ children }) {
	const [state, setState] = (0, import_react.useState)(seed);
	const login = (0, import_react.useCallback)((uid, password) => {
		let result = {
			ok: false,
			reason: "Invalid Credentials"
		};
		setState((s) => {
			const u = s.users.find((u) => u.uid.toLowerCase() === uid.toLowerCase());
			if (!u || u.password !== password) {
				result = {
					ok: false,
					reason: "Invalid Credentials"
				};
				return s;
			}
			if (u.role === "investor" && u.disabled) {
				result = {
					ok: false,
					reason: "This account has been disabled by an administrator."
				};
				return s;
			}
			result = { ok: true };
			const stamped = u.role === "investor" ? {
				...u,
				lastLogin: nowDisplay()
			} : u;
			return {
				...s,
				session: stamped,
				users: s.users.map((x) => x.uid === u.uid && x.role === u.role ? stamped : x)
			};
		});
		return result;
	}, []);
	const logout = (0, import_react.useCallback)(() => setState((s) => ({
		...s,
		session: null
	})), []);
	const submitInquiry = (0, import_react.useCallback)((investorId, title, body) => {
		setState((s) => ({
			...s,
			inquiries: [...s.inquiries, {
				id: `q${Date.now()}`,
				investorId,
				title,
				body,
				createdAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
				status: "Pending"
			}],
			system: {
				...s.system,
				lastSaved: nowIso()
			}
		}));
	}, []);
	const replyInquiry = (0, import_react.useCallback)((inquiryId, reply) => {
		setState((s) => {
			const actor = s.session;
			const inquiry = s.inquiries.find((q) => q.id === inquiryId);
			const logEntry = {
				id: `log${Date.now()}`,
				actorId: actor?.uid ?? "?",
				actorName: actor?.name ?? "Unknown",
				actorRole: actor?.role ?? "staff",
				action: "Replied to inquiry",
				detail: inquiry?.title ?? inquiryId,
				timestamp: nowIso()
			};
			return {
				...s,
				inquiries: s.inquiries.map((q) => q.id === inquiryId ? {
					...q,
					reply,
					status: "Answered",
					repliedAt: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
					repliedBy: actor?.name
				} : q),
				activityLog: [logEntry, ...s.activityLog],
				system: {
					...s.system,
					lastSaved: nowIso()
				}
			};
		});
	}, []);
	const updateInvestor = (0, import_react.useCallback)((uid, patch, newReport) => {
		setState((s) => {
			const actor = s.session;
			const investor = s.users.find((u) => u.uid === uid && u.role === "investor");
			const logEntry = {
				id: `log${Date.now()}`,
				actorId: actor?.uid ?? "?",
				actorName: actor?.name ?? "Unknown",
				actorRole: actor?.role ?? "staff",
				action: "Updated investor asset",
				detail: investor?.name ?? uid,
				timestamp: nowIso()
			};
			return {
				...s,
				users: s.users.map((u) => {
					if (u.uid !== uid || u.role !== "investor") return u;
					const next = {
						...u,
						...patch
					};
					if (newReport?.title && newReport?.content) next.reports = [{
						id: `r${Date.now()}`,
						timestamp: (/* @__PURE__ */ new Date()).toISOString().slice(0, 10),
						title: newReport.title,
						content: newReport.content
					}, ...next.reports];
					return next;
				}),
				activityLog: [logEntry, ...s.activityLog],
				system: {
					...s.system,
					lastSaved: nowIso()
				}
			};
		});
	}, []);
	const disableInvestor = (0, import_react.useCallback)((uid) => {
		setState((s) => {
			const actor = s.session;
			const investor = s.users.find((u) => u.uid === uid && u.role === "investor");
			const logEntry = {
				id: `log${Date.now()}`,
				actorId: actor?.uid ?? "?",
				actorName: actor?.name ?? "Unknown",
				actorRole: "admin",
				action: "Disabled investor account",
				detail: investor?.name ?? uid,
				timestamp: nowIso()
			};
			return {
				...s,
				users: s.users.map((u) => u.uid === uid && u.role === "investor" ? {
					...u,
					disabled: true
				} : u),
				activityLog: [logEntry, ...s.activityLog],
				system: {
					...s.system,
					lastSaved: nowIso()
				}
			};
		});
	}, []);
	const createInvestor = (0, import_react.useCallback)((i) => {
		setState((s) => {
			if (s.users.some((u) => u.uid === i.uid)) return s;
			const actor = s.session;
			const logEntry = {
				id: `log${Date.now()}`,
				actorId: actor?.uid ?? "?",
				actorName: actor?.name ?? "Unknown",
				actorRole: "admin",
				action: "Created investor account",
				detail: i.name,
				timestamp: nowIso()
			};
			const fresh = {
				...i,
				role: "investor",
				lastLogin: "—",
				disabled: false,
				monthlyRentalIncome: [
					{
						month: "Jan",
						income: 0
					},
					{
						month: "Feb",
						income: 0
					},
					{
						month: "Mar",
						income: 0
					},
					{
						month: "Apr",
						income: 0
					},
					{
						month: "May",
						income: 0
					},
					{
						month: "Jun",
						income: 0
					}
				],
				reports: []
			};
			return {
				...s,
				users: [...s.users, fresh],
				activityLog: [logEntry, ...s.activityLog],
				system: {
					...s.system,
					lastSaved: nowIso()
				}
			};
		});
	}, []);
	const submitLead = (0, import_react.useCallback)((lead) => {
		setState((s) => ({
			...s,
			leads: [{
				...lead,
				id: `l${Date.now()}`,
				submittedAt: nowDisplay(),
				status: "New"
			}, ...s.leads],
			system: {
				...s.system,
				lastSaved: nowIso()
			}
		}));
	}, []);
	const updateLeadStatus = (0, import_react.useCallback)((id, status) => {
		setState((s) => {
			const actor = s.session;
			const lead = s.leads.find((l) => l.id === id);
			const logEntry = {
				id: `log${Date.now()}`,
				actorId: actor?.uid ?? "?",
				actorName: actor?.name ?? "Unknown",
				actorRole: actor?.role ?? "staff",
				action: "Updated lead status",
				detail: `${lead?.name ?? id} → ${status}`,
				timestamp: nowIso()
			};
			return {
				...s,
				leads: s.leads.map((l) => l.id === id ? {
					...l,
					status
				} : l),
				activityLog: [logEntry, ...s.activityLog],
				system: {
					...s.system,
					lastSaved: nowIso()
				}
			};
		});
	}, []);
	const createStaff = (0, import_react.useCallback)((s_) => {
		setState((s) => {
			if (s.users.some((u) => u.uid === s_.uid)) return s;
			return {
				...s,
				users: [...s.users, {
					...s_,
					role: "staff"
				}],
				system: {
					...s.system,
					lastSaved: nowIso()
				}
			};
		});
	}, []);
	const updateStaff = (0, import_react.useCallback)((uid, patch) => {
		setState((s) => ({
			...s,
			users: s.users.map((u) => u.uid === uid && u.role === "staff" ? {
				...u,
				...patch
			} : u),
			system: {
				...s.system,
				lastSaved: nowIso()
			}
		}));
	}, []);
	const deleteStaff = (0, import_react.useCallback)((uid) => {
		setState((s) => ({
			...s,
			users: s.users.filter((u) => !(u.uid === uid && u.role === "staff")),
			system: {
				...s.system,
				lastSaved: nowIso()
			}
		}));
	}, []);
	const createAdmin = (0, import_react.useCallback)((a) => {
		setState((s) => {
			if (s.users.some((u) => u.uid === a.uid)) return s;
			return {
				...s,
				users: [...s.users, {
					...a,
					role: "admin"
				}],
				system: {
					...s.system,
					lastSaved: nowIso()
				}
			};
		});
	}, []);
	const updateAdmin = (0, import_react.useCallback)((uid, patch) => {
		setState((s) => ({
			...s,
			users: s.users.map((u) => u.uid === uid && u.role === "admin" ? {
				...u,
				...patch
			} : u),
			system: {
				...s.system,
				lastSaved: nowIso()
			}
		}));
	}, []);
	const deleteAdmin = (0, import_react.useCallback)((uid) => {
		setState((s) => {
			const remaining = s.users.filter((u) => !(u.uid === uid && u.role === "admin"));
			if (remaining.filter((u) => u.role === "admin").length === 0) return s;
			return {
				...s,
				users: remaining,
				system: {
					...s.system,
					lastSaved: nowIso()
				}
			};
		});
	}, []);
	const backupNow = (0, import_react.useCallback)(() => {
		setState((s) => ({
			...s,
			system: {
				...s.system,
				lastBackup: nowIso()
			}
		}));
	}, []);
	const value = (0, import_react.useMemo)(() => ({
		state,
		login,
		logout,
		submitInquiry,
		replyInquiry,
		updateInvestor,
		disableInvestor,
		createInvestor,
		submitLead,
		updateLeadStatus,
		createStaff,
		updateStaff,
		deleteStaff,
		createAdmin,
		updateAdmin,
		deleteAdmin,
		backupNow
	}), [
		state,
		login,
		logout,
		submitInquiry,
		replyInquiry,
		updateInvestor,
		disableInvestor,
		createInvestor,
		submitLead,
		updateLeadStatus,
		createStaff,
		updateStaff,
		deleteStaff,
		createAdmin,
		updateAdmin,
		deleteAdmin,
		backupNow
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PortalContext.Provider, {
		value,
		children
	});
}
function usePortal() {
	const ctx = (0, import_react.useContext)(PortalContext);
	if (!ctx) throw new Error("usePortal must be used inside PortalProvider");
	return ctx;
}
function getInvestors(users) {
	return users.filter((u) => u.role === "investor");
}
function getAdmins(users) {
	return users.filter((u) => u.role === "admin");
}
function getStaff(users) {
	return users.filter((u) => u.role === "staff");
}
//#endregion
export { usePortal as a, getStaff as i, getAdmins as n, getInvestors as r, PortalProvider as t };
