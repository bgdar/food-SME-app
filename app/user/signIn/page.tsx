import Link from "next/link";

export default function SignInUser() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#312F30] p-4">
      <div className="w-full max-w-md bg-[#3B3B3B] p-8 rounded-2xl shadow-xl text-white space-y-6">
        {/* Title */}
        <h1
          className="text-3xl font-bold text-center"
          style={{ color: "#F4A261" }}
        >
          Sign In
        </h1>

        {/* Form */}
        <form className="space-y-5" method="post" action={"/api/user/signIn"}>
          {/* Email */}
          <div>
            <label className="block mb-1 text-sm font-medium" htmlFor="email">
              Username
            </label>
            <input
              id="username"
              name="username"
              type="text"
              className="w-full px-4 py-3 rounded-xl bg-[--color-soft-dark-gray] border border-[#4A4A4A] focus:outline-none focus:ring-2 focus:ring-[#F4A261] text-white placeholder-gray-400"
              placeholder="your name"
            />
          </div>
          <div>
            <label className="block mb-1 text-sm font-medium" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="w-full px-4 py-3 rounded-xl bg-[--color-soft-dark-gray] border border-[#4A4A4A] focus:outline-none focus:ring-2 focus:ring-[#F4A261] text-white placeholder-gray-400"
              placeholder="your@email.com"
            />
          </div>

          {/* Password */}
          <div>
            <label
              className="block mb-1 text-sm font-medium"
              htmlFor="password"
            >
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="w-full px-4 py-3 rounded-xl bg-[--color-soft-dark-gray] border border-[#4A4A4A] focus:outline-none focus:ring-2 focus:ring-[#F4A261] text-white placeholder-gray-400"
              placeholder="••••••••"
            />
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-3 rounded-xl font-semibold text-black mt-4"
            style={{ backgroundColor: "#F6C860" }}
          >
            Sign In
          </button>
        </form>

        {/* Divider */}
        <div className="text-center text-gray-300 text-sm">OR</div>

        {/* Google Login */}
        <button
          className="w-full py-3 rounded-xl flex items-center justify-center gap-2 font-medium"
          style={{ backgroundColor: "#4A4A4A" }}
        >
          <span>Login with Google</span>
        </button>

        {/* Footer */}
        <p className="text-center text-sm text-gray-300">
          Don't have an account?{" "}
          <Link className="text-accent-green" href="/user/signUp">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
