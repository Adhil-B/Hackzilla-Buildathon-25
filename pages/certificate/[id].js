import Head from 'next/head';
import { useRouter } from 'next/router';
import CertificateVerifier from '../../components/CertificateVerifier';

export default function CertificateDetail() {
  const router = useRouter();
  const { id } = router.query;
  
  // Mock certificates data
  const certificates = [
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
      department: "Computer Science",
      issuer: "SIMATS University",
      verificationUrl: "https://simats.edu/verify/STU-2024-5949/web-dev-2024"
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
      department: "Computer Science",
      issuer: "SIMATS University",
      verificationUrl: "https://simats.edu/verify/STU-2024-5949/hackathon-2024"
    },
    {
      id: 3,
      title: "Leadership Training",
      studentId: "STU-2024-5949",
      studentName: "Adhil Bijukumar",
      type: "leadership",
      date: "Nov 7, 2024",
      description: "Completed comprehensive leadership program",
      credits: 10,
      status: "verified",
      department: "Computer Science",
      issuer: "SIMATS University",
      verificationUrl: "https://simats.edu/verify/STU-2024-5949/leadership-2024"
    },
    {
      id: 4,
      title: "Research Publication",
      studentId: "STU-2024-5949",
      studentName: "Adhil Bijukumar",
      type: "research",
      date: "Oct 28, 2024",
      description: "Published research paper on AI applications",
      credits: 20,
      status: "verified",
      department: "Computer Science",
      issuer: "SIMATS University",
      verificationUrl: "https://simats.edu/verify/STU-2024-5949/research-2024"
    },
    {
      id: 5,
      title: "Community Service",
      studentId: "STU-2024-5949",
      studentName: "Adhil Bijukumar",
      type: "volunteer",
      date: "Oct 15, 2024",
      description: "100 hours of community service completed",
      credits: 5,
      status: "verified",
      department: "Computer Science",
      issuer: "SIMATS University",
      verificationUrl: "https://simats.edu/verify/STU-2024-5949/community-2024"
    },
    {
      id: 6,
      title: "Online Course - Data Science",
      studentId: "STU-2024-5949",
      studentName: "Adhil Bijukumar",
      type: "course",
      date: "Pending",
      description: "Advanced Data Science certification in progress",
      credits: 0,
      status: "pending",
      department: "Computer Science",
      issuer: "SIMATS University",
      verificationUrl: "https://simats.edu/verify/STU-2024-5949/datascience-2024"
    }
  ];
  
  // Find the certificate by ID
  const certificate = certificates.find(cert => cert.id == id) || certificates[0];

  return (
    <>
      <Head>
        <title>Certificate Detail - Credify</title>
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
            <h1 className="text-lg font-semibold text-gray-900">Certificate Detail</h1>
            <div></div> {/* Empty div for spacing */}
          </div>

          {/* Certificate Info Card */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 mb-6">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center">
                <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <div>
                <h2 className="font-semibold text-gray-900">{certificate.title}</h2>
                <p className="text-sm text-gray-500 capitalize">{certificate.type}</p>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-gray-500">Student</span>
                <span className="font-medium text-gray-900">{certificate.studentName}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-500">Date Issued</span>
                <span className="font-medium text-gray-900">{certificate.date}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-500">Department</span>
                <span className="font-medium text-gray-900">{certificate.department}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-500">Issuer</span>
                <span className="font-medium text-gray-900">{certificate.issuer}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-500">Credits</span>
                <span className="font-medium text-green-600">+{certificate.credits}</span>
              </div>
              
              <div className="flex justify-between">
                <span className="text-gray-500">Status</span>
                <span className="font-medium text-green-600 capitalize">{certificate.status}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Certificate Description */}
        <div className="px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-900 mb-3">Description</h2>
          <p className="text-gray-600 bg-white p-4 rounded-xl shadow-sm border border-gray-100">
            {certificate.description}
          </p>
        </div>

        {/* AI Verification Component */}
        <div className="px-6 py-4">
          <CertificateVerifier certificate={certificate} />
        </div>

        {/* Verification Link */}
        <div className="px-6 py-4">
          <div className="bg-blue-50 rounded-xl p-4 border border-blue-100">
            <h3 className="font-medium text-blue-800 mb-2">Official Verification</h3>
            <p className="text-blue-600 text-sm mb-3">
              Verify this certificate on the official institution website:
            </p>
            <a 
              href={certificate.verificationUrl} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary text-sm font-medium flex items-center"
            >
              {certificate.verificationUrl}
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}