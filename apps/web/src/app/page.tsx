import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <div className="text-center bg-white p-10 rounded-2xl shadow-lg max-w-md w-full">
        <h1 className="text-3xl font-bold mb-4 text-blue-600">
          🚌 School Bus Tracker
        </h1>
        <p className="text-gray-600 mb-8">
          Welcome! Please select your portal to continue.
        </p>

        <div className="flex flex-col gap-4">
          <Link
            href="/parent/dashboard"
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded-lg transition"
          >
            Parent Portal
          </Link>
          <Link
            href="/conductor/dashboard"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-4 rounded-lg transition"
          >
            Conductor Portal
          </Link>
          <Link
            href="/admin/dashboard"
            className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-4 rounded-lg transition"
          >
            Admin Portal
          </Link>
        </div>
      </div>
    </main>
  );
}
