import React from "react"
import AddIcon from "@material-ui/icons/Add"

import Layout from "../../../components/layout"
import FixedFab from "../../../components/fixed-fab"
import LotsLandsSalesTable from "../../../components/lots-lands-sales-table"

const LotsLandsSalesPage = () => (
  <Layout title="Venta de Lotes y Terrenos">
    <LotsLandsSalesTable />

    <FixedFab
      size="medium"
      color="primary"
      aria-label="add"
      to="/lots-lands/sales/add"
    >
      <AddIcon />
    </FixedFab>
  </Layout>
)

export default LotsLandsSalesPage
