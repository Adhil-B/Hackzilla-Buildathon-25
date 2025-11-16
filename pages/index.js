import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Credify - Certificate Verification Platform</title>
        <meta name="description" content="A centralized platform for verified academic credentials" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="min-h-screen bg-white flex flex-col items-center justify-center px-10">
        <div className="w-full max-w-sm mb-8">
          <div className="text-center">
            <h1 className="text-2xl font-semibold text-gray-900 mb-2">Welcome to Credify</h1>
            <p className="text-gray-500 text-sm">A centralized platform for verified academic credentials</p>
          </div>
        </div>
        
        <div className="w-full max-w-sm">
          <a href="/login" className="block w-full bg-primary text-white text-center font-medium py-3 rounded-lg hover:bg-primary/90 transition-colors mb-4">
            Login
          </a>
          <a href="/signup" className="block w-full text-primary border border-primary text-center font-medium py-3 rounded-lg hover:bg-primary/5 transition-colors">
            Sign Up
          </a>
        </div>
        
        <div className="absolute bottom-8 text-center">
          <h2 className="text-lg font-semibold text-gray-800">Credify</h2>
          <p className="text-xs text-gray-500">Certificate Verification Platform</p>
        </div>
      </div>
    </>
  );
}