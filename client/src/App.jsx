
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { Layout } from "./components/layout"

import { Home } from "./pages/Home"

function App() {

  return (
    <>
      <Layout>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
        </BrowserRouter>
      </Layout>
    </>
  )
}

export default App
