import Head from 'next/head';
import { useRouter } from 'next/router';

export default function PublicProfile() {
  const router = useRouter();
  const { id } = router.query;
  
  // Mock data for the student
  const studentData = {
    name: "Adhil Bijukumar",
    id: "STU-2024-5949",
    institution: "SIMATS University",
    grade: "A+",
    creditsEarned: 73,
    certificates: 12,
    achievements: 5
  };
  
  const certificates = [
    {
      id: 1,
      title: "Web Development Workshop",
      type: "workshop",
      date: "Nov 9, 2024",
      description: "Excellent participation and practical skills demonstrated",
      credits: 15,
      status: "verified"
    },
    {
      id: 2,
      title: "Hackathon 2024",
      type: "competition",
      date: "Nov 8, 2024",
      description: "Outstanding innovation in AI project",
      credits: 25,
      status: "verified"
    },
    {
      id: 3,
      title: "Leadership Training",
      type: "leadership",
      date: "Nov 7, 2024",
      description: "Completed leadership development program",
      credits: 10,
      status: "verified"
    }
  ];

  return (
    <>
      <Head>
        <title>{studentData.name}'s Profile - Credify</title>
        <meta name="description" content={`View ${studentData.name}'s verified academic credentials on Credify`} />
        <meta name="theme-color" content="#7B61FF" />
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
            <div className="flex items-center">
              <svg className="w-5 h-5 text-primary mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"></path>
              </svg>
              <span className="text-lg font-semibold text-gray-900">Credify</span>
            </div>
            <div></div> {/* Empty div for spacing */}
          </div>

          {/* Profile Info */}
          <div className="flex flex-col items-center mb-6">
            <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center mb-4">
              <span className="text-xl font-semibold text-gray-600">
                {studentData.name.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            <h2 className="text-xl font-semibold text-gray-900">{studentData.name}</h2>
            <p className="text-gray-500 text-sm">{studentData.institution}</p>
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

          {/* Stats Summary */}
          <div className="grid grid-cols-3 gap-3 mb-6">
            {/* Credits Earned */}
            <div className="bg-green-50 rounded-xl p-3 text-center">
              <p className="text-lg font-bold text-green-700">{studentData.creditsEarned}</p>
              <p className="text-xs text-green-600">Credits</p>
            </div>

            {/* Certificates */}
            <div className="bg-blue-50 rounded-xl p-3 text-center">
              <p className="text-lg font-bold text-blue-700">{studentData.certificates}</p>
              <p className="text-xs text-blue-600">Certificates</p>
            </div>

            {/* Achievements */}
            <div className="bg-purple-50 rounded-xl p-3 text-center">
              <p className="text-lg font-bold text-purple-700">{studentData.achievements}</p>
              <p className="text-xs text-purple-600">Achievements</p>
            </div>
          </div>
        </div>

        {/* Certificates Section */}
        <div className="px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">Verified Certificates</h2>
          
          <div className="space-y-3">
            {certificates.map((cert) => (
              <div key={cert.id} className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3 flex-1 min-w-0">
                    <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                      </svg>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="font-semibold text-gray-900 text-sm truncate max-w-[180px]">{cert.title}</h3>
                        <svg className="w-4 h-4 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                        </svg>
                      </div>
                      <div className="flex items-center space-x-2 text-xs text-gray-500 mb-1">
                        <span className="capitalize">{cert.type}</span>
                        <span>•</span>
                        <span>{cert.date}</span>
                      </div>
                      <p className="text-xs text-gray-400 truncate max-w-[200px]">{cert.description}</p>
                    </div>
                  </div>
                  <div className="text-right ml-3 flex-shrink-0">
                    <div className="font-semibold text-sm text-green-600">+{cert.credits}</div>
                    <div className="text-xs text-gray-500 capitalize">{cert.status}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Verification Notice */}
        <div className="px-6 py-4">
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
            <div className="flex items-start">
              <svg className="w-5 h-5 text-blue-500 mt-0.5 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
              </svg>
              <div>
                <h3 className="font-medium text-blue-800 text-sm">Verified by Institution</h3>
                <p className="text-blue-600 text-xs mt-1">
                  All certificates displayed here have been verified by {studentData.institution} and are authentic.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}