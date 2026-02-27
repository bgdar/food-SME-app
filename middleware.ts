import { NextRequest, NextResponse } from "next/server";

// select url
export const config = {
  matcher: [
    "/product/:path*",
    "/home/:path*",
    "/map/:path*",
    "/favorite/:path*",
  ],
};

function UserMiddleware(request: NextRequest) {
  console.log("middleware jalan");

  // menggunakan cookies username
  let username = request.cookies.get("username");
  // nantik tambah pengecekan di database nya
  if (!username) {
    return NextResponse.redirect(new URL("/user/signIn", request.url));
  }

  // valid
  return null;
}

// main fungsi middlewae
// urutana midleware menentukan execusinya
export function middleware(request: NextRequest) {
  const userMiddleware = UserMiddleware(request);
  if (userMiddleware) {
    return userMiddleware;
  }

  return NextResponse.next();
}
