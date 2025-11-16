import { useState } from 'react';

export default function CertificateVerifier({ certificate }) {
  const [verificationResult, setVerificationResult] = useState(null);
  const [isVerifying, setIsVerifying] = useState(false);

  // Mock AI verification function
  const verifyCertificate = async () => {
    setIsVerifying(true);
    
    // Simulate AI verification process
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock verification result
    const result = {
      authenticity: Math.random() > 0.2 ? 'verified' : 'suspicious',
      confidence: Math.floor(Math.random() * 40) + 60, // 60-99%
      suggestedResources: [
        {
          name: "Official University Website",
          url: "https://simats.edu/verify-certificate"
        },
        {
          name: "National Accreditation Board",
          url: "https://nab.gov/cert-verification"
        }
      ],
      issues: Math.random() > 0.7 ? [
        "Minor formatting inconsistency with official templates",
        "Signature verification pending manual review"
      ] : []
    };
    
    setVerificationResult(result);
    setIsVerifying(false);
  };

  return (
    <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-900">Certificate Verification</h3>
        <button 
          onClick={verifyCertificate}
          disabled={isVerifying}
          className={`px-3 py-1 rounded-lg text-sm font-medium ${
            isVerifying 
              ? 'bg-gray-200 text-gray-500' 
              : 'bg-primary text-white hover:bg-primary/90'
          }`}
        >
          {isVerifying ? 'Verifying...' : 'Verify'}
        </button>
      </div>

      {verificationResult && (
        <div className="mt-4">
          <div className={`p-3 rounded-lg ${
            verificationResult.authenticity === 'verified' 
              ? 'bg-green-50 border border-green-100' 
              : 'bg-yellow-50 border border-yellow-100'
          }`}>
            <div className="flex items-center">
              {verificationResult.authenticity === 'verified' ? (
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
              AI Confidence: {verificationResult.confidence}%
            </p>
          </div>

          {verificationResult.issues.length > 0 && (
            <div className="mt-3 p-3 bg-yellow-50 rounded-lg border border-yellow-100">
              <h4 className="font-medium text-yellow-800 text-sm">Potential Issues:</h4>
              <ul className="mt-1 space-y-1">
                {verificationResult.issues.map((issue, index) => (
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

          <div className="mt-4">
            <h4 className="font-medium text-gray-700 text-sm mb-2">Suggested Resources for Manual Verification:</h4>
            <div className="space-y-2">
              {verificationResult.suggestedResources.map((resource, index) => (
                <a 
                  key={index}
                  href={resource.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
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
      )}

      {!verificationResult && !isVerifying && (
        <p className="text-gray-500 text-sm">
          Click &quot;Verify&quot; to run AI-powered certificate authenticity check
        </p>
      )}
    </div>
  );
}