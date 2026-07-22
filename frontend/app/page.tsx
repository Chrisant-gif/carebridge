export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-6">
      <h1 className="text-6xl font-bold text-emerald-600">
        CareBridge
      </h1>

      <p className="mt-6 text-xl text-gray-700 max-w-2xl">
        Connecting NGOs, Donors, Volunteers, and Communities.
      </p>

      <div className="mt-10 flex gap-4">
        <button className="bg-emerald-600 text-white px-6 py-3 rounded-xl hover:bg-emerald-700 transition">
          Get Started
        </button>

        <button className="border border-emerald-600 text-emerald-600 px-6 py-3 rounded-xl hover:bg-emerald-50 transition">
          Learn More
        </button>
      </div>
    </main>
  );
}