import React from "react"
import ErrorPage from './Page/404'
import Layout from './Page/layout'
import Page from './Page/index'
import { Route, Routes } from "react-router-dom"

// home page
// application will be one singular app but for purpose of creating a layout and 404 I will be using React Router
function App() {


  return (
    <React.Fragment>
      <Routes>
        {/* basic route no aditional direction */}
        <Route path="/" element={<Layout/>}>
          {/* display our main home */}
          <Route index element={<Page/>} />
           {/* any addition to url will just go straight to 404 page */}
          {/* Our 404 page */}
          <Route path="*" element={<ErrorPage/>} />
        </Route>
      </Routes>
    </React.Fragment>
  )
}

export default App
