import React from "react"

import Layout from "../components/Layout"
import Seo from "../components/seo"
import Search from "../components/Search"

const SearchPage = () => (
  <Layout>
    <Seo title="Search" description="Pagina de busca do blog" />
    <Search />
  </Layout>
)

export default SearchPage
