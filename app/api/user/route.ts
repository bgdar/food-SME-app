import { cookies } from "next/headers";

export async function DELETE(req: Request) {
  const cookiesStore = await cookies();
  console.info("cookies nay : ", cookiesStore.get("username"));
  cookiesStore.delete("username");
}
