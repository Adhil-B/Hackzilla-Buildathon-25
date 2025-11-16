module.exports = [
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/react-dom [external] (react-dom, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("react-dom", () => require("react-dom"));

module.exports = mod;
}),
"[project]/Q Buildathon/utils/mockData.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Mock data for demo accounts
__turbopack_context__.s([
    "approveAccount",
    ()=>approveAccount,
    "authenticateUser",
    ()=>authenticateUser,
    "mockCertificates",
    ()=>mockCertificates,
    "mockFaculty",
    ()=>mockFaculty,
    "mockInstitutions",
    ()=>mockInstitutions,
    "mockStudents",
    ()=>mockStudents
]);
const mockStudents = [
    {
        id: "STU-2024-5949",
        name: "Adhil Bijukumar",
        username: "@adhilb",
        email: "adhil@example.com",
        institution: "SIMATS University",
        department: "Computer Science",
        grade: "A+",
        creditsEarned: 73,
        pendingCredits: 10,
        certificates: 12,
        achievements: 5,
        password: "password123"
    },
    {
        id: "STU-2024-5950",
        name: "Priya Sharma",
        username: "@priyas",
        email: "priya@example.com",
        institution: "SIMATS University",
        department: "Business Administration",
        grade: "A",
        creditsEarned: 68,
        pendingCredits: 5,
        certificates: 10,
        achievements: 3,
        password: "password123"
    }
];
const mockFaculty = [
    {
        id: "FAC-2024-1001",
        name: "Dr. Sarah Johnson",
        email: "sarah.j@simats.edu",
        department: "Computer Science",
        institution: "SIMATS University",
        certificatesAssigned: 12,
        pendingReviews: 5,
        password: "password123"
    },
    {
        id: "FAC-2024-1002",
        name: "Dr. Michael Chen",
        email: "michael.c@simats.edu",
        department: "Business Administration",
        institution: "SIMATS University",
        certificatesAssigned: 8,
        pendingReviews: 3,
        password: "password123"
    }
];
const mockInstitutions = [
    {
        id: "INST-2024-001",
        name: "SIMATS University",
        email: "admin@simats.edu",
        password: "password123",
        departments: [
            {
                id: "DEPT-001",
                name: "Computer Science",
                facultyCount: 12,
                studentCount: 320
            },
            {
                id: "DEPT-002",
                name: "Mechanical Engineering",
                facultyCount: 8,
                studentCount: 280
            },
            {
                id: "DEPT-003",
                name: "Business Administration",
                facultyCount: 10,
                studentCount: 250
            },
            {
                id: "DEPT-004",
                name: "Electrical Engineering",
                facultyCount: 9,
                studentCount: 200
            },
            {
                id: "DEPT-005",
                name: "Mathematics",
                facultyCount: 6,
                studentCount: 100
            },
            {
                id: "DEPT-006",
                name: "Physics",
                facultyCount: 5,
                studentCount: 100
            }
        ],
        facultyMembers: 45,
        studentAccounts: 1250,
        pendingApprovals: 8
    }
];
const mockCertificates = [
    {
        id: 1,
        title: "Web Development Workshop",
        studentId: "STU-2024-5949",
        studentName: "Adhil Bijukumar",
        type: "workshop",
        date: "Nov 9, 2024",
        description: "Excellent participation and practical skills demonstrated",
        credits: 15,
        status: "verified",
        department: "Computer Science"
    },
    {
        id: 2,
        title: "Hackathon 2024",
        studentId: "STU-2024-5949",
        studentName: "Adhil Bijukumar",
        type: "competition",
        date: "Nov 8, 2024",
        description: "Outstanding innovation in AI project",
        credits: 25,
        status: "verified",
        department: "Computer Science"
    },
    {
        id: 3,
        title: "Leadership Training",
        studentId: "STU-2024-5949",
        studentName: "Adhil Bijukumar",
        type: "leadership",
        date: "Nov 7, 2024",
        description: "Completed leadership development program",
        credits: 10,
        status: "pending",
        department: "Computer Science"
    }
];
const authenticateUser = (email, password, role)=>{
    if (role === 'student') {
        return mockStudents.find((student)=>student.email === email && student.password === password);
    } else if (role === 'faculty') {
        return mockFaculty.find((faculty)=>faculty.email === email && faculty.password === password);
    } else if (role === 'institution') {
        return mockInstitutions.find((inst)=>inst.email === email && inst.password === password);
    }
    return null;
};
const approveAccount = (accountId, role)=>{
    // In a real app, this would update the database
    console.log(`Approved ${role} account with ID: ${accountId}`);
    return true;
};
}),
"[project]/Q Buildathon/pages/login.js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Login
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react/jsx-dev-runtime [external] (react/jsx-dev-runtime, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Q__Buildathon$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Q Buildathon/node_modules/next/head.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Q__Buildathon$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Q Buildathon/node_modules/next/router.js [ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/react [external] (react, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Q__Buildathon$2f$utils$2f$mockData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Q Buildathon/utils/mockData.js [ssr] (ecmascript)");
;
;
;
;
;
function Login() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Q__Buildathon$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [role, setRole] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])('student'); // Default to student
    const handleRoleChange = (selectedRole)=>{
        setRole(selectedRole);
    };
    const handleFormSubmit = (e)=>{
        e.preventDefault();
        const formData = new FormData(e.target);
        const email = formData.get('email');
        const password = formData.get('password');
        // Authenticate user
        const user = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Q__Buildathon$2f$utils$2f$mockData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["authenticateUser"])(email, password, role);
        if (user) {
            // In a real app, you would set up a session/cookie here
            // For now, we'll just redirect to the appropriate dashboard
            switch(role){
                case 'student':
                    router.push('/dashboard/student');
                    break;
                case 'faculty':
                    router.push('/dashboard/faculty');
                    break;
                case 'institution':
                    router.push('/dashboard/institution');
                    break;
                default:
                    break;
            }
        } else {
            alert('Invalid credentials. Please try again.');
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Q__Buildathon$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: "Login - Credify"
                    }, void 0, false, {
                        fileName: "[project]/Q Buildathon/pages/login.js",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "theme-color",
                        content: "#7B61FF"
                    }, void 0, false, {
                        fileName: "[project]/Q Buildathon/pages/login.js",
                        lineNumber: 48,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "apple-mobile-web-app-capable",
                        content: "yes"
                    }, void 0, false, {
                        fileName: "[project]/Q Buildathon/pages/login.js",
                        lineNumber: 49,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "apple-mobile-web-app-status-bar-style",
                        content: "default"
                    }, void 0, false, {
                        fileName: "[project]/Q Buildathon/pages/login.js",
                        lineNumber: 50,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Q Buildathon/pages/login.js",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-white flex flex-col items-center justify-center px-10",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-sm mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "text-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                    className: "text-2xl font-semibold text-gray-900 mb-2",
                                    children: "Login to Credify"
                                }, void 0, false, {
                                    fileName: "[project]/Q Buildathon/pages/login.js",
                                    lineNumber: 57,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                    className: "text-gray-500 text-sm",
                                    children: "Enter your credentials to continue"
                                }, void 0, false, {
                                    fileName: "[project]/Q Buildathon/pages/login.js",
                                    lineNumber: 58,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Q Buildathon/pages/login.js",
                            lineNumber: 56,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Q Buildathon/pages/login.js",
                        lineNumber: 55,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-sm mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "flex bg-gray-100 rounded-lg p-1",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleRoleChange('student'),
                                    className: `flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${role === 'student' ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-700'}`,
                                    children: "Student"
                                }, void 0, false, {
                                    fileName: "[project]/Q Buildathon/pages/login.js",
                                    lineNumber: 65,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleRoleChange('faculty'),
                                    className: `flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${role === 'faculty' ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-700'}`,
                                    children: "Faculty"
                                }, void 0, false, {
                                    fileName: "[project]/Q Buildathon/pages/login.js",
                                    lineNumber: 75,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    onClick: ()=>handleRoleChange('institution'),
                                    className: `flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${role === 'institution' ? 'bg-white text-primary shadow-sm' : 'text-gray-500 hover:text-gray-700'}`,
                                    children: "Institution"
                                }, void 0, false, {
                                    fileName: "[project]/Q Buildathon/pages/login.js",
                                    lineNumber: 85,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Q Buildathon/pages/login.js",
                            lineNumber: 64,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Q Buildathon/pages/login.js",
                        lineNumber: 63,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-sm mb-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("form", {
                            onSubmit: handleFormSubmit,
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "email",
                                        name: "email",
                                        placeholder: "Email",
                                        className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/Q Buildathon/pages/login.js",
                                        lineNumber: 102,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Q Buildathon/pages/login.js",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("input", {
                                        type: "password",
                                        name: "password",
                                        placeholder: "Password",
                                        className: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition",
                                        required: true
                                    }, void 0, false, {
                                        fileName: "[project]/Q Buildathon/pages/login.js",
                                        lineNumber: 111,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Q Buildathon/pages/login.js",
                                    lineNumber: 110,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "w-full bg-primary text-white font-medium py-3 rounded-lg hover:bg-primary/90 transition-colors",
                                    children: [
                                        "Login as ",
                                        role.charAt(0).toUpperCase() + role.slice(1)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Q Buildathon/pages/login.js",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Q Buildathon/pages/login.js",
                            lineNumber: 100,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Q Buildathon/pages/login.js",
                        lineNumber: 99,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-sm mb-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "bg-gray-50 rounded-lg p-4 border border-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                    className: "font-medium text-gray-900 mb-2",
                                    children: "Demo Accounts"
                                }, void 0, false, {
                                    fileName: "[project]/Q Buildathon/pages/login.js",
                                    lineNumber: 131,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "space-y-2 text-sm",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "font-medium text-gray-700",
                                                    children: "Student:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Q Buildathon/pages/login.js",
                                                    lineNumber: 134,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600",
                                                    children: "Email: adhil@example.com"
                                                }, void 0, false, {
                                                    fileName: "[project]/Q Buildathon/pages/login.js",
                                                    lineNumber: 135,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600",
                                                    children: "Password: password123"
                                                }, void 0, false, {
                                                    fileName: "[project]/Q Buildathon/pages/login.js",
                                                    lineNumber: 136,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Q Buildathon/pages/login.js",
                                            lineNumber: 133,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "font-medium text-gray-700",
                                                    children: "Faculty:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Q Buildathon/pages/login.js",
                                                    lineNumber: 139,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600",
                                                    children: "Email: sarah.j@simats.edu"
                                                }, void 0, false, {
                                                    fileName: "[project]/Q Buildathon/pages/login.js",
                                                    lineNumber: 140,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600",
                                                    children: "Password: password123"
                                                }, void 0, false, {
                                                    fileName: "[project]/Q Buildathon/pages/login.js",
                                                    lineNumber: 141,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Q Buildathon/pages/login.js",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "font-medium text-gray-700",
                                                    children: "Institution:"
                                                }, void 0, false, {
                                                    fileName: "[project]/Q Buildathon/pages/login.js",
                                                    lineNumber: 144,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600",
                                                    children: "Email: admin@simats.edu"
                                                }, void 0, false, {
                                                    fileName: "[project]/Q Buildathon/pages/login.js",
                                                    lineNumber: 145,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                    className: "text-gray-600",
                                                    children: "Password: password123"
                                                }, void 0, false, {
                                                    fileName: "[project]/Q Buildathon/pages/login.js",
                                                    lineNumber: 146,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Q Buildathon/pages/login.js",
                                            lineNumber: 143,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Q Buildathon/pages/login.js",
                                    lineNumber: 132,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Q Buildathon/pages/login.js",
                            lineNumber: 130,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Q Buildathon/pages/login.js",
                        lineNumber: 129,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "w-full max-w-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                            onClick: ()=>router.push('/'),
                            className: "w-full text-primary font-medium py-2 hover:text-primary/80 transition-colors",
                            children: "Back to Home"
                        }, void 0, false, {
                            fileName: "[project]/Q Buildathon/pages/login.js",
                            lineNumber: 154,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Q Buildathon/pages/login.js",
                        lineNumber: 153,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "absolute bottom-8 text-center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                className: "text-lg font-semibold text-gray-800",
                                children: "Credify"
                            }, void 0, false, {
                                fileName: "[project]/Q Buildathon/pages/login.js",
                                lineNumber: 164,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500",
                                children: "Certificate Verification Platform"
                            }, void 0, false, {
                                fileName: "[project]/Q Buildathon/pages/login.js",
                                lineNumber: 165,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Q Buildathon/pages/login.js",
                        lineNumber: 163,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Q Buildathon/pages/login.js",
                lineNumber: 53,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true);
}
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__f3904185._.js.map