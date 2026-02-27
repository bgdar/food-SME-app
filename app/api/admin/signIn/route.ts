import Admin from "@/app/_model/admin";
import { cookies } from "next/headers";
import { connectDB } from "@/app/lib/monggoDB";

export async function POST(req: Request) {
  const formData = await req.formData();
  const adminname = formData.get("adminname");
  const email = formData.get("email");
  const password = formData.get("password");

  await connectDB();

  // cek apakah ada jika tidak ada kembalikan null
  const admin = await Admin.exists({
    username: adminname,
    password: password,
    email,
  });

  if (admin) {
    // flash message
    (await cookies()).set("adminname", adminname);

    return Response.redirect(new URL("/admin", req.url));
  }
  console.log("admin belum ada");

  return Response.redirect(new URL("/admin/signIn", req.url));
}
