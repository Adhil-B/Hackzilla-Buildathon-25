import Head from 'next/head';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { mockStudents, mockFaculty } from '../../utils/mockData';

export default function Signup() {
  const router = useRouter();
  const [step, setStep] = useState(1); // 1: Role selection, 2: Details form
  const [role, setRole] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    institution: '',
  });

  const institutions = [
    'SIMATS University',
    'Anna University',
    'Delhi University',
    'IIT Bombay',
    'Other'
  ];

  const handleRoleSelect = (selectedRole) => {
    setRole(selectedRole);
    setStep(2);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const institution = formData.get('institution');
    
    // In a real app, you would submit the form data to the database
    // For now, we'll redirect to a success page
    router.push('/signup/success');
  };

  return (
    <>
      <Head>
        <title>Sign Up - Credify</title>
        <meta name="theme-color" content="#7B61FF" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      </Head>
      
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-10">
        {step === 1 ? (
          <>
            {/* Header */}
            <div className="w-full max-w-sm mb-8">
              <div className="text-center">
                <h1 className="text-2xl font-semibold text-gray-900 mb-2">Create Account</h1>
                <p className="text-gray-500 text-sm">Select your role to continue</p>
              </div>
            </div>

            {/* Role Selection */}
            <div className="w-full max-w-sm mb-8">
              <div className="space-y-4">
                <button 
                  onClick={() => handleRoleSelect('student')}
                  className="w-full bg-primary text-white text-center font-medium py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                  Student Account
                </button>
                
                <button 
                  onClick={() => handleRoleSelect('faculty')}
                  className="w-full bg-primary text-white text-center font-medium py-3 rounded-lg hover:bg-primary/90 transition-colors flex items-center justify-center"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                  Faculty Account
                </button>
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
          </>
        ) : (
          <>
            {/* Signup Form */}
            <div className="w-full max-w-sm mb-8">
              <div className="text-center mb-6">
                <h1 className="text-2xl font-semibold text-gray-900 mb-2">
                  Create {role.charAt(0).toUpperCase() + role.slice(1)} Account
                </h1>
                <p className="text-gray-500 text-sm">Fill in your details</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Full Name" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    required
                  />
                </div>
                
                <div>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Email" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    required
                  />
                </div>
                
                <div>
                  <input 
                    type="password" 
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="Password" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    required
                  />
                </div>
                
                <div>
                  <select
                    name="institution"
                    value={formData.institution}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary outline-none transition"
                    required
                  >
                    <option value="">Select Institution</option>
                    {institutions.map((inst, index) => (
                      <option key={index} value={inst}>{inst}</option>
                    ))}
                  </select>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-primary text-white font-medium py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Create Account
                </button>
              </form>
            </div>
            
            <div className="w-full max-w-sm">
              <button 
                onClick={() => setStep(1)} 
                className="w-full text-primary font-medium py-2 hover:text-primary/80 transition-colors"
              >
                Back to Role Selection
              </button>
            </div>
          </>
        )}

        {/* App Logo/Name */}
        <div className="absolute bottom-8 text-center">
          <h2 className="text-lg font-semibold text-gray-800">Credify</h2>
          <p className="text-xs text-gray-500">Certificate Verification Platform</p>
        </div>
      </div>
    </>
  );
}