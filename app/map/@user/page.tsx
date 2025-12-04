"use client"
import { GoogleMap, LoadScriptNext } from "@react-google-maps/api";

/**
 *halaman Map untuk user
 */
const User = () => {
  // api ke console: AIzaSyAuiLgjhWDqsZA4PcSHnJc3T0zPH6FYceg
  //
  let centerExample = {
    lat : -5.2000000,

    lng: 106.816666
  }
  return (
    <>

      <section>

        <h3>User Router</h3>

        <div className="max-w-[50vw]">

            <GoogleMap
              mapContainerStyle={{ width : "100%" , height : "400px"}}
              center={centerExample}
              zoom={12}/>

        </div>
      </section>


    </>
  )
}

export default User;
