import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';

export default function DepartmentManagement() {
  const router = useRouter();
  const { id } = router.query;
  
  // Mock data for the department
  const [departmentData, setDepartmentData] = useState({
    id: id || 1,
    name: "Computer Science",
    code: "CS",
    facultyCount: 12,
    studentCount: 320
  });
  
  // Mock faculty data
  const [faculties, setFaculties] = useState([
    { id: 1, name: "Dr. Michael Chen", email: "michael.chen@simats.edu", role: "Head of Department" },
    { id: 2, name: "Dr. Sarah Johnson", email: "sarah.johnson@simats.edu", role: "Professor" },
    { id: 3, name: "Dr. Robert Smith", email: "robert.smith@simats.edu", role: "Assistant Professor" },
    { id: 4, name: "Dr. Emily Davis", email: "emily.davis@simats.edu", role: "Assistant Professor" },
    { id: 5, name: "Dr. James Wilson", email: "james.wilson@simats.edu", role: "Lecturer" }
  ]);
  
  const [newFacultyEmail, setNewFacultyEmail] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editedDepartment, setEditedDepartment] = useState({...departmentData});

  const handleAddFaculty = () => {
    if (newFacultyEmail.trim() !== "") {
      const newFaculty = {
        id: faculties.length + 1,
        name: `New Faculty ${faculties.length + 1}`,
        email: newFacultyEmail,
        role: "Lecturer"
      };
      setFaculties([...faculties, newFaculty]);
      setNewFacultyEmail("");
    }
  };

  const handleRemoveFaculty = (facultyId) => {
    setFaculties(faculties.filter(faculty => faculty.id !== facultyId));
  };

  const handleSaveChanges = () => {
    setDepartmentData(editedDepartment);
    setIsEditing(false);
  };

  const handleCancelEdit = () => {
    setEditedDepartment({...departmentData});
    setIsEditing(false);
  };

  // Navigation items for sidebar
  const navItems = [
    { name: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', href: '/dashboard/institution', active: false },
    { name: 'Departments', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4', href: '/dashboard/institution/departments', active: true },
    { name: 'Accounts', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', href: '/dashboard/institution/accounts', active: false },
    { name: 'Profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', href: '/profile?userType=institution', active: false }
  ];

  return (
    <>
      <Head>
        <title>Manage Department - Credify</title>
        <meta name="theme-color" content="#7B61FF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Head>
      
      <div className="min-h-screen bg-gray-50 flex">
        {/* Desktop Sidebar Navigation */}
        <div className="hidden md:block md:w-64 md:bg-white md:border-r md:border-gray-200 md:fixed md:h-full md:top-0 md:left-0 md:pt-6">
          <div className="px-6 mb-8">
            <h1 className="text-xl font-bold text-primary">Credify</h1>
          </div>
          <nav className="px-4 flex flex-col h-[calc(100%-4rem)]">
            <ul className="space-y-2 flex-1">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link href={item.href}>
                    <div className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors cursor-pointer ${
                      item.active 
                        ? 'bg-primary/10 text-primary' 
                        : 'text-gray-600 hover:bg-gray-100'
                    }`}>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path>
                      </svg>
                      <span className="font-medium">{item.name}</span>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
            {/* Logout Button - Desktop Only */}
            <div className="mt-auto pb-6">
              <button 
                onClick={() => router.push('/login')}
                className="flex items-center space-x-3 w-full px-4 py-3 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                </svg>
                <span className="font-medium">Logout</span>
              </button>
            </div>
          </nav>
        </div>

        {/* Main Content */}
        <div className="flex-1 md:ml-64">
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
              <h1 className="text-lg font-semibold text-gray-900">Manage Department</h1>
              <button 
                onClick={() => router.push('/login')}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                </svg>
              </button>
            </div>

            {/* Department Info Card */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="font-semibold text-gray-900">Department Details</h2>
                {!isEditing ? (
                  <button 
                    onClick={() => setIsEditing(true)}
                    className="text-sm text-primary font-medium hover:text-primary/80"
                  >
                    Edit
                  </button>
                ) : (
                  <div className="space-x-2">
                    <button 
                      onClick={handleCancelEdit}
                      className="text-sm text-gray-500 font-medium hover:text-gray-700"
                    >
                      Cancel
                    </button>
                    <button 
                      onClick={handleSaveChanges}
                      className="text-sm text-primary font-medium hover:text-primary/80"
                    >
                      Save
                    </button>
                  </div>
                )}
              </div>
              
              {isEditing ? (
                <div className="space-y-4">
                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Department Name</label>
                    <input
                      type="text"
                      value={editedDepartment.name}
                      onChange={(e) => setEditedDepartment({...editedDepartment, name: e.target.value})}
                      className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs text-gray-500 uppercase tracking-wider mb-1">Department Code</label>
                    <input
                      type="text"
                      value={editedDepartment.code}
                      onChange={(e) => setEditedDepartment({...editedDepartment, code: e.target.value})}
                      className="w-full p-2 border border-gray-300 rounded-lg text-sm"
                    />
                  </div>
                </div>
              ) : (
                <div className="space-y-3">
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Department Name</p>
                    <p className="text-gray-900">{departmentData.name}</p>
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Department Code</p>
                    <p className="text-gray-900">{departmentData.code}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Stats Summary */}
            <div className="grid grid-cols-2 gap-3 mb-6">
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
                <p className="text-lg font-bold text-green-700">{faculties.length}</p>
              </div>

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
                <p className="text-lg font-bold text-purple-700">{departmentData.studentCount}</p>
              </div>
            </div>
          </div>

          {/* Faculty Management Section */}
          <div className="px-6 py-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">Faculty Members</h2>
            </div>

            {/* Add Faculty Form */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
              <h3 className="font-medium text-gray-900 mb-3">Add New Faculty</h3>
              <div className="flex space-x-2">
                <input
                  type="email"
                  value={newFacultyEmail}
                  onChange={(e) => setNewFacultyEmail(e.target.value)}
                  placeholder="Enter faculty email"
                  className="flex-1 p-2 border border-gray-300 rounded-lg text-sm"
                />
                <button 
                  onClick={handleAddFaculty}
                  className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium"
                >
                  Add
                </button>
              </div>
            </div>

            {/* Faculty List */}
            <div className="space-y-3">
              {faculties.map((faculty) => (
                <div key={faculty.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 flex-1 min-w-0">
                      <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-gray-900 text-sm">{faculty.name}</h3>
                        <p className="text-xs text-gray-500">{faculty.email}</p>
                        <p className="text-xs text-gray-400">{faculty.role}</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => handleRemoveFaculty(faculty.id)}
                      className="text-red-500 hover:text-red-700 p-2"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom padding for navigation */}
          <div className="h-20"></div>

          {/* Bottom Navigation - Mobile Only */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-2">
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
                className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-primary bg-primary/10"
              >
                <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                </svg>
                <span className="text-xs font-medium">Departments</span>
              </button>
              
              <button 
                onClick={() => router.push('/dashboard/institution/accounts')}
                className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-gray-500 hover:text-gray-700"
              >
                <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                <span className="text-xs font-medium">Accounts</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}