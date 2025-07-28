import Link from "next/link";

export default function NotFound() {
  return (
    <section className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
      <h2 className="text-2xl font-semibold text-gray-700 mb-2">
        Oops! Page not found.
      </h2>
      <p className="text-gray-600 max-w-md mb-6">
        The page you’re looking for doesn’t exist or has been moved. Let’s get
        you back on track.
      </p>
      <Link
        href="/"
        className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition"
      >
        Go to Homepage
      </Link>
    </section>
  );
}
