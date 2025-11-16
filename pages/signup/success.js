import Head from 'next/head';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function SignupSuccess() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Account Created - Credify</title>
        <meta name="theme-color" content="#7B61FF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Head>
      
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-[2.5rem]">
        <div className="w-full max-w-sm text-center">
          {/* Success Icon */}
          <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
          </div>
          
          {/* Success Message */}
          <h1 className="text-2xl font-semibold text-gray-900 mb-4">Account Created Successfully!</h1>
          <p className="text-gray-600 mb-8">
            Your account has been created and is pending approval from your institution. 
            You'll receive an email notification once your account is approved.
          </p>
          
          {/* Action Button */}
          <div className="space-y-4">
            <button 
              onClick={() => router.push('/login')}
              className="w-full bg-primary text-white font-medium py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Continue to Login
            </button>
            
            <button 
              onClick={() => router.push('/')}
              className="w-full text-primary font-medium py-2 hover:text-primary/80 transition-colors"
            >
              Back to Home
            </button>
          </div>
        </div>
        
        {/* App Logo/Name */}
        <div className="absolute bottom-8 text-center">
          <h2 className="text-lg font-semibold text-gray-800">Credify</h2>
          <p className="text-xs text-gray-500">Certificate Verification Platform</p>
        </div>
      </div>
    </>
  );
}