import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#333">
      <h2 className="text-4xl font-bold text-red-600 mb-4">404 - Not Found</h2>
      <p className="text-lg text-white mb-6">
        Sorry, we couldn't find the page you were looking for.
      </p>
      <Link href="/" className="text-white bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-md text-lg font-semibold transition duration-200 ease-in-out">
          Return Home
      </Link>
    </div>
  );
}
