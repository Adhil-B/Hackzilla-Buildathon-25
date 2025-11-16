import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import { mockStudents, mockCertificates } from '../../utils/mockData';

export default function StudentResume() {
  const router = useRouter();
  const { studentId } = router.query;
  const [studentData, setStudentData] = useState(null);
  const [studentCertificates, setStudentCertificates] = useState([]);

  useEffect(() => {
    if (studentId) {
      // Find student by ID
      const student = mockStudents.find(s => s.id === studentId);
      if (student) {
        setStudentData(student);
        
        // Filter certificates for this student
        const certificates = mockCertificates.filter(cert => cert.studentId === studentId);
        setStudentCertificates(certificates);
      } else {
        // If student not found, redirect to home or show error
        router.push('/');
      }
    }
  }, [studentId, router]);

  if (!studentData) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading portfolio...</p>
        </div>
      </div>
    );
  }

  // AI-generated resume summary
  const generateResumeSummary = () => {
    const totalCredits = studentCertificates
      .filter(cert => cert.status === 'verified')
      .reduce((sum, cert) => sum + cert.credits, 0);
    
    const skills = [...new Set(studentCertificates
      .filter(cert => cert.status === 'verified')
      .map(cert => cert.type))];
    
    const achievements = studentCertificates
      .filter(cert => cert.status === 'verified' && cert.credits > 15)
      .map(cert => cert.title);
    
    // Calculate experience years based on certificates
    const experienceYears = Math.floor(studentCertificates.filter(c => c.status === 'verified').length / 3);
    
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
  const groupedCertificates = studentCertificates
    .filter(cert => cert.status === 'verified')
    .reduce((groups, cert) => {
      const group = groups[cert.type] || [];
      group.push(cert);
      groups[cert.type] = group;
      return groups;
    }, {});

  return (
    <>
      <Head>
        <title>{studentData.name}'s Resume - Credify</title>
        <meta name="description" content={`Resume of ${studentData.name} showcasing verified academic achievements and certificates`} />
        <meta name="theme-color" content="#7B61FF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Head>
      
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white shadow-sm">
          <div className="max-w-4xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <button 
                onClick={() => router.back()}
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
              >
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
              </button>
              <h1 className="text-lg font-semibold text-gray-900 flex items-center">
                Student Resume
                <span className="ml-2 bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded-full flex items-center">
                  <svg className="w-3 h-3 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"></path>
                  </svg>
                  AI Generated
                </span>
              </h1>
              <div></div> {/* Spacer for alignment */}
            </div>
          </div>
        </div>

        {/* Resume-style Layout */}
        <div className="max-w-4xl mx-auto px-6 py-8">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8">
              <div className="flex flex-col md:flex-row items-center">
                <div className="w-24 h-24 bg-white/10 rounded-full flex items-center justify-center mb-4 md:mb-0 md:mr-6">
                  <span className="text-2xl font-bold">
                    {studentData.name.split(' ').map(n => n[0]).join('')}
                  </span>
                </div>
                <div className="text-center md:text-left">
                  <h1 className="text-3xl font-bold mb-2">{studentData.name}</h1>
                  <p className="text-white/90 text-lg mb-1">{studentData.department}</p>
                  <p className="text-white/80 mb-3">{studentData.institution}</p>
                  <div className="flex flex-wrap justify-center md:justify-start gap-2">
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                      {resumeSummary.experienceLevel}
                    </span>
                    <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                      {resumeSummary.experienceYears}+ Years Experience
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
              {/* Left Column - Contact & Skills */}
              <div className="lg:col-span-1">
                {/* Contact Information */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Contact</h2>
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                      </svg>
                      <span className="text-gray-700">{studentData.email}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                      </svg>
                      <span className="text-gray-700">{studentData.institution}</span>
                    </div>
                    <div className="flex items-center">
                      <svg className="w-5 h-5 text-gray-500 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                      </svg>
                      <span className="text-gray-700">Chennai, India</span>
                    </div>
                  </div>
                </div>

                {/* Skills */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Skills</h2>
                  <div className="flex flex-wrap gap-2">
                    {resumeSummary.skills.map((skill, index) => (
                      <span key={index} className="bg-gray-100 px-3 py-1 rounded-full text-sm text-gray-700 capitalize">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Summary */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Summary</h2>
                  <p className="text-gray-700">
                    Dedicated student with {resumeSummary.experienceYears}+ years of experience in {studentData.department.toLowerCase()}. 
                    Proven track record of academic excellence with {resumeSummary.totalCredits} credits earned through verified certifications. 
                    Skilled in {resumeSummary.skills.join(', ').toLowerCase()} with a commitment to continuous learning and professional development.
                  </p>
                </div>
              </div>

              {/* Right Column - Experience & Certifications */}
              <div className="lg:col-span-2">
                {/* AI Portfolio Summary */}
                <div className="mb-8">
                  <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Resume Highlights</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="bg-green-50 rounded-xl p-4 border border-green-100">
                      <p className="text-2xl font-bold text-green-700">{resumeSummary.totalCredits}</p>
                      <p className="text-green-600 text-sm">Total Credits Earned</p>
                    </div>
                    <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
                      <p className="text-2xl font-bold text-blue-700">{studentCertificates.filter(c => c.status === 'verified').length}</p>
                      <p className="text-blue-600 text-sm">Verified Certificates</p>
                    </div>
                    <div className="bg-gray-50 rounded-xl p-4 border border-gray-200">
                      <p className="text-2xl font-bold text-gray-700">{resumeSummary.skills.length}</p>
                      <p className="text-gray-600 text-sm">Skill Areas</p>
                    </div>
                  </div>
                  
                  {resumeSummary.achievements.length > 0 && (
                    <div className="mt-4">
                      <h3 className="font-semibold text-gray-900 mb-2">Notable Achievements</h3>
                      <ul className="space-y-2">
                        {resumeSummary.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-start">
                            <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                            </svg>
                            <span className="text-gray-700">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>

                {/* Certifications by Category */}
                <div>
                  <h2 className="text-xl font-bold text-gray-900 mb-4 pb-2 border-b border-gray-200">Certifications</h2>
                  
                  {Object.keys(groupedCertificates).length > 0 ? (
                    Object.entries(groupedCertificates).map(([type, certificates]) => (
                      <div key={type} className="mb-6">
                        <h3 className="font-semibold text-gray-900 mb-3 capitalize">{type} Certifications</h3>
                        <div className="space-y-4">
                          {certificates.map((cert) => (
                            <div key={cert.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                              <div className="flex items-start">
                                <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 mr-4 ${
                                  cert.type === 'workshop' ? 'bg-blue-50' : 
                                  cert.type === 'competition' ? 'bg-green-50' : 
                                  cert.type === 'course' ? 'bg-indigo-50' : 
                                  cert.type === 'leadership' ? 'bg-yellow-50' : 'bg-gray-50'
                                }`}>
                                  {cert.type === 'workshop' && (
                                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                    </svg>
                                  )}
                                  {cert.type === 'competition' && (
                                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                    </svg>
                                  )}
                                  {cert.type === 'course' && (
                                    <svg className="w-5 h-5 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                                    </svg>
                                  )}
                                  {cert.type === 'leadership' && (
                                    <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
                                    </svg>
                                  )}
                                </div>
                                <div className="flex-1">
                                  <div className="flex flex-wrap items-center justify-between">
                                    <h3 className="font-semibold text-gray-900 max-w-[80%]">{cert.title}</h3>
                                    <span className="font-bold text-green-600">+{cert.credits}</span>
                                  </div>
                                  <div className="flex flex-wrap items-center text-sm text-gray-500 mt-1">
                                    <span>{cert.date}</span>
                                    <span className="mx-2">•</span>
                                    <span>{cert.department}</span>
                                  </div>
                                  <p className="text-gray-600 text-sm mt-2">{cert.description}</p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))
                  ) : (
                    <div className="text-center py-8">
                      <svg className="w-16 h-16 mx-auto text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
                      </svg>
                      <h3 className="mt-4 text-lg font-medium text-gray-900">No verified certificates</h3>
                      <p className="mt-1 text-gray-500">This student doesn't have any verified certificates yet.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="bg-gray-50 px-8 py-6 border-t border-gray-200">
              <div className="text-center text-gray-500 text-sm">
                <p>Resume automatically generated by Credify AI • Verified and secure academic credentials platform</p>
                <p className="mt-1">Student ID: {studentData.id}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}