import Head from 'next/head';
import { useRouter } from 'next/router';

export default function FacultyDashboard() {
  const router = useRouter();
  
  // Mock data for the faculty
  const facultyData = {
    name: "Dr. Sarah Johnson",
    department: "Computer Science",
    institution: "SIMATS University",
    certificatesAssigned: 12,
    pendingReviews: 5
  };
  
  const certificates = [
    {
      id: 1,
      title: "Web Development Workshop",
      student: "Adhil Bijukumar",
      type: "workshop",
      date: "Nov 9",
      description: "Excellent participation and practical skills demonstrated",
      status: "pending"
    },
    {
      id: 2,
      title: "Hackathon 2024",
      student: "Priya Sharma",
      type: "competition",
      date: "Nov 8",
      description: "Outstanding innovation in AI project",
      status: "pending"
    },
    {
      id: 3,
      title: "Leadership Training",
      student: "Rahul Kumar",
      type: "leadership",
      date: "Nov 7",
      description: "",
      status: "pending"
    }
  ];

  return (
    <>
      <Head>
        <title>Faculty Dashboard - Credify</title>
        <meta name="theme-color" content="#7B61FF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white px-6 pt-12 pb-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
                <span className="text-sm font-semibold text-gray-600">
                  {facultyData.name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <div>
                <p className="text-sm text-gray-500">Hi, {facultyData.name.split(' ')[0]}</p>
                <p className="text-xs text-gray-400">{facultyData.department}</p>
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

          {/* Faculty Info Card */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="font-semibold text-gray-900">{facultyData.name}</h2>
                <p className="text-sm text-gray-500">{facultyData.department}</p>
                <p className="text-xs text-gray-400">{facultyData.institution}</p>
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

          {/* Stats Summary */}
          <div className="flex space-x-3">
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
              <p className="text-lg font-bold text-blue-700">{facultyData.certificatesAssigned}</p>
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
              <p className="text-lg font-bold text-yellow-700">{facultyData.pendingReviews}</p>
            </div>
          </div>
        </div>

        {/* Certificates to Review Section */}
        <div className="px-6 py-4">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">Certificates to Review</h2>
          </div>

          {/* Certificates List */}
          <div className="space-y-3">
            {certificates.map((cert) => (
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
                      <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-900 text-sm truncate max-w-[180px]">{cert.title}</h3>
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
                    </div>
                  </div>
                  <div className="text-right ml-3 flex-shrink-0">
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        router.push(`/dashboard/faculty/review/certificate?id=${cert.id}`);
                      }}
                      className="text-xs bg-primary text-white px-3 py-1 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      Review
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom padding for navigation */}
        <div className="h-20"></div>

        {/* Bottom Navigation */}
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-6 py-2">
          <div className="flex justify-around items-center max-w-sm mx-auto">
            <button 
              onClick={() => router.push('/dashboard/faculty')}
              className="flex flex-col items-center py-2 px-3 rounded-lg transition-colors text-primary bg-primary/10"
            >
              <svg className="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
              </svg>
              <span className="text-xs font-medium">Home</span>
            </button>
            
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
    </>
  );
}