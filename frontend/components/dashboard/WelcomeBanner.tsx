"use client";

export default function WelcomeBanner() {
  const today = new Date();

  const formattedDate = today.toLocaleDateString("en-KE", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <div className="mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-emerald-600 via-emerald-500 to-green-500 p-8 text-white shadow-lg">
      <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-center">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-emerald-100">
            Kingdom Caregivers
          </p>

          <h1 className="mt-3 text-4xl font-bold">
            Welcome back, Stella 👋
          </h1>

          <p className="mt-3 text-lg text-emerald-100">
            {formattedDate}
          </p>

          <p className="mt-6 max-w-2xl text-emerald-50">
            Every visit, every donation and every volunteer is changing
            lives. Here's what's happening across CareBridge today.
          </p>
        </div>

        <div className="rounded-2xl bg-white/15 p-6 backdrop-blur-md">
          <p className="text-sm text-emerald-100">
            Today's Summary
          </p>

          <h2 className="mt-2 text-5xl font-bold">
            148
          </h2>

          <p className="mt-2 text-emerald-100">
            Families Currently Supported
          </p>
        </div>
      </div>
    </div>
  );
}