import { useState } from 'react'
import { FaHome, FaBuilding, FaUserPlus, FaGoogle } from 'react-icons/fa'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
//import { auth } from '../../firebase/config'

const Ui = () => {
  const [userType, setUserType] = useState(null)
  const [isLogin, setIsLogin] = useState(true)

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider()
    try {
      const result = await signInWithPopup(auth, provider)
      // Handle successful sign-in
      console.log('Google sign-in successful:', result.user)
      // You can add additional logic here, such as redirecting the user or updating the UI
    } catch (error) {
      // Handle errors
      console.error('Google sign-in error:', error)
    }
  }

  const renderUserSelection = () => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-8">Choose User Type</h1>
      <div className="flex flex-col sm:flex-row gap-4">
        <button
          onClick={() => setUserType('homeHunter')}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <FaHome /> Home Hunter
        </button>
        <button
          onClick={() => setUserType('landlord')}
          className="flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
        >
          <FaBuilding /> Landlord
        </button>
      </div>
    </div>
  )

  const renderAuthForm = (type) => (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h2 className="text-2xl font-bold mb-6">
        {type === 'homeHunter' ? 'Home Hunter' : 'Landlord'} {isLogin ? 'Login' : 'Sign Up'}
      </h2>
      <form className="w-full max-w-sm">
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">Email</label>
          <input type="email" id="email" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="mb-6">
          <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">Password</label>
          <input type="password" id="password" className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div className="flex items-center justify-between">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
            {isLogin ? 'Sign In' : 'Sign Up'}
          </button>
          {isLogin && (
            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
              Forgot Password?
            </a>
          )}
        </div>
      </form>
      <div className="mt-4 flex flex-col items-center">
        <button onClick={signInWithGoogle} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline flex items-center justify-center gap-2 mb-4">
          <FaGoogle /> Sign in with Google
        </button>
        <button onClick={() => setIsLogin(!isLogin)} className="text-blue-500 hover:text-blue-700">
          {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Log In"}
        </button>
        <button onClick={() => setUserType(null)} className="mt-2 text-blue-500 hover:text-blue-700">
          Back to user selection
        </button>
      </div>
    </div>
  )

  return (
    <div className="container mx-auto px-4">
      {userType === null && renderUserSelection()}
      {userType === 'homeHunter' && renderAuthForm('homeHunter')}
      {userType === 'landlord' && renderAuthForm('landlord')}
    </div>
  )
}

export default Ui