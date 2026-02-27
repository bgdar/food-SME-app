import Admin from "@/app/_model/admin";
import { connectDB } from "@/app/lib/monggoDB";

export async function POST(req: Request) {
  const data = await req.json();
  await connectDB();

  // cek apakah ada jika tidak ada kembalikan null
  const admin = await Admin.exists({
    username: data.username,
  });
  if (admin) {
    return new Response(
      JSON.stringify({
        message: "Username sudah digunakan",
      }),
      {
        status: 400,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  }

  try {
    const admin = await Admin.create({
      username: data.username,
      password: data.password,
      email: data.email,
    });
    return new Response(
      JSON.stringify({
        message: "User berhasil dibuat",
        user: admin.username,
      }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("Terjaidi masalah saat membuat admin : ", error.message);
    return Response.json({
      message: error.message,
    });
  }
}
