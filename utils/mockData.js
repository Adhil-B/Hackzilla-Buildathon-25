// Mock data for demo accounts
export const mockStudents = [
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

export const mockFaculty = [
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

export const mockInstitutions = [
  {
    id: "INST-2024-001",
    name: "SIMATS University",
    email: "admin@simats.edu",
    password: "password123",
    departments: [
      { id: "DEPT-001", name: "Computer Science", facultyCount: 12, studentCount: 320 },
      { id: "DEPT-002", name: "Mechanical Engineering", facultyCount: 8, studentCount: 280 },
      { id: "DEPT-003", name: "Business Administration", facultyCount: 10, studentCount: 250 },
      { id: "DEPT-004", name: "Electrical Engineering", facultyCount: 9, studentCount: 200 },
      { id: "DEPT-005", name: "Mathematics", facultyCount: 6, studentCount: 100 },
      { id: "DEPT-006", name: "Physics", facultyCount: 5, studentCount: 100 }
    ],
    facultyMembers: 45,
    studentAccounts: 1250,
    pendingApprovals: 8
  }
];

export const mockCertificates = [
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

// Mock authentication function
export const authenticateUser = (email, password, role) => {
  if (role === 'student') {
    return mockStudents.find(student => student.email === email && student.password === password);
  } else if (role === 'faculty') {
    return mockFaculty.find(faculty => faculty.email === email && faculty.password === password);
  } else if (role === 'institution') {
    return mockInstitutions.find(inst => inst.email === email && inst.password === password);
  }
  return null;
};

// Mock approval function
export const approveAccount = (accountId, role) => {
  // In a real app, this would update the database
  console.log(`Approved ${role} account with ID: ${accountId}`);
  return true;
};