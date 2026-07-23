import AuthCard from "../../components/dashboard/AuthCard";
import LoginForm from "../../components/dashboard/LoginForm";
import Logo from "../../components/dashboard/Logo";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-gradient-to-br from-emerald-50 via-white to-emerald-100 px-6">

      <AuthCard>

        <Logo />

        <div className="mt-10 text-center">

          <h2 className="text-2xl font-bold text-gray-900">
            Welcome Back 👋
          </h2>

          <p className="mt-3 text-gray-600">
            Continue making a difference in your community.
          </p>

        </div>

        <LoginForm />

      </AuthCard>

    </main>
  );
}