import { Fragment } from 'react/jsx-runtime'
import { Route, Routes } from "react-router-dom"
import { PageProvider } from './Page/contextAPI'
import ErrorPage from './Page/404'
import Layout from './Page/layout'
import Page from './Page/index'
import { useEffect } from 'react'
import { fetchSkills } from './store/skillsSlice'
import { store } from './store/store'

// home page
// application will be one singular app but for purpose of creating a layout and 404 I will be using React Router
const App = () => {

  useEffect(()=> {
    const promise = store.dispatch(fetchSkills());
    return () => {
      promise.abort();
    }
  },[])

  return (
    <Fragment>
      <PageProvider>
        <Routes>
          {/* basic route no aditional direction */}
          {/* for this url its being set to what the documents has */}
          <Route path="Newportfolio-ReactViteBuild/" element={<Layout />}>
            {/* display our main home */}
            <Route index element={<Page />} />
            {/* any addition to url will just go straight to 404 page */}
            {/* Our 404 page */}
            <Route path="*" element={<ErrorPage/>} />
          </Route>
        </Routes>
      </PageProvider>
    </Fragment>
  )
}

export default App
