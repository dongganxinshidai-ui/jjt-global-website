import { Routes, Route } from "react-router-dom";

import Layout from "@/components/Layout";
import ScrollToTop from "@/components/ScrollToTop";


// Pages

import HomePage from "@/pages/HomePage/HomePage";
import AboutPage from "@/pages/AboutPage/AboutPage";
import ContactPage from "@/pages/ContactPage/ContactPage";
import NotFoundPage from "@/pages/NotFoundPage/NotFoundPage";


// Business Pages

import AutoPage from "@/pages/AutoPage/AutoPage";
import SteelPage from "@/pages/SteelPage/SteelPage";
import MachineryPage from "@/pages/MachineryPage/MachineryPage";




function App() {


return (


<>


{/* 
  页面切换自动返回顶部
*/}

<ScrollToTop />



<Routes>


  <Route

    path="/"

    element={<Layout />}

  >


    {/* Home */}

    <Route

      index

      element={<HomePage />}

    />



    {/* About */}

    <Route

      path="about"

      element={<AboutPage />}

    />



    {/* Used Car Export */}

    <Route

      path="auto"

      element={<AutoPage />}

    />



    {/* Steel Structure Export */}

    <Route

      path="steel"

      element={<SteelPage />}

    />



    {/* Construction Machinery Export */}

    <Route

      path="machinery"

      element={<MachineryPage />}

    />



    {/* Contact */}

    <Route

      path="contact"

      element={<ContactPage />}

    />



    {/* 404 */}

    <Route

      path="*"

      element={<NotFoundPage />}

    />


  </Route>


</Routes>


</>


);


}


export default App;