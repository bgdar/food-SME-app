"use client"

import { LoadScript } from "@react-google-maps/api"

export default function MapLayout({
  children,
  shop,
  user,
}: {
  children: React.ReactNode
  shop: React.ReactNode
  user: React.ReactNode
}) {
  return (
    <>
      
          <LoadScript googleMapsApiKey="AIzaSyAuiLgjhWDqsZA4PcSHnJc3T0zPH6FYceg">
      {children}
      {shop}
      {user}
      </LoadScript>
    </>
  )
}
