import Link from "next/link";

const signIn = () => {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-background p-4">
        <div className="w-full max-w-md bg-card p-8 rounded-2xl shadow-xl text-white space-y-6">
          {/* Title */}
          <h1 className="text-3xl font-bold text-center text-accent-orange">
            Sign In
          </h1>

          {/* Form */}
          <form
            className="space-y-5"
            method="post"
            action={"/api/admin/signIn"}
          >
            {/* Email */}
            <div>
              <label className="block mb-1 text-sm font-medium" htmlFor="email">
                Username
              </label>
              <input
                id="adminname"
                type="text"
                name="adminname"
                className="w-full px-4 py-3 rounded-xl bg-[--color-soft-dark-gray] border border-card focus:outline-none focus:ring-2 focus:ring-accent-orange text-white placeholder-gray-400"
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
                className="w-full px-4 py-3 rounded-xl bg-soft-dark-gray border border-soft-gray focus:outline-none focus:ring-2 focus:ring-accent-orange text-white placeholder-gray-400"
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
                type="password"
                name="password"
                className="w-full px-4 py-3 rounded-xl bg-[--color-soft-dark-gray] border border-soft-gray focus:outline-none focus:ring-2 focus:ring-accent-orange text-white placeholder-gray-400"
                placeholder="••••••••"
              />
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-xl bg-accent-yellow font-semibold text-black mt-4"
            >
              Sign In
            </button>
          </form>

          {/* Divider */}
          <div className="text-center text-gray-300 text-sm">OR</div>

          {/* Google Login */}
          <button className="w-full text-soft-gray py-3 rounded-xl flex items-center justify-center gap-2 font-medium">
            <span>Login with Google</span>
          </button>

          {/* Footer */}
          <p className="text-center text-sm text-gray-300">
            Don't have an account?{" "}
            <Link href={"user/signUp"} className="font-medium hover:underline ">
              Sign Up
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};
