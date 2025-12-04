
import User from "@/app/_model/user"

export async  function POST(req : Request){
  const data = await req.json();
  
// cek apakah ada jika tidak ada kembalikan null
  const username = User.find({
    username : {$exists : true , $ne : null}
  })

}
