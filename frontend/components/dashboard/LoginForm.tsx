export default function LoginForm() {
  return (
    <form className="mt-10 space-y-6">

      <div>
        <label className="mb-2 block font-medium text-gray-700">
          Email Address
        </label>

        <input
          type="email"
          placeholder="Enter your email"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-500"
        />
      </div>

      <div>
        <label className="mb-2 block font-medium text-gray-700">
          Password
        </label>

        <input
          type="password"
          placeholder="Enter your password"
          className="w-full rounded-xl border border-gray-300 px-4 py-3 outline-none transition focus:border-emerald-500"
        />
      </div>

      <button
        className="w-full rounded-xl bg-emerald-600 py-4 font-semibold text-white transition hover:bg-emerald-700"
      >
        Sign In
      </button>

      <div className="text-center">
        <a
          href="#"
          className="text-sm text-emerald-600 hover:underline"
        >
          Forgot your password?
        </a>
      </div>

    </form>
  );
}