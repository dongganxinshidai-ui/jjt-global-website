import { Outlet } from 'react-router-dom'

import Header from './Header'
import Footer from './Footer'
import WhatsAppFloat from './WhatsAppFloat'
import CompanySchema from './CompanySchema'


export default function Layout() {

  return (

    <div
      className="
      min-h-screen
      bg-background
      flex
      flex-col
      "
    >


      {/* Google Organization Structured Data */}

      <CompanySchema />



      {/* Website Header */}

      <Header />



      {/* Page Content */}

      <main
        className="
        flex-1
        "
      >

        <Outlet />

      </main>



      {/* Website Footer */}

      <Footer />



      {/* Floating WhatsApp Button */}

      <WhatsAppFloat />


    </div>

  )

}