import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { mockStudents, mockFaculty, mockInstitutions } from '../utils/mockData';

export default function Profile() {
  const router = useRouter();
  const [userData, setUserData] = useState(mockStudents[0]); // Default to student
  const [userType, setUserType] = useState('student'); // Default to student
  
  // For demo purposes, we'll determine the user type from the referrer or session
  // In a real app, this would come from authentication context
  useEffect(() => {
    // First check if user type is passed as a query parameter
    if (router.query.userType) {
      let user, type = router.query.userType;
      
      switch (type) {
        case 'faculty':
          user = mockFaculty[0]; // Dr. Sarah Johnson
          break;
        case 'institution':
          user = mockInstitutions[0]; // SIMATS University
          break;
        default: // student
          user = mockStudents[0]; // Adhil Bijukumar
          break;
      }
      
      setUserData(user);
      setUserType(type);
      return;
    }
    
    // Fallback to referrer-based detection
    const referrer = document.referrer;
    
    let user, type;
    
    // Default to student if no referrer or for demo purposes
    if (referrer.includes('/dashboard/faculty')) {
      user = mockFaculty[0]; // Dr. Sarah Johnson
      type = 'faculty';
    } else if (referrer.includes('/dashboard/institution')) {
      user = mockInstitutions[0]; // SIMATS University
      type = 'institution';
    } else {
      user = mockStudents[0]; // Adhil Bijukumar
      type = 'student';
    }
    
    setUserData(user);
    setUserType(type);
  }, [router.query.userType]);

  return (
    <>
      <Head>
        <title>Profile - Credify</title>
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
            <h1 className="text-lg font-semibold text-gray-900">Profile</h1>
            <button 
              onClick={() => router.push('/settings')}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </button>
          </div>

          {/* Profile Info */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl font-semibold text-gray-600">
                {userData.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900">{userData.name}</h2>
            {userType === 'student' && <p className="text-gray-500 hidden">{userData.username}</p>}
            {userType === 'faculty' && <p className="text-gray-500">{userData.department}</p>}
            {userType === 'institution' && <p className="text-gray-500">Institution</p>}
            {userType === 'student' && (
              <button 
                onClick={() => router.push(`/portfolio/${userData.id}`)}
                className="mt-2 text-primary text-sm font-medium hover:text-primary/80 flex items-center"
              >
                View Public Resume
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
              </button>
            )}
          </div>

          {/* User Card - Conditional rendering based on user type */}
          {userType === 'student' ? (
            <div className="relative mb-6">
              {/* Main Card */}
              <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-xl p-4 text-white shadow-xl relative overflow-hidden">
                {/* Grade Glow Effect */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-400/30 via-yellow-300/20 to-transparent rounded-full -translate-y-16 translate-x-16 blur-sm"></div>
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-300/40 via-yellow-200/25 to-transparent rounded-full -translate-y-12 translate-x-12"></div>
                
                {/* Card Header */}
                <div className="flex justify-between items-start mb-6 relative z-10">
                  <div className="flex flex-col space-y-1">
                    <div className="flex items-center space-x-2">
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
                      </svg>
                      <span className="text-sm font-semibold text-white">Credify</span>
                    </div>
                    <div>
                      <p className="text-xs text-white/60">Certificate Platform</p>
                    </div>
                  </div>
                  <div className="text-right relative">
                    <p className="text-xs opacity-75">GRADE</p>
                    <p className="text-lg font-bold text-yellow-300 drop-shadow-lg">{userData.grade}</p>
                  </div>
                </div>

                {/* Card Number */}
                <div className="mb-6 relative z-10">
                  <div className="text-xl font-mono tracking-wider">
                    <span className="text-white font-semibold">{userData.id}</span>
                  </div>
                </div>

                {/* Bottom Info Section */}
                <div className="flex justify-between items-end relative z-10">
                  <div>
                    <p className="text-xs opacity-75 mb-1">STUDENT NAME</p>
                    <p className="font-semibold text-sm">{userData.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs opacity-75 mb-1">INSTITUTION</p>
                    <p className="font-medium text-xs">{userData.institution}</p>
                  </div>
                </div>

                {/* Original Card Design Elements */}
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent rounded-full translate-y-8 -translate-x-8"></div>
              </div>

              {/* Card Shadow/Reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl transform translate-y-1 translate-x-1 -z-10 opacity-30"></div>
            </div>
          ) : userType === 'faculty' ? (
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-semibold text-gray-900">{userData.name}</h2>
                  <p className="text-sm text-gray-500">{userData.department}</p>
                  <p className="text-xs text-gray-400">{userData.institution}</p>
                </div>
                <div className="text-right">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
              <div className="flex justify-between items-center">
                <div>
                  <h2 className="font-semibold text-gray-900">{userData.name}</h2>
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
          )}

          {/* Stats Summary - Conditional rendering based on user type */}
          {userType === 'student' ? (
            <>
              <div className="grid grid-cols-3 gap-3 mb-6">
                {/* Credits Earned */}
                <div className="bg-green-50 rounded-xl p-3 text-center border border-green-100">
                  <p className="text-lg font-bold text-green-700">{userData.creditsEarned}</p>
                  <p className="text-xs text-green-600">Credits</p>
                </div>

                {/* Certificates */}
                <div className="bg-blue-50 rounded-xl p-3 text-center border border-blue-100">
                  <p className="text-lg font-bold text-blue-700">{userData.certificates}</p>
                  <p className="text-xs text-blue-600">Certificates</p>
                </div>

                {/* Achievements */}
                <div className="bg-purple-50 rounded-xl p-3 text-center border border-purple-100">
                  <p className="text-lg font-bold text-purple-700">{userData.achievements}</p>
                  <p className="text-xs text-purple-600">Achievements</p>
                </div>
              </div>

              {/* Share Profile Button for Students - Moved to below stats */}
              <div className="mb-6">
                <button className="w-full bg-primary text-white font-medium py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"></path>
                  </svg>
                  Share Profile
                </button>
              </div>
            </>
          ) : userType === 'faculty' ? (
            <div className="flex space-x-3 mb-6">
              {/* Assigned Certificates */}
              <div className="flex-1 bg-blue-50 rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <span className="text-sm text-blue-600 font-medium">Assigned</span>
                </div>
                <p className="text-lg font-bold text-blue-700">{userData.certificatesAssigned}</p>
              </div>

              {/* Pending Reviews */}
              <div className="flex-1 bg-yellow-50 rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <span className="text-sm text-yellow-600 font-medium">Pending</span>
                </div>
                <p className="text-lg font-bold text-yellow-700">{userData.pendingReviews}</p>
              </div>
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-3 mb-6">
              {/* Departments */}
              <div className="bg-blue-50 rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                    </svg>
                  </div>
                  <span className="text-sm text-blue-600 font-medium">Departments</span>
                </div>
                <p className="text-lg font-bold text-blue-700">{userData.departments.length}</p>
              </div>

              {/* Faculty Members */}
              <div className="bg-green-50 rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 11-8 0 4 4 0 018 0zM15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                  </div>
                  <span className="text-sm text-green-600 font-medium">Faculty</span>
                </div>
                <p className="text-lg font-bold text-green-700">{userData.facultyMembers}</p>
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
                <p className="text-lg font-bold text-purple-700">{userData.studentAccounts}</p>
              </div>

              {/* Pending Approvals */}
              <div className="bg-yellow-50 rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </div>
                  <span className="text-sm text-yellow-600 font-medium">Pending</span>
                </div>
                <p className="text-lg font-bold text-yellow-700">{userData.pendingApprovals}</p>
              </div>
            </div>
          )}
        </div>

        {/* Gallery Section - Conditional rendering based on user type */}
        {userType === 'student' ? (
          <div className="px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">My Gallery</h2>
            
            <div className="grid grid-cols-2 gap-3">
              {/* Certificate 1 */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 aspect-square flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm text-center">Web Dev Workshop</h3>
                <p className="text-xs text-gray-500 mt-1">Nov 9, 2024</p>
              </div>
              
              {/* Certificate 2 */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 aspect-square flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm text-center">Hackathon 2024</h3>
                <p className="text-xs text-gray-500 mt-1">Nov 8, 2024</p>
              </div>
              
              {/* Certificate 3 */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 aspect-square flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm text-center">Leadership Training</h3>
                <p className="text-xs text-gray-500 mt-1">Nov 7, 2024</p>
              </div>
              
              {/* Add Certificate */}
              <div className="bg-gray-100 rounded-xl p-4 shadow-sm border border-gray-200 aspect-square flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-500 text-sm text-center">Add Certificate</h3>
              </div>
            </div>
          </div>
        ) : userType === 'faculty' ? (
          <div className="px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Department Overview</h2>
            
            <div className="grid grid-cols-2 gap-3">
              {/* Department Info */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 aspect-square flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm text-center">{userData.department}</h3>
                <p className="text-xs text-gray-500 mt-1">Department</p>
              </div>
              
              {/* Certificates to Review */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 aspect-square flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm text-center">{userData.pendingReviews} Pending</h3>
                <p className="text-xs text-gray-500 mt-1">Reviews</p>
              </div>
              
              {/* Students */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 aspect-square flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm text-center">120 Students</h3>
                <p className="text-xs text-gray-500 mt-1">Enrolled</p>
              </div>
              
              {/* Add Resource */}
              <div className="bg-gray-100 rounded-xl p-4 shadow-sm border border-gray-200 aspect-square flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-gray-200 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-500 text-sm text-center">Add Resource</h3>
              </div>
            </div>
          </div>
        ) : (
          <div className="px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Institution Overview</h2>
            
            <div className="grid grid-cols-2 gap-3">
              {/* Departments */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 aspect-square flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm text-center">{userData.departments.length}</h3>
                <p className="text-xs text-gray-500 mt-1">Departments</p>
              </div>
              
              {/* Faculty Members */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 aspect-square flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm text-center">{userData.facultyMembers}</h3>
                <p className="text-xs text-gray-500 mt-1">Faculty</p>
              </div>
              
              {/* Student Accounts */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 aspect-square flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm text-center">{userData.studentAccounts}</h3>
                <p className="text-xs text-gray-500 mt-1">Students</p>
              </div>
              
              {/* Pending Approvals */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 aspect-square flex flex-col items-center justify-center">
                <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center mb-3">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 text-sm text-center">{userData.pendingApprovals}</h3>
                <p className="text-xs text-gray-500 mt-1">Pending</p>
              </div>
            </div>
          </div>
        )}

        {/* Bottom padding for navigation */}
        <div className="h-20"></div>

        {/* Bottom Navigation - Conditional rendering based on user type */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-2">
          <div className="flex justify-around items-center max-w-sm mx-auto">
            <button 
              onClick={() => router.push(userType === 'student' ? '/dashboard/student' : userType === 'faculty' ? '/dashboard/faculty' : '/dashboard/institution')}
              className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-gray-500 hover:text-gray-700"
            >
              <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              <span className="text-xs font-medium">Home</span>
            </button>
            
            {userType === 'student' ? (
              <>
                <button 
                  onClick={() => router.push('/dashboard/certificates')}
                  className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <span className="text-xs font-medium">My Certificates</span>
                </button>
                <button 
                  onClick={() => router.push('/profile')}
                  className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-primary bg-primary/10"
                >
                  <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  <span className="text-xs font-medium">Profile</span>
                </button>
              </>
            ) : userType === 'faculty' ? (
              <>
                <button 
                  onClick={() => router.push('/dashboard/faculty/reviews')}
                  className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-gray-500 hover:text-gray-700"
                >
                  <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <span className="text-xs font-medium">My Reviews</span>
                </button>
                <button 
                  onClick={() => router.push('/profile')}
                  className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-primary bg-primary/10"
                >
                  <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  <span className="text-xs font-medium">Profile</span>
                </button>
              </>
            ) : (
              <>
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
                  onClick={() => router.push('/profile')}
                  className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-primary bg-primary/10"
                >
                  <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  <span className="text-xs font-medium">Profile</span>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}