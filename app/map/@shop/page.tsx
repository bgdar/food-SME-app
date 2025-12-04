"use client"
// ini hamala untuk menampilkan Peta 
import { GoogleMap, LoadScript } from "@react-google-maps/api";


/**
 * Map untuk SHop
 */
const Shop = () => {
  // api ke console: AIzaSyAuiLgjhWDqsZA4PcSHnJc3T0zPH6FYceg
  
  const center = {
    lat: -6.200000,
    lng: 106.816666
  }
  
  return (
    <>

      <section>

        <h3>Shop Router</h3>


        <div className="max-w-[50vw]">
  <GoogleMap
        mapContainerStyle={{ width : '100%', height: '400px' }}
        center={center}
        zoom={12}
      />
        </div>
      </section>

    </>
  )
}

export default Shop;
