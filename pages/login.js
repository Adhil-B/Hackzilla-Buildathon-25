import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { authenticateUser } from '../utils/mockData';

export default function Login() {
  const router = useRouter();
  const [role, setRole] = useState('student'); // Default to student

  const handleRoleChange = (selectedRole) => {
    setRole(selectedRole);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    
    // Authenticate user
    const user = authenticateUser(email, password, role);
    
    if (user) {
      // In a real app, you would set up a session/cookie here
      // For now, we'll just redirect to the appropriate dashboard
      switch(role) {
        case 'student':
          router.push('/dashboard/student');
          break;
        case 'faculty':
          router.push('/dashboard/faculty');
          break;
        case 'institution':
          router.push('/dashboard/institution');
          break;
        default:
          break;
      }
    } else {
      alert('Invalid credentials. Please try again.');
    }
  };

  return (
    <>
      <Head>
        <title>Login - Credify</title>
        <meta name="theme-color" content="#7B61FF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Head>
      
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-10">
        {/* Header */}
        <div className="w-full max-w-sm mb-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">Login to Credify</h1>
            <p className="text-gray-500 text-sm">Enter your credentials to continue</p>
          </div>
        </div>

        {/* Role Selection Tabs */}
        <div className="w-full max-w-sm mb-6">
          <div className="flex bg-gray-100 rounded-lg p-1">
            <button
              onClick={() => handleRoleChange('student')}
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                role === 'student'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Student
            </button>
            <button
              onClick={() => handleRoleChange('faculty')}
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                role === 'faculty'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Faculty
            </button>
            <button
              onClick={() => handleRoleChange('institution')}
              className={`flex-1 py-2 px-4 text-sm font-medium rounded-md transition-colors ${
                role === 'institution'
                  ? 'bg-white text-primary shadow-sm'
                  : 'text-gray-500 hover:text-gray-700'
              }`}
            >
              Institution
            </button>
          </div>
        </div>

        {/* Login Form */}
        <div className="w-full max-w-sm mb-8">
          <form onSubmit={handleFormSubmit} className="space-y-4">
            <div>
              <input 
                type="email" 
                name="email"
                placeholder="Email" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                required
              />
            </div>
            <div>
              <input 
                type="password" 
                name="password"
                placeholder="Password" 
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                required
              />
            </div>
            <button 
              type="submit"
              className="w-full bg-primary text-white font-medium py-3 rounded-lg hover:bg-primary/90 transition-colors"
            >
              Login as {role.charAt(0).toUpperCase() + role.slice(1)}
            </button>
          </form>
        </div>

        {/* Demo Credentials */}
        <div className="w-full max-w-sm mb-6">
          <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
            <h3 className="font-medium text-gray-900 mb-2">Demo Accounts</h3>
            <div className="space-y-2 text-sm">
              <div>
                <p className="font-medium text-gray-700">Student:</p>
                <p className="text-gray-600">Email: adhil@example.com</p>
                <p className="text-gray-600">Password: password123</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Faculty:</p>
                <p className="text-gray-600">Email: sarah.j@simats.edu</p>
                <p className="text-gray-600">Password: password123</p>
              </div>
              <div>
                <p className="font-medium text-gray-700">Institution:</p>
                <p className="text-gray-600">Email: admin@simats.edu</p>
                <p className="text-gray-600">Password: password123</p>
              </div>
            </div>
          </div>
        </div>

        {/* Back to Home */}
        <div className="w-full max-w-sm">
          <button 
            onClick={() => router.push('/')} 
            className="w-full text-primary font-medium py-2 hover:text-primary/80 transition-colors"
          >
            Back to Home
          </button>
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