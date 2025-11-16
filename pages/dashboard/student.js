import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useState } from 'react';

export default function StudentDashboard() {
  const router = useRouter();
  const [showAddCertificate, setShowAddCertificate] = useState(false);
  const [certificateData, setCertificateData] = useState({
    title: '',
    type: 'workshop',
    description: '',
    institution: 'SIMATS University',
    department: '',
    file: null
  });
  
  // Mock data for the student
  const studentData = {
    name: "Adhil Bijukumar",
    id: "STU-2024-5949",
    institution: "SIMATS University",
    grade: "A+",
    creditsEarned: 73,
    pendingCredits: 10
  };
  
  // Mock departments data (from institution data)
  const departments = [
    { id: 1, name: "Computer Science" },
    { id: 2, name: "Mechanical Engineering" },
    { id: 3, name: "Business Administration" },
    { id: 4, name: "Electrical Engineering" },
    { id: 5, name: "Mathematics" },
    { id: 6, name: "Physics" }
  ];
  
  const certificates = [
    {
      id: 1,
      title: "Web Development Workshop",
      type: "workshop",
      date: "Nov 9",
      description: "Excellent participation and practical skills demonstrated",
      credits: 15,
      status: "verified"
    },
    {
      id: 2,
      title: "Hackathon 2024",
      type: "competition",
      date: "Nov 8",
      description: "Outstanding innovation in AI project",
      credits: 25,
      status: "verified"
    },
    {
      id: 3,
      title: "Leadership Training",
      type: "leadership",
      date: "Nov 7",
      description: "",
      credits: 0,
      status: "pending"
    }
  ];

  const handleCertificateChange = (e) => {
    const { name, value } = e.target;
    setCertificateData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e) => {
    setCertificateData(prev => ({
      ...prev,
      file: e.target.files[0]
    }));
  };

  const handleAddCertificate = () => {
    // In a real app, this would submit the form data
    console.log('Certificate data:', certificateData);
    // Close the popup
    setShowAddCertificate(false);
    // Reset form
    setCertificateData({
      title: '',
      type: 'workshop',
      description: '',
      institution: 'SIMATS University',
      department: '',
      file: null
    });
  };

  // Navigation items for sidebar
  const navItems = [
    { name: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', href: '/dashboard/student', active: true },
    { name: 'My Certificates', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', href: '/dashboard/certificates', active: false },
    { name: 'Profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', href: '/profile?userType=student', active: false }
  ];

  return (
    <>
      <Head>
        <title>Student Dashboard - Credify</title>
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
                    <div className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
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
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                  <span className="text-sm font-semibold text-gray-600">
                    {studentData.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Hi, {studentData.name.split(' ')[0]}</p>
                  <p className="text-xs text-gray-400">Hope you're good today</p>
                </div>
              </div>
              <button 
                onClick={() => router.push('/login')}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                </svg>
              </button>
            </div>

            {/* Student Card */}
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
                    <p className="text-lg font-bold text-yellow-300 drop-shadow-lg">{studentData.grade}</p>
                  </div>
                </div>

                {/* Card Number */}
                <div className="mb-6 relative z-10">
                  <div className="text-xl font-mono tracking-wider">
                    <span className="text-white font-semibold">{studentData.id}</span>
                  </div>
                </div>

                {/* Bottom Info Section */}
                <div className="flex justify-between items-end relative z-10">
                  <div>
                    <p className="text-xs opacity-75 mb-1">STUDENT NAME</p>
                    <p className="font-semibold text-sm">{studentData.name}</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs opacity-75 mb-1">INSTITUTION</p>
                    <p className="font-medium text-xs">{studentData.institution}</p>
                  </div>
                </div>

                {/* Original Card Design Elements */}
                <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-white/5 to-transparent rounded-full translate-y-8 -translate-x-8"></div>
              </div>

              {/* Card Shadow/Reflection */}
              <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl transform translate-y-1 translate-x-1 -z-10 opacity-30"></div>
            </div>

            {/* Points Summary */}
            <div className="flex space-x-3">
              {/* Earned Points */}
              <div className="flex-1 bg-green-50 rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                    </svg>
                  </div>
                  <span className="text-sm text-green-600 font-medium">Credits</span>
                </div>
                <p className="text-lg font-bold text-green-700">{studentData.creditsEarned}</p>
              </div>

              {/* Pending Points */}
              <div className="flex-1 bg-yellow-50 rounded-xl p-4">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-8 h-8 bg-yellow-100 rounded-lg flex items-center justify-center">
                    <svg className="w-4 h-4 text-yellow-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 10l7-7m0 0l7 7m-7-7v18"></path>
                    </svg>
                  </div>
                  <span className="text-sm text-yellow-600 font-medium">Pending</span>
                </div>
                <p className="text-lg font-bold text-yellow-700">{studentData.pendingCredits}</p>
              </div>
            </div>

            {/* View Portfolio Button */}
            <div className="mt-4">
              <button
                onClick={() => router.push(`/portfolio/${studentData.id}`)}
                className="w-full bg-primary text-white font-medium py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
              >
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                </svg>
                View My Public Resume
              </button>
            </div>
          </div>

          {/* Certificates Section */}
          <div className="px-6 py-4">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-900">My Certificates</h2>
              <button 
                className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center hover:bg-primary/90 transition-colors"
                onClick={() => setShowAddCertificate(true)}
              >
                <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4"></path>
                </svg>
              </button>
            </div>

            {/* Certificates List */}
            <div className="space-y-3">
              {certificates.map((cert) => (
                <div key={cert.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 flex-1 min-w-0">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        cert.status === 'verified' ? 'bg-green-50' : 'bg-yellow-50'
                      }`}>
                        {cert.status === 'verified' ? (
                          <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                          </svg>
                        ) : (
                          <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                          </svg>
                        )}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center space-x-2 mb-1">
                          <h3 className="font-semibold text-gray-900 text-sm truncate max-w-[180px]">{cert.title}</h3>
                          {cert.status === 'verified' && (
                            <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                          )}
                        </div>
                        <div className="flex items-center space-x-2 text-xs text-gray-500 mb-1">
                          <span className="capitalize">{cert.type}</span>
                          <span>•</span>
                          <span>{cert.date}</span>
                        </div>
                        {cert.description && (
                          <p className="text-xs text-gray-400 truncate max-w-[200px]">{cert.description}</p>
                        )}
                      </div>
                    </div>
                    <div className="text-right ml-3 flex-shrink-0">
                      {cert.status === 'verified' ? (
                        <>
                          <div className="font-semibold text-sm text-green-600">+{cert.credits}</div>
                          <div className="text-xs text-gray-500 capitalize">{cert.status}</div>
                        </>
                      ) : (
                        <>
                          <div className="font-semibold text-sm text-gray-600">Pending</div>
                          <div className="text-xs text-gray-500 capitalize">{cert.status}</div>
                        </>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Add Certificate Popup */}
          {showAddCertificate && (
            <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
              <div className="bg-white rounded-xl w-full max-w-md max-h-[90vh] overflow-y-auto">
                <div className="p-6">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-lg font-semibold text-gray-900">Add New Certificate</h3>
                    <button 
                      onClick={() => setShowAddCertificate(false)}
                      className="text-gray-400 hover:text-gray-500"
                    >
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Certificate Title</label>
                      <input
                        type="text"
                        name="title"
                        value={certificateData.title}
                        onChange={handleCertificateChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                        placeholder="Enter certificate title"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                      <select
                        name="type"
                        value={certificateData.type}
                        onChange={handleCertificateChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                      >
                        <option value="workshop">Workshop</option>
                        <option value="competition">Competition</option>
                        <option value="course">Course</option>
                        <option value="internship">Internship</option>
                        <option value="leadership">Leadership</option>
                        <option value="research">Research</option>
                        <option value="publication">Publication</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                      <textarea
                        name="description"
                        value={certificateData.description}
                        onChange={handleCertificateChange}
                        rows="3"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                        placeholder="Enter certificate description"
                      ></textarea>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Institution</label>
                      <input
                        type="text"
                        name="institution"
                        value={certificateData.institution}
                        readOnly
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50 text-gray-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Department</label>
                      <select
                        name="department"
                        value={certificateData.department}
                        onChange={handleCertificateChange}
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                      >
                        <option value="">Select Department</option>
                        {departments.map((dept) => (
                          <option key={dept.id} value={dept.name}>{dept.name}</option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Upload Certificate</label>
                      <div className="flex items-center justify-center w-full">
                        <label className="flex flex-col items-center justify-center w-full h-32 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <svg className="w-8 h-8 mb-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"></path>
                            </svg>
                            <p className="mb-2 text-sm text-gray-500">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-gray-500">PDF, PNG, JPG (MAX. 10MB)</p>
                          </div>
                          <input 
                            type="file" 
                            className="hidden" 
                            onChange={handleFileChange}
                            accept=".pdf,.png,.jpg,.jpeg"
                          />
                        </label>
                      </div>
                      {certificateData.file && (
                        <p className="mt-2 text-sm text-gray-500">Selected: {certificateData.file.name}</p>
                      )}
                    </div>

                    <div className="flex space-x-3 pt-4">
                      <button
                        type="button"
                        onClick={() => setShowAddCertificate(false)}
                        className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        Cancel
                      </button>
                      <button
                        type="button"
                        onClick={handleAddCertificate}
                        className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                      >
                        Add Certificate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Bottom padding for navigation */}
          <div className="h-20"></div>

          {/* Bottom Navigation - Mobile Only */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-2">
            <div className="flex justify-around items-center max-w-sm mx-auto">
              <button className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-primary bg-primary/10">
                <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                <span className="text-xs font-medium">Home</span>
              </button>
              
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
                onClick={() => router.push('/profile?userType=student')}
                className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-gray-500 hover:text-gray-700"
              >
                <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                </svg>
                <span className="text-xs font-medium">Profile</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}