import { Route, Routes } from "react-router-dom"
import { Fragment, useEffect } from "react"
import { PageProvider } from './Page/contextRefs'
import { fetchSkills } from './store/skillsSlice'
import { fetchProjects } from './store/projectSlice'
import { store } from './store/store'

import ErrorPage from './Page/404'
import Layout from './Page/layout'
import Page from './Page/index'

import AOS from "aos";
import "aos/dist/aos.css";
import 'animate.css';


// home page
// application will be one singular app but for purpose of creating a layout and 404 I will be using React Router
const App = () => {

  useEffect(()=> {
    // initiate our aos scroll
    AOS.init({
      once: true,
      easing: "ease-out-cubic",
    })

    // create a promise and run a dispatch to fetch projects and skills
    const promise2 = store.dispatch(fetchProjects());
    const promise = store.dispatch(fetchSkills());

    return () => {
      // abort functions to cancel request if the component unloads unexpectedly 
      promise.abort();
      promise2.abort();
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
