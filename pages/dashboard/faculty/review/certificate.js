import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import Link from 'next/link';

export default function FacultyCertificateReview() {
  const router = useRouter();
  const { id } = router.query;
  
  // Mock certificate data for review
  const certificateData = {
    id: id || 1,
    title: "Web Development Workshop",
    studentId: "STU-2024-5949",
    studentName: "Vanjinathan S",
    type: "workshop",
    date: "Sep 2, 2025",
    description: "Excellent participation and practical skills demonstrated in a comprehensive web development workshop covering HTML, CSS, JavaScript, and React fundamentals.",
    credits: 15,
    status: "pending",
    department: "Computer Science",
    issuer: "Smarted Inovation",
    verificationUrl: "https://simats.edu/verify/STU-2024-5949/web-dev-2024",
    fileName: "web-dev-certificate.pdf",
    fileSize: "2.4 MB",
    uploadDate: "Nov 10, 2024"
  };

  // Mock AI verification data
  const aiVerificationData = {
    authenticity: "verified",
    confidence: 92,
    suggestedResources: [
      {
        name: "Smarted Inovation Official Certificate Database",
        url: "https://elearn.smarted.pro/verify-certificate"
      },
      {
        name: "Issuer's Official Website",
        url: "https://smartedinnovations.edmingle.com/"
      }
    ],
    issues: [
      "Minor formatting inconsistency with official templates",
      "Signature verification pending manual review"
    ],
    // AI Credit Score Suggestion
    creditSuggestion: {
      score: 15,
      justification: "Based on workshop duration (40 hours), complexity of topics covered (HTML, CSS, JavaScript, React), and industry standard benchmarks for similar certifications.",
      confidence: 87
    }
  };

  const [reviewData, setReviewData] = useState({
    credits: aiVerificationData.creditSuggestion.score, // Default to AI suggestion
    comments: '',
    approve: true
  });

  const handleReviewChange = (e) => {
    const { name, value, type, checked } = e.target;
    setReviewData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmitReview = () => {
    // In a real app, this would submit the review data
    console.log('Review submitted:', { certificateData, reviewData });
    // Redirect back to faculty dashboard or reviews page
    router.push('/dashboard/faculty');
  };

  // Navigation items for sidebar
  const navItems = [
    { name: 'Home', icon: 'M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6', href: '/dashboard/faculty', active: false },
    { name: 'My Reviews', icon: 'M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z', href: '/dashboard/faculty/reviews', active: true },
    { name: 'Profile', icon: 'M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z', href: '/profile?userType=faculty', active: false }
  ];

  return (
    <>
      <Head>
        <title>Review Certificate - Credify</title>
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
              <h1 className="text-lg font-semibold text-gray-900">Review Certificate</h1>
              <div></div> {/* Empty div for spacing */}
            </div>

            {/* Certificate Info Card */}
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-yellow-50 flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                  </svg>
                </div>
                <div>
                  <h2 className="font-semibold text-gray-900">{certificateData.title}</h2>
                  <p className="text-sm text-gray-500 capitalize">{certificateData.type}</p>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-500">Student</span>
                  <span className="font-medium text-gray-900">{certificateData.studentName}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-500">Student ID</span>
                  <span className="font-medium text-gray-900">{certificateData.studentId}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-500">Date Issued</span>
                  <span className="font-medium text-gray-900">{certificateData.date}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-500">Department</span>
                  <span className="font-medium text-gray-900">{certificateData.department}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-500">Issuer</span>
                  <span className="font-medium text-gray-900">{certificateData.issuer}</span>
                </div>
                
                <div className="flex justify-between">
                  <span className="text-gray-500">Status</span>
                  <span className="font-medium text-yellow-600 capitalize">{certificateData.status}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Certificate Description */}
          <div className="px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Description</h2>
            <p className="text-gray-600 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
              {certificateData.description}
            </p>
          </div>

          {/* Certificate File */}
          <div className="px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Certificate File</h2>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 rounded-lg bg-red-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                    </svg>
                  </div>
                  <div>
                    <p className="font-medium text-gray-900">{certificateData.fileName}</p>
                    <p className="text-sm text-gray-500">{certificateData.fileSize} • Uploaded {certificateData.uploadDate}</p>
                  </div>
                </div>
                <button className="text-primary font-medium text-sm hover:text-primary/80">
                  View
                </button>
              </div>
            </div>
          </div>

          {/* AI Credit Score Suggestion */}
          <div className="px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">AI Credit Score Suggestion</h2>
            <div className="bg-purple-50 rounded-xl p-4 border border-purple-100">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-3">
                  <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
                    </svg>
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <h3 className="font-semibold text-purple-800">Suggested Credit Score: {aiVerificationData.creditSuggestion.score}</h3>
                    <span 
                      className="ml-2 text-xs bg-purple-200 text-purple-800 px-2 py-1 rounded-full"
                      style={{
                        width: '10rem',
                        fontWeight: 700
                      }}
                    >
                      {aiVerificationData.creditSuggestion.confidence}% Confidence
                    </span>
                  </div>
                  <p className="text-purple-700 text-sm mt-2">
                    {aiVerificationData.creditSuggestion.justification}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* AI Verification Details */}
          <div className="px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">AI Authenticity Verification</h2>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className={`p-3 rounded-lg ${
                aiVerificationData.authenticity === 'verified' 
                  ? 'bg-green-50 border border-green-100' 
                  : 'bg-yellow-50 border border-yellow-100'
              }`}>
                <div className="flex items-center">
                  {aiVerificationData.authenticity === 'verified' ? (
                    <>
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                      <span className="font-medium text-green-700">Certificate Verified</span>
                    </>
                  ) : (
                    <>
                      <svg className="w-5 h-5 text-yellow-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                      </svg>
                      <span className="font-medium text-yellow-700">Suspicious Certificate</span>
                    </>
                  )}
                </div>
                <p className="text-sm text-gray-600 mt-2">
                  AI Confidence: {aiVerificationData.confidence}%
                </p>
              </div>

              {aiVerificationData.issues.length > 0 && (
                <div className="mt-3 p-3 bg-yellow-50 rounded-lg border border-yellow-100">
                  <h4 className="font-medium text-yellow-800 text-sm">Potential Issues:</h4>
                  <ul className="mt-1 space-y-1">
                    {aiVerificationData.issues.map((issue, index) => (
                      <li key={index} className="text-yellow-700 text-xs flex items-start">
                        <svg className="w-4 h-4 mr-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
                        </svg>
                        {issue}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* AI Suggestions for Manual Verification */}
          <div className="px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">AI Suggestions for Manual Verification</h2>
            <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
              <h3 className="font-medium text-blue-800 mb-2">Recommended Resources:</h3>
              <p className="text-blue-600 text-sm mb-3">
                For manual verification, please check these official resources:
              </p>
              <div className="space-y-2">
                {aiVerificationData.suggestedResources.map((resource, index) => (
                  <a 
                    key={index}
                    href={resource.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block p-3 bg-white rounded-lg hover:bg-gray-50 transition-colors border border-gray-200"
                  >
                    <div className="flex items-center">
                      <svg className="w-4 h-4 text-primary mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                      </svg>
                      <span className="text-sm text-gray-700">{resource.name}</span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Review Form */}
          <div className="px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Review Certificate</h2>
            <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Credits</label>
                  <input
                    type="number"
                    name="credits"
                    value={reviewData.credits}
                    onChange={handleReviewChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                    placeholder="Enter credits"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Comments</label>
                  <textarea
                    name="comments"
                    value={reviewData.comments}
                    onChange={handleReviewChange}
                    rows="3"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-primary focus:border-primary"
                    placeholder="Add your review comments"
                  ></textarea>
                </div>

                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="approve"
                    checked={reviewData.approve}
                    onChange={handleReviewChange}
                    className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                  />
                  <label className="ml-2 block text-sm text-gray-700">
                    Approve this certificate
                  </label>
                </div>

                <div className="flex space-x-3 pt-2">
                  <button
                    type="button"
                    onClick={() => router.back()}
                    className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="button"
                    onClick={handleSubmitReview}
                    className="flex-1 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    Submit Review
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom padding for navigation */}
          <div className="h-20"></div>
        </div>
      </div>
    </>
  );
}