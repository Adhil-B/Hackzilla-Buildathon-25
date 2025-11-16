import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';

export default function FacultyReviews() {
  const router = useRouter();
  
  // Mock data for the faculty
  const facultyData = {
    name: "Dr. Sarah Johnson",
    department: "Computer Science",
    institution: "SIMATS University",
    certificatesAssigned: 12,
    pendingReviews: 5
  };
  
  // Mock certificates data
  const certificates = [
    {
      id: 1,
      title: "Web Development Workshop",
      student: "Vanjinathan S",
      type: "workshop",
      date: "Sep 2, 2025",
      description: "Excellent participation and practical skills demonstrated",
      status: "pending",
      credits: 15
    },
    {
      id: 2,
      title: "Hackathon 2024",
      student: "Priya Sharma",
      type: "competition",
      date: "Nov 8, 2025",
      description: "Outstanding innovation in AI project",
      status: "pending",
      credits: 25
    },
    {
      id: 3,
      title: "Leadership Training",
      student: "Rahul Kumar",
      type: "leadership",
      date: "Nov 7, 2025",
      description: "Completed comprehensive leadership program",
      status: "pending",
      credits: 10
    },
    {
      id: 4,
      title: "Research Publication",
      student: "Anjali Patel",
      type: "research",
      date: "Oct 28, 2025",
      description: "Published research paper on AI applications",
      status: "verified",
      credits: 20,
      reviewDate: "Oct 30, 2024",
      reviewer: "Dr. Sarah Johnson"
    },
    {
      id: 5,
      title: "Community Service",
      student: "Vikram Singh",
      type: "volunteer",
      date: "Oct 15, 2025",
      description: "100 hours of community service completed",
      status: "verified",
      credits: 5,
      reviewDate: "Oct 18, 2024",
      reviewer: "Dr. Sarah Johnson"
    },
    {
      id: 6,
      title: "Online Course - Data Science",
      student: "Neha Gupta",
      type: "course",
      date: "Oct 5, 2025",
      description: "Advanced Data Science certification completed",
      status: "verified",
      credits: 15,
      reviewDate: "Oct 8, 2025",
      reviewer: "Dr. Sarah Johnson"
    }
  ];

  const [activeTab, setActiveTab] = useState('pending');

  // Filter certificates by status
  const filteredCertificates = activeTab === 'all' 
    ? certificates 
    : certificates.filter(cert => cert.status === activeTab);

  const pendingCertificates = certificates.filter(cert => cert.status === 'pending');
  const verifiedCertificates = certificates.filter(cert => cert.status === 'verified');

  // Navigation items for sidebar
  const navItems = [
    { name: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', href: '/dashboard/faculty', active: false },
    { name: 'My Reviews', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', href: '/dashboard/faculty/reviews', active: true },
    { name: 'Profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', href: '/profile?userType=faculty', active: false }
  ];

  return (
    <>
      <Head>
        <title>My Reviews - Credify</title>
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
          <div className="bg-white px-6 pt-12 pb-4">
            <div className="flex items-center justify-between mb-6">
              <button 
                onClick={() => router.back()}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <h1 className="text-lg font-semibold text-gray-900">My Reviews</h1>
              <div className="w-10"></div> {/* Spacer for alignment */}
            </div>
          </div>

          {/* Stats Summary */}
          <div className="px-6 py-4">
            <div className="grid grid-cols-3 gap-3 mb-4">
              {/* Assigned Certificates */}
              <div className="bg-blue-50 rounded-xl p-3 text-center border border-blue-200">
                <p className="text-lg font-bold text-blue-700">{certificates.length}</p>
                <p className="text-xs text-blue-600">Total</p>
              </div>

              {/* Pending Reviews */}
              <div className="bg-yellow-50 rounded-xl p-3 text-center border border-yellow-200">
                <p className="text-lg font-bold text-yellow-700">{pendingCertificates.length}</p>
                <p className="text-xs text-yellow-600">Pending</p>
              </div>

              {/* Verified */}
              <div className="bg-green-50 rounded-xl p-3 text-center border border-green-200">
                <p className="text-lg font-bold text-green-700">{verifiedCertificates.length}</p>
                <p className="text-xs text-green-600">Reviewed</p>
              </div>
            </div>
          </div>

          {/* Reviews Tabs */}
          <div className="px-6 pt-4">
            <div className="flex space-x-4 mb-4 border-b border-gray-200">
              <button 
                onClick={() => setActiveTab('pending')}
                className={`pb-2 ${activeTab === 'pending' ? 'border-b-2 border-primary text-primary font-medium' : 'text-gray-500 font-medium'}`}
              >
                Pending
              </button>
              <button 
                onClick={() => setActiveTab('verified')}
                className={`pb-2 ${activeTab === 'verified' ? 'border-b-2 border-primary text-primary font-medium' : 'text-gray-500 font-medium'}`}
              >
                Reviewed
              </button>
              <button 
                onClick={() => setActiveTab('all')}
                className={`pb-2 ${activeTab === 'all' ? 'border-b-2 border-primary text-primary font-medium' : 'text-gray-500 font-medium'}`}
              >
                All Reviews
              </button>
            </div>
          </div>

          {/* Certificates List */}
          <div className="px-6 py-2">
            <div className="space-y-3">
              {filteredCertificates.length > 0 ? (
                filteredCertificates.map((cert) => (
                  <div 
                    key={cert.id} 
                    className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer"
                    onClick={() => router.push(`/dashboard/faculty/review/certificate?id=${cert.id}`)}
                  >
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
                          <p className="text-xs text-gray-500">Student: {cert.student}</p>
                          {cert.description && (
                            <p className="text-xs text-gray-400 truncate max-w-[200px] mt-1">{cert.description}</p>
                          )}
                          {cert.status === 'verified' && (
                            <p className="text-xs text-gray-500 mt-1">Reviewed on {cert.reviewDate} by {cert.reviewer}</p>
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
                          <button 
                            onClick={(e) => {
                              e.stopPropagation();
                              router.push(`/dashboard/faculty/review/certificate?id=${cert.id}`);
                            }}
                            className="text-xs bg-primary text-white px-3 py-1 rounded-lg hover:bg-primary/90 transition-colors"
                          >
                            Review
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="text-center py-12">
                  <svg className="w-16 h-16 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                  <h3 className="mt-4 text-lg font-medium text-gray-900">No certificates found</h3>
                  <p className="mt-1 text-gray-500">There are no certificates in this category.</p>
                </div>
              )}
            </div>
          </div>

          {/* Bottom padding for navigation */}
          <div className="h-20"></div>

          {/* Bottom Navigation - Mobile Only */}
          <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-2">
            <div className="flex justify-around items-center max-w-sm mx-auto">
              <button 
                onClick={() => router.push('/dashboard/faculty')}
                className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-gray-500 hover:text-gray-700"
              >
                <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
                </svg>
                <span className="text-xs font-medium">Home</span>
              </button>
              
              <button className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-primary bg-primary/10">
                <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                </svg>
                <span className="text-xs font-medium">My Reviews</span>
              </button>
              
              <button 
                onClick={() => router.push('/profile?userType=faculty')}
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