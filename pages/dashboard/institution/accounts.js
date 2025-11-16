import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function InstitutionAccounts() {
  const router = useRouter();
  const [selectedAccount, setSelectedAccount] = useState(null);
  
  // Mock data for the institution
  const institutionData = {
    name: "SIMATS University",
    departments: 12,
    facultyMembers: 45,
    studentAccounts: 1250,
    pendingApprovals: 8
  };
  
  const pendingApprovals = [
    { 
      id: 1, 
      name: "Adhil Bijukumar", 
      type: "student", 
      department: "Computer Science",
      email: "adhil@example.com",
      enrollmentDate: "2024-11-15",
      studentId: "STU-2024-5949"
    },
    { 
      id: 2, 
      name: "Dr. Michael Chen", 
      type: "faculty", 
      department: "Computer Science",
      email: "michael.chen@simats.edu",
      employmentDate: "2024-11-10",
      facultyId: "FAC-2024-102"
    },
    { 
      id: 3, 
      name: "Priya Sharma", 
      type: "student", 
      department: "Business Administration",
      email: "priya.sharma@simats.edu",
      enrollmentDate: "2024-11-12",
      studentId: "STU-2024-5950"
    },
    { 
      id: 4, 
      name: "Dr. Robert Johnson", 
      type: "faculty", 
      department: "Mechanical Engineering",
      email: "robert.johnson@simats.edu",
      employmentDate: "2024-11-08",
      facultyId: "FAC-2024-103"
    },
    { 
      id: 5, 
      name: "Amit Patel", 
      type: "student", 
      department: "Electrical Engineering",
      email: "amit.patel@simats.edu",
      enrollmentDate: "2024-11-14",
      studentId: "STU-2024-5951"
    },
    { 
      id: 6, 
      name: "Dr. Sarah Williams", 
      type: "faculty", 
      department: "Mathematics",
      email: "sarah.williams@simats.edu",
      employmentDate: "2024-11-05",
      facultyId: "FAC-2024-104"
    },
    { 
      id: 7, 
      name: "Lisa Wong", 
      type: "student", 
      department: "Physics",
      email: "lisa.wong@simats.edu",
      enrollmentDate: "2024-11-13",
      studentId: "STU-2024-5952"
    },
    { 
      id: 8, 
      name: "Dr. James Brown", 
      type: "faculty", 
      department: "Business Administration",
      email: "james.brown@simats.edu",
      employmentDate: "2024-11-09",
      facultyId: "FAC-2024-105"
    }
  ];

  const handleApprove = (accountId) => {
    // Handle approve logic here
    console.log(`Approved account ${accountId}`);
    setSelectedAccount(null);
  };

  const handleReject = (accountId) => {
    // Handle reject logic here
    console.log(`Rejected account ${accountId}`);
    setSelectedAccount(null);
  };

  return (
    <>
      <Head>
        <title>Accounts - Credify</title>
        <meta name="theme-color" content="#7B61FF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white px-6 pt-12 pb-6">
          <div className="flex items-center justify-between mb-6">
            <button 
              onClick={() => router.back()}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
              </svg>
            </button>
            <h1 className="text-lg font-semibold text-gray-900">Pending Accounts</h1>
            <button 
              onClick={() => router.push('/login')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
              </svg>
            </button>
          </div>

          {/* Institution Info Card */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-semibold text-gray-900">{institutionData.name}</h2>
                <p className="text-sm text-gray-500">Institution Dashboard</p>
              </div>
              <div className="text-right">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Summary */}
          <div className="grid grid-cols-2 gap-3 mb-6">
            {/* Student Accounts */}
            <div className="bg-purple-50 rounded-xl p-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <span className="text-sm text-purple-600 font-medium">Students</span>
              </div>
              <p className="text-lg font-bold text-purple-700">{institutionData.studentAccounts}</p>
            </div>

            {/* Faculty Members */}
            <div className="bg-green-50 rounded-xl p-4">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <span className="text-sm text-green-600 font-medium">Faculty</span>
              </div>
              <p className="text-lg font-bold text-green-700">{institutionData.facultyMembers}</p>
            </div>
          </div>
        </div>

        {/* Pending Approvals Section */}
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Pending Account Approvals</h2>
          </div>

          {/* Pending Approvals List */}
          <div className="space-y-3">
            {pendingApprovals.map((approval) => (
              <div 
                key={approval.id} 
                className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => setSelectedAccount(approval)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 flex-1 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center flex-shrink-0">
                      {approval.type === 'student' ? (
                        <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                        </svg>
                      ) : (
                        <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                        </svg>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-900 text-sm">{approval.name}</h3>
                      <div className="flex items-center space-x-3 mt-1">
                        <span className="text-xs text-gray-500 capitalize">{approval.type}</span>
                        <span className="text-xs text-gray-500">•</span>
                        <span className="text-xs text-gray-500">{approval.department}</span>
                      </div>
                    </div>
                  </div>
                  <div className="text-right ml-3 flex-shrink-0">
                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                    </svg>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Account Detail Popup */}
        {selectedAccount && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">Account Details</h3>
                  <button 
                    onClick={() => setSelectedAccount(null)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                  </button>
                </div>

                <div className="flex items-center space-x-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center flex-shrink-0">
                    {selectedAccount.type === 'student' ? (
                      <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                      </svg>
                    ) : (
                      <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                      </svg>
                    )}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{selectedAccount.name}</h4>
                    <p className="text-sm text-gray-500 capitalize">{selectedAccount.type}</p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Department</p>
                    <p className="text-gray-900">{selectedAccount.department}</p>
                  </div>
                  
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Email</p>
                    <p className="text-gray-900">{selectedAccount.email}</p>
                  </div>
                  
                  {selectedAccount.type === 'student' ? (
                    <>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Student ID</p>
                        <p className="text-gray-900">{selectedAccount.studentId}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Enrollment Date</p>
                        <p className="text-gray-900">{selectedAccount.enrollmentDate}</p>
                      </div>
                    </>
                  ) : (
                    <>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Faculty ID</p>
                        <p className="text-gray-900">{selectedAccount.facultyId}</p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Employment Date</p>
                        <p className="text-gray-900">{selectedAccount.employmentDate}</p>
                      </div>
                    </>
                  )}
                </div>

                <div className="flex space-x-3">
                  <button 
                    onClick={() => handleReject(selectedAccount.id)}
                    className="flex-1 bg-red-500 text-white font-medium py-3 rounded-lg hover:bg-red-600 transition-colors"
                  >
                    Reject
                  </button>
                  <button 
                    onClick={() => handleApprove(selectedAccount.id)}
                    className="flex-1 bg-green-500 text-white font-medium py-3 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Approve
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom padding for navigation */}
        <div className="h-20"></div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-2">
          <div className="flex justify-around items-center max-w-sm mx-auto">
            <button 
              onClick={() => router.push('/dashboard/institution')}
              className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-gray-500 hover:text-gray-700"
            >
              <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              <span className="text-xs font-medium">Home</span>
            </button>
            
            <button 
              onClick={() => router.push('/dashboard/institution/departments')}
              className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-gray-500 hover:text-gray-700"
            >
              <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
              </svg>
              <span className="text-xs font-medium">Departments</span>
            </button>
            
            <button 
              onClick={() => router.push('/dashboard/institution/accounts')}
              className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-primary bg-primary/10"
            >
              <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
              <span className="text-xs font-medium">Accounts</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}