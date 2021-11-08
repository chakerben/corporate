import React from "react"
import Card from "../components/elements/product/card"
import { Box } from "@chakra-ui/react"
import Layout from "@/components/layout"

const SearchPage = ({ location, pageContext }) => {
  const sneakers = pageContext.listSneakers
  const searchField = location.state.searchKey
  console.log(searchField)
  const filteredProducts = location.state.filteredProducts
  return (
    <Layout pageContext={{ ...pageContext }}>
      <section className="container align-middle text-center pt-12 pb-16">
        <h1>
          Browse {filteredProducts?.length} results for {searchField}
        </h1>
        <Box className="grid grid-cols-4 gap-4">
          {sneakers?.map((product, i) => (
            <Card product={product} key={`product-${i}`} />
          ))}
        </Box>
      </section>
    </Layout>
  )
}
export default SearchPage
