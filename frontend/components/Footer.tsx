export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 md:grid-cols-3">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-white">
              CareBridge
            </h2>

            <p className="mt-6 leading-8">
              Connecting donors, volunteers, caregivers, and communities
              through technology to create lasting impact across Kenya.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              Quick Links
            </h3>

            <ul className="mt-6 space-y-3">

              <li>
                <a href="#about" className="hover:text-emerald-400 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#features" className="hover:text-emerald-400 transition">
                  Features
                </a>
              </li>

              <li>
                <a href="#how-it-works" className="hover:text-emerald-400 transition">
                  How It Works
                </a>
              </li>

              <li>
                <a href="#founder" className="hover:text-emerald-400 transition">
                  Founder
                </a>
              </li>

            </ul>
          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold text-white">
              Contact
            </h3>

            <div className="mt-6 space-y-4">

              <p>
                📍 Nairobi, Kenya
              </p>

              <p>
                ✉️ caregiverskingdom@gmail.com
              </p>

              <p>
                ❤️ Supporting families raising children living with cerebral palsy and autism.
              </p>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-gray-800 pt-8 text-center text-sm text-gray-500">

          © {new Date().getFullYear()} CareBridge · Built for Kingdom Caregivers with ❤️

        </div>

      </div>
    </footer>
  );
}