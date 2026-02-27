import { connectDB } from "@/app/lib/monggoDB";
import User from "@/app/_model/user";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";

export async function POST(req: Request) {
  await connectDB();
  console.info("header : ", req.headers);
  const formData = await req.formData();
  const username = formData.get("username");
  const password = formData.get("password");
  const email = formData.get("email");

  // jika data user belum ada di databse
  const user = User.exists({
    username,
    password,
    email,
  });
  console.info("data user dari db : ", user);
  if (user) {
    //set cookiew
    (await cookies()).set({
      name: "username",
      value: username,
      httpOnly: true,
      secure: true,
    });

    return Response.redirect(new URL("/home", req.url));
  } else {
    console.log("user belum ada");
    return Response.redirect(new URL("/user/signIn", req.url));
  }

  // cek jika data valid lanjut ke Home jika tidak back ke sigin
}
