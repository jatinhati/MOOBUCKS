import { Link } from 'react-router-dom';

const AccountPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-24 bg-white">
      <div className="w-full max-w-md p-8 border border-gray-200 rounded-lg shadow-md bg-white">
        <h2 className="text-3xl font-bold text-center mb-8 tracking-wide">LOGIN</h2>
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input id="email" name="email" type="email" autoComplete="email" required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-moobucks-brown" />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input id="password" name="password" type="password" autoComplete="current-password" required className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-moobucks-brown" />
          </div>
          <div className="flex flex-col items-center space-y-2">
            <Link to="#" className="text-sm text-red-600 hover:underline">Forgot your password?</Link>
            <button type="submit" className="w-32 py-2 border border-red-600 text-red-600 font-semibold rounded hover:bg-red-50 transition">SIGN IN</button>
            <Link to="#" className="text-sm text-red-600 hover:underline mt-2">Create account</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountPage;