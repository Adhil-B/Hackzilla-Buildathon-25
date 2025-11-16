import Head from 'next/head';
import { useRouter } from 'next/router';

export default function Settings() {
  const router = useRouter();

  const handleLogout = () => {
    // In a real app, you would clear the session/cookies here
    router.push('/');
  };

  return (
    <>
      <Head>
        <title>Settings - Credify</title>
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
            <h1 className="text-lg font-semibold text-gray-900">Settings</h1>
            <div></div> {/* Empty div for spacing */}
          </div>
        </div>

        {/* Settings Options */}
        <div className="px-6 py-4 space-y-4">
          {/* Account Settings */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <h2 className="font-semibold text-gray-900 mb-3">Account</h2>
            
            <div className="space-y-3">
              <button className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">Profile Information</p>
                    <p className="text-xs text-gray-500">Update your personal details</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              
              <button className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">Security</p>
                    <p className="text-xs text-gray-500">Change password and security settings</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              
              <button className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">Notifications</p>
                    <p className="text-xs text-gray-500">Manage notification preferences</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Preferences */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <h2 className="font-semibold text-gray-900 mb-3">Preferences</h2>
            
            <div className="space-y-3">
              <button className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-yellow-50 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"></path>
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">Appearance</p>
                    <p className="text-xs text-gray-500">Light or dark theme</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
              
              <button className="flex items-center justify-between w-full p-3 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mr-3">
                    <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                    </svg>
                  </div>
                  <div className="text-left">
                    <p className="font-medium text-gray-900">Data & Privacy</p>
                    <p className="text-xs text-gray-500">Control your data usage</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
          
          {/* Logout */}
          <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100">
            <button 
              onClick={handleLogout}
              className="flex items-center w-full p-3 rounded-lg hover:bg-red-50 transition-colors"
            >
              <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mr-3">
                <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                </svg>
              </div>
              <div className="text-left">
                <p className="font-medium text-red-600">Log Out</p>
                <p className="text-xs text-gray-500">Sign out of your account</p>
              </div>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}