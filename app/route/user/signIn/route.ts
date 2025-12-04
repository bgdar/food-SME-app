import { connectDB } from "@/app/lib/monggoDB";
import { NextRequest } from "next/server";
import { info } from "console";
import User from "@/app/_model/user"
import { redirect } from "next/dist/server/api-utils";


export async function POST(req: NextRequest) {
  const data = await req.json();
  info("data login :", data);

    // jika data user belum ada di databse
  // const user = User.findOne()
  // if (username) {
  //     //set cookiew
  //
  // }else {
  //   return redirect("")
  // }

  // cek jika data valid lanjut ke Home jika tidak back ke sigin
}
