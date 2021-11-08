import React from "react"
import Card from "../components/elements/product/card"
import { Box } from "@chakra-ui/react"

const SneakersPage = ({ sneakers }) => {
  return (
    <section className="container align-middle text-center pt-12 pb-16">
      <h1>teteee</h1>
      <Box className="grid grid-cols-4 gap-4">
        {sneakers?.map((product, i) => (
          <Card product={product} key={`product-${i}`} />
        ))}
      </Box>
    </section>
  )
}
export default SneakersPage
