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
"[project]/Q Buildathon/pages/portfolio/[studentId].js [ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StudentResume
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
function StudentResume() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Q__Buildathon$2f$node_modules$2f$next$2f$router$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const { studentId } = router.query;
    const [studentData, setStudentData] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])(null);
    const [studentCertificates, setStudentCertificates] = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useState"])([]);
    (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react__$5b$external$5d$__$28$react$2c$__cjs$29$__["useEffect"])(()=>{
        if (studentId) {
            // Find student by ID
            const student = __TURBOPACK__imported__module__$5b$project$5d2f$Q__Buildathon$2f$utils$2f$mockData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["mockStudents"].find((s)=>s.id === studentId);
            if (student) {
                setStudentData(student);
                // Filter certificates for this student
                const certificates = __TURBOPACK__imported__module__$5b$project$5d2f$Q__Buildathon$2f$utils$2f$mockData$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["mockCertificates"].filter((cert)=>cert.studentId === studentId);
                setStudentCertificates(certificates);
            } else {
                // If student not found, redirect to home or show error
                router.push('/');
            }
        }
    }, [
        studentId,
        router
    ]);
    if (!studentData) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
            className: "min-h-screen bg-gray-50 flex items-center justify-center",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"
                    }, void 0, false, {
                        fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                        lineNumber: 33,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                        className: "mt-4 text-gray-600",
                        children: "Loading portfolio..."
                    }, void 0, false, {
                        fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                        lineNumber: 34,
                        columnNumber: 11
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                lineNumber: 32,
                columnNumber: 9
            }, this)
        }, void 0, false, {
            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
            lineNumber: 31,
            columnNumber: 7
        }, this);
    }
    // AI-generated resume summary
    const generateResumeSummary = ()=>{
        const totalCredits = studentCertificates.filter((cert)=>cert.status === 'verified').reduce((sum, cert)=>sum + cert.credits, 0);
        const skills = [
            ...new Set(studentCertificates.filter((cert)=>cert.status === 'verified').map((cert)=>cert.type))
        ];
        const achievements = studentCertificates.filter((cert)=>cert.status === 'verified' && cert.credits > 15).map((cert)=>cert.title);
        // Calculate experience years based on certificates
        const experienceYears = Math.floor(studentCertificates.filter((c)=>c.status === 'verified').length / 3);
        return {
            totalCredits,
            skills,
            achievements,
            experienceYears: experienceYears > 0 ? experienceYears : 1,
            experienceLevel: totalCredits > 50 ? 'Advanced' : totalCredits > 25 ? 'Intermediate' : 'Entry Level'
        };
    };
    const resumeSummary = generateResumeSummary();
    // Group certificates by type
    const groupedCertificates = studentCertificates.filter((cert)=>cert.status === 'verified').reduce((groups, cert)=>{
        const group = groups[cert.type] || [];
        group.push(cert);
        groups[cert.type] = group;
        return groups;
    }, {});
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$Q__Buildathon$2f$node_modules$2f$next$2f$head$2e$js__$5b$ssr$5d$__$28$ecmascript$29$__["default"], {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("title", {
                        children: [
                            studentData.name,
                            "'s Resume - Credify"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                        lineNumber: 81,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "description",
                        content: `Resume of ${studentData.name} showcasing verified academic achievements and certificates`
                    }, void 0, false, {
                        fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                        lineNumber: 82,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "theme-color",
                        content: "#7B61FF"
                    }, void 0, false, {
                        fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "apple-mobile-web-app-capable",
                        content: "yes"
                    }, void 0, false, {
                        fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                        lineNumber: 84,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("meta", {
                        name: "apple-mobile-web-app-status-bar-style",
                        content: "default"
                    }, void 0, false, {
                        fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                        lineNumber: 85,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                className: "min-h-screen bg-gray-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "bg-white shadow-sm",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "max-w-4xl mx-auto px-6 py-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("button", {
                                        onClick: ()=>router.back(),
                                        className: "p-2 hover:bg-gray-100 rounded-lg transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                            className: "w-5 h-5 text-gray-600",
                                            fill: "none",
                                            stroke: "currentColor",
                                            viewBox: "0 0 24 24",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: "2",
                                                d: "M15 19l-7-7 7-7"
                                            }, void 0, false, {
                                                fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                lineNumber: 98,
                                                columnNumber: 19
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                            lineNumber: 97,
                                            columnNumber: 17
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                        lineNumber: 93,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                        className: "text-lg font-semibold text-gray-900 flex items-center",
                                        children: [
                                            "Student Resume",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                className: "ml-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full flex items-center",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                        className: "w-3 h-3 mr-1",
                                                        fill: "none",
                                                        stroke: "currentColor",
                                                        viewBox: "0 0 24 24",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                            strokeLinecap: "round",
                                                            strokeLinejoin: "round",
                                                            strokeWidth: "2",
                                                            d: "M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                            lineNumber: 105,
                                                            columnNumber: 21
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                        lineNumber: 104,
                                                        columnNumber: 19
                                                    }, this),
                                                    "AI Generated"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                lineNumber: 103,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                        lineNumber: 101,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {}, void 0, false, {
                                        fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                        lineNumber: 110,
                                        columnNumber: 15
                                    }, this),
                                    " "
                                ]
                            }, void 0, true, {
                                fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                lineNumber: 92,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                            lineNumber: 91,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                        className: "max-w-4xl mx-auto px-6 py-8",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                            className: "bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "flex flex-col md:flex-row items-center",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                    className: "text-2xl font-bold",
                                                    children: studentData.name.split(' ').map((n)=>n[0]).join('')
                                                }, void 0, false, {
                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                    lineNumber: 122,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                lineNumber: 121,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                className: "text-center md:text-left",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h1", {
                                                        className: "text-3xl font-bold mb-2",
                                                        children: studentData.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                        lineNumber: 127,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-white/90 text-lg mb-1",
                                                        children: studentData.department
                                                    }, void 0, false, {
                                                        fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                        lineNumber: 128,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                        className: "text-white/80 mb-3",
                                                        children: studentData.institution
                                                    }, void 0, false, {
                                                        fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                        lineNumber: 129,
                                                        columnNumber: 19
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                        className: "flex flex-wrap justify-center md:justify-start gap-2",
                                                        children: [
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "bg-white/20 px-3 py-1 rounded-full text-sm",
                                                                children: resumeSummary.experienceLevel
                                                            }, void 0, false, {
                                                                fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                lineNumber: 131,
                                                                columnNumber: 21
                                                            }, this),
                                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                className: "bg-white/20 px-3 py-1 rounded-full text-sm",
                                                                children: [
                                                                    resumeSummary.experienceYears,
                                                                    "+ Years Experience"
                                                                ]
                                                            }, void 0, true, {
                                                                fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                lineNumber: 134,
                                                                columnNumber: 21
                                                            }, this)
                                                        ]
                                                    }, void 0, true, {
                                                        fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                        lineNumber: 130,
                                                        columnNumber: 19
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                lineNumber: 126,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                        lineNumber: 120,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                    lineNumber: 119,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 lg:grid-cols-3 gap-8 p-8",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "lg:col-span-1",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "mb-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                            className: "text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200",
                                                            children: "Contact"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                            lineNumber: 147,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "space-y-3",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                                            className: "w-5 h-5 text-gray-500 mr-3",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: "2",
                                                                                d: "M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                                lineNumber: 151,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                            lineNumber: 150,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                            className: "text-gray-700",
                                                                            children: studentData.email
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                            lineNumber: 153,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                    lineNumber: 149,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                                            className: "w-5 h-5 text-gray-500 mr-3",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                                                strokeLinecap: "round",
                                                                                strokeLinejoin: "round",
                                                                                strokeWidth: "2",
                                                                                d: "M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                                                                            }, void 0, false, {
                                                                                fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                                lineNumber: 157,
                                                                                columnNumber: 25
                                                                            }, this)
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                            lineNumber: 156,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                            className: "text-gray-700",
                                                                            children: studentData.institution
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                            lineNumber: 159,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                    lineNumber: 155,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "flex items-center",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                                            className: "w-5 h-5 text-gray-500 mr-3",
                                                                            fill: "none",
                                                                            stroke: "currentColor",
                                                                            viewBox: "0 0 24 24",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    strokeWidth: "2",
                                                                                    d: "M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                                    lineNumber: 163,
                                                                                    columnNumber: 25
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                                                    strokeLinecap: "round",
                                                                                    strokeLinejoin: "round",
                                                                                    strokeWidth: "2",
                                                                                    d: "M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                                    lineNumber: 164,
                                                                                    columnNumber: 25
                                                                                }, this)
                                                                            ]
                                                                        }, void 0, true, {
                                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                            lineNumber: 162,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                            className: "text-gray-700",
                                                                            children: "Chennai, India"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                            lineNumber: 166,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                    lineNumber: 161,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                            lineNumber: 148,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                    lineNumber: 146,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "mb-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                            className: "text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200",
                                                            children: "Skills"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                            lineNumber: 173,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "flex flex-wrap gap-2",
                                                            children: resumeSummary.skills.map((skill, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                    className: "bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700 capitalize",
                                                                    children: skill
                                                                }, index, false, {
                                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                    lineNumber: 176,
                                                                    columnNumber: 23
                                                                }, this))
                                                        }, void 0, false, {
                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                            lineNumber: 174,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                    lineNumber: 172,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                            className: "text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200",
                                                            children: "Summary"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                            lineNumber: 185,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                            className: "text-gray-700",
                                                            children: [
                                                                "Dedicated student with ",
                                                                resumeSummary.experienceYears,
                                                                "+ years of experience in ",
                                                                studentData.department.toLowerCase(),
                                                                ". Proven track record of academic excellence with ",
                                                                resumeSummary.totalCredits,
                                                                " credits earned through verified certifications. Skilled in ",
                                                                resumeSummary.skills.join(', ').toLowerCase(),
                                                                " with a commitment to continuous learning and professional development."
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                            lineNumber: 186,
                                                            columnNumber: 19
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                    lineNumber: 184,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                            lineNumber: 144,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                            className: "lg:col-span-2",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    className: "mb-8",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                            className: "text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200",
                                                            children: "Resume Highlights"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                            lineNumber: 198,
                                                            columnNumber: 19
                                                        }, this),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "grid grid-cols-1 md:grid-cols-3 gap-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "bg-green-50 rounded-xl p-4 border border-green-100",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                            className: "text-2xl font-bold text-green-700",
                                                                            children: resumeSummary.totalCredits
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                            lineNumber: 201,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                            className: "text-green-600 text-sm",
                                                                            children: "Total Credits Earned"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                            lineNumber: 202,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                    lineNumber: 200,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "bg-blue-50 rounded-xl p-4 border border-blue-100",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                            className: "text-2xl font-bold text-blue-700",
                                                                            children: studentCertificates.filter((c)=>c.status === 'verified').length
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                            lineNumber: 205,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                            className: "text-blue-600 text-sm",
                                                                            children: "Verified Certificates"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                            lineNumber: 206,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                    lineNumber: 204,
                                                                    columnNumber: 21
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                    className: "bg-gray-50 rounded-xl p-4 border border-gray-200",
                                                                    children: [
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                            className: "text-2xl font-bold text-gray-700",
                                                                            children: resumeSummary.skills.length
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                            lineNumber: 209,
                                                                            columnNumber: 23
                                                                        }, this),
                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                            className: "text-gray-600 text-sm",
                                                                            children: "Skill Areas"
                                                                        }, void 0, false, {
                                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                            lineNumber: 210,
                                                                            columnNumber: 23
                                                                        }, this)
                                                                    ]
                                                                }, void 0, true, {
                                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                    lineNumber: 208,
                                                                    columnNumber: 21
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                            lineNumber: 199,
                                                            columnNumber: 19
                                                        }, this),
                                                        resumeSummary.achievements.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "mt-4",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                    className: "font-semibold text-gray-900 mb-2",
                                                                    children: "Notable Achievements"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                    lineNumber: 216,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("ul", {
                                                                    className: "space-y-2",
                                                                    children: resumeSummary.achievements.map((achievement, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("li", {
                                                                            className: "flex items-start",
                                                                            children: [
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                                                    className: "w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0",
                                                                                    fill: "none",
                                                                                    stroke: "currentColor",
                                                                                    viewBox: "0 0 24 24",
                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                                                        strokeLinecap: "round",
                                                                                        strokeLinejoin: "round",
                                                                                        strokeWidth: "2",
                                                                                        d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                                    }, void 0, false, {
                                                                                        fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                                        lineNumber: 221,
                                                                                        columnNumber: 31
                                                                                    }, this)
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                                    lineNumber: 220,
                                                                                    columnNumber: 29
                                                                                }, this),
                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                    className: "text-gray-700",
                                                                                    children: achievement
                                                                                }, void 0, false, {
                                                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                                    lineNumber: 223,
                                                                                    columnNumber: 29
                                                                                }, this)
                                                                            ]
                                                                        }, index, true, {
                                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                            lineNumber: 219,
                                                                            columnNumber: 27
                                                                        }, this))
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                    lineNumber: 217,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                            lineNumber: 215,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                    lineNumber: 197,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h2", {
                                                            className: "text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200",
                                                            children: "Certifications"
                                                        }, void 0, false, {
                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                            lineNumber: 233,
                                                            columnNumber: 19
                                                        }, this),
                                                        Object.keys(groupedCertificates).length > 0 ? Object.entries(groupedCertificates).map(([type, certificates])=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                className: "mb-6",
                                                                children: [
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                        className: "font-semibold text-gray-900 mb-3 capitalize",
                                                                        children: [
                                                                            type,
                                                                            " Certifications"
                                                                        ]
                                                                    }, void 0, true, {
                                                                        fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                        lineNumber: 238,
                                                                        columnNumber: 25
                                                                    }, this),
                                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                        className: "space-y-4",
                                                                        children: certificates.map((cert)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                                className: "border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow",
                                                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                                    className: "flex items-start",
                                                                                    children: [
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                                            className: `w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 ${cert.type === 'workshop' ? 'bg-blue-50' : cert.type === 'competition' ? 'bg-green-50' : cert.type === 'course' ? 'bg-indigo-50' : cert.type === 'leadership' ? 'bg-yellow-50' : 'bg-gray-50'}`,
                                                                                            children: [
                                                                                                cert.type === 'workshop' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                                                                    className: "w-5 h-5 text-blue-500",
                                                                                                    fill: "none",
                                                                                                    stroke: "currentColor",
                                                                                                    viewBox: "0 0 24 24",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                                                                        strokeLinecap: "round",
                                                                                                        strokeLinejoin: "round",
                                                                                                        strokeWidth: "2",
                                                                                                        d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                                                        lineNumber: 251,
                                                                                                        columnNumber: 39
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                                                    lineNumber: 250,
                                                                                                    columnNumber: 37
                                                                                                }, this),
                                                                                                cert.type === 'competition' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                                                                    className: "w-5 h-5 text-green-500",
                                                                                                    fill: "none",
                                                                                                    stroke: "currentColor",
                                                                                                    viewBox: "0 0 24 24",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                                                                        strokeLinecap: "round",
                                                                                                        strokeLinejoin: "round",
                                                                                                        strokeWidth: "2",
                                                                                                        d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                                                        lineNumber: 256,
                                                                                                        columnNumber: 39
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                                                    lineNumber: 255,
                                                                                                    columnNumber: 37
                                                                                                }, this),
                                                                                                cert.type === 'course' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                                                                    className: "w-5 h-5 text-indigo-500",
                                                                                                    fill: "none",
                                                                                                    stroke: "currentColor",
                                                                                                    viewBox: "0 0 24 24",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                                                                        strokeLinecap: "round",
                                                                                                        strokeLinejoin: "round",
                                                                                                        strokeWidth: "2",
                                                                                                        d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                                                        lineNumber: 261,
                                                                                                        columnNumber: 39
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                                                    lineNumber: 260,
                                                                                                    columnNumber: 37
                                                                                                }, this),
                                                                                                cert.type === 'leadership' && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                                                                    className: "w-5 h-5 text-yellow-500",
                                                                                                    fill: "none",
                                                                                                    stroke: "currentColor",
                                                                                                    viewBox: "0 0 24 24",
                                                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                                                                        strokeLinecap: "round",
                                                                                                        strokeLinejoin: "round",
                                                                                                        strokeWidth: "2",
                                                                                                        d: "M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                                                                                                    }, void 0, false, {
                                                                                                        fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                                                        lineNumber: 266,
                                                                                                        columnNumber: 39
                                                                                                    }, this)
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                                                    lineNumber: 265,
                                                                                                    columnNumber: 37
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                                            lineNumber: 243,
                                                                                            columnNumber: 33
                                                                                        }, this),
                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                                            className: "flex-1",
                                                                                            children: [
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                                                    className: "flex flex-wrap items-center justify-between",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                                                            className: "font-semibold text-gray-900",
                                                                                                            children: cert.title
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                                                            lineNumber: 272,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                                            className: "font-bold text-green-600",
                                                                                                            children: [
                                                                                                                "+",
                                                                                                                cert.credits
                                                                                                            ]
                                                                                                        }, void 0, true, {
                                                                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                                                            lineNumber: 273,
                                                                                                            columnNumber: 37
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                                                    lineNumber: 271,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                                                                    className: "flex flex-wrap items-center text-sm text-gray-500 mt-1",
                                                                                                    children: [
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                                            children: cert.date
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                                                            lineNumber: 276,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                                            className: "mx-2",
                                                                                                            children: "•"
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                                                            lineNumber: 277,
                                                                                                            columnNumber: 37
                                                                                                        }, this),
                                                                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("span", {
                                                                                                            children: cert.department
                                                                                                        }, void 0, false, {
                                                                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                                                            lineNumber: 278,
                                                                                                            columnNumber: 37
                                                                                                        }, this)
                                                                                                    ]
                                                                                                }, void 0, true, {
                                                                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                                                    lineNumber: 275,
                                                                                                    columnNumber: 35
                                                                                                }, this),
                                                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                                                    className: "text-gray-600 text-sm mt-2",
                                                                                                    children: cert.description
                                                                                                }, void 0, false, {
                                                                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                                                    lineNumber: 280,
                                                                                                    columnNumber: 35
                                                                                                }, this)
                                                                                            ]
                                                                                        }, void 0, true, {
                                                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                                            lineNumber: 270,
                                                                                            columnNumber: 33
                                                                                        }, this)
                                                                                    ]
                                                                                }, void 0, true, {
                                                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                                    lineNumber: 242,
                                                                                    columnNumber: 31
                                                                                }, this)
                                                                            }, cert.id, false, {
                                                                                fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                                lineNumber: 241,
                                                                                columnNumber: 29
                                                                            }, this))
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                        lineNumber: 239,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                ]
                                                            }, type, true, {
                                                                fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                lineNumber: 237,
                                                                columnNumber: 23
                                                            }, this)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                                            className: "text-center py-8",
                                                            children: [
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("svg", {
                                                                    className: "w-16 h-16 mx-auto text-gray-300",
                                                                    fill: "none",
                                                                    stroke: "currentColor",
                                                                    viewBox: "0 0 24 24",
                                                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("path", {
                                                                        strokeLinecap: "round",
                                                                        strokeLinejoin: "round",
                                                                        strokeWidth: "2",
                                                                        d: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                                                    }, void 0, false, {
                                                                        fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                        lineNumber: 291,
                                                                        columnNumber: 25
                                                                    }, this)
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                    lineNumber: 290,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("h3", {
                                                                    className: "mt-4 text-lg font-medium text-gray-900",
                                                                    children: "No verified certificates"
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                    lineNumber: 293,
                                                                    columnNumber: 23
                                                                }, this),
                                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                                    className: "mt-1 text-gray-500",
                                                                    children: "This student doesn't have any verified certificates yet."
                                                                }, void 0, false, {
                                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                                    lineNumber: 294,
                                                                    columnNumber: 23
                                                                }, this)
                                                            ]
                                                        }, void 0, true, {
                                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                            lineNumber: 289,
                                                            columnNumber: 21
                                                        }, this)
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                    lineNumber: 232,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                            lineNumber: 195,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                    lineNumber: 142,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                    className: "bg-gray-50 px-8 py-6 border-t border-gray-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("div", {
                                        className: "text-center text-gray-500 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                children: "Resume automatically generated by Credify AI • Verified and secure academic credentials platform"
                                            }, void 0, false, {
                                                fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                lineNumber: 304,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$externals$5d2f$react$2f$jsx$2d$dev$2d$runtime__$5b$external$5d$__$28$react$2f$jsx$2d$dev$2d$runtime$2c$__cjs$29$__["jsxDEV"])("p", {
                                                className: "mt-1",
                                                children: [
                                                    "Student ID: ",
                                                    studentData.id
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                                lineNumber: 305,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                        lineNumber: 303,
                                        columnNumber: 15
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                                    lineNumber: 302,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                            lineNumber: 117,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                        lineNumber: 116,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/Q Buildathon/pages/portfolio/[studentId].js",
                lineNumber: 88,
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

//# sourceMappingURL=%5Broot-of-the-server%5D__c4c8234b._.js.map