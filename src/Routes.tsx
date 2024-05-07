import { Route, Routes } from "react-router-dom"
import { DefaultLayout } from "./layouts/DefaultLayout"
import { CompleteOrderPage } from "./pages/CompleteOrder"
import { HomePage } from "./pages/Home"
import { OrderConfirmedPage } from "./pages/OrderConfirmed"

import Login from "./pages/Login"
import Cadastrar from "./pages/Login/components/Cadastrar"

import Whisky from "./pages/Bebidas/Components/Whisky"
import Vinho from "./pages/Bebidas/Components/Vinho"
import Vodka from "./pages/Bebidas/Components/Vodka"
import Licor from "./pages/Bebidas/Components/Licor"
import Gin from "./pages/Bebidas/Components/Gin"
import Cervejas from "./pages/Bebidas/Components/Cervejas"

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/completeOrder" element={<CompleteOrderPage />} />
        <Route path="/orderConfirmed" element={<OrderConfirmedPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastrar" element={<Cadastrar />} />

        <Route path="/cervejas" element={<Cervejas />} />
        <Route path="/gin" element={<Gin />} />
        <Route path="/licor" element={<Licor />} />
        <Route path="/vodka" element={<Vodka />} />
        <Route path="/vinho" element={<Vinho />} />
        <Route path="/whisky" element={<Whisky />} />
      </Route>
    </Routes>
  )
}
