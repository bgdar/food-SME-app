import user from "@/app/_model/user";
import User from "@/app/_model/user";
import { connectDB } from "@/app/lib/monggoDB";

export async function POST(req: Request) {
  const data = await req.json();
  await connectDB();
  console.info("data user : ", data);
  // cek apakah ada jika tidak ada kembalikan null
  const user = await User.exists({
    username: data.username,
    password: data.password,
  });
  if (user) {
    return new Response(
      JSON.stringify({
        message: "data sudah digunakan",
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
    const user = await User.create({
      username: data.username,
      password: data.password,
      email: data.email,
    });

    return new Response(
      JSON.stringify({
        message: "User berhasil dibuat",
        user: user,
      }),
      {
        status: 201,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    console.error("Error membuat user:", error.message);
    return Response.json({
      message: error.message,
    });
  }
}
