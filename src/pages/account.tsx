import React from 'react'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'
import AccountContent from '../components/AccountContent'
import AccountInformation from '../components/AccountInformation'

const Account = () => (
  <div className="layout-account">
    {/* TODO: Title should be username instead. Ex: Shawn Mentos | Cobda */}
    <Meta title="Account | Cobda" />
    <header>
      <Navbar />
    </header>
    <aside>
      <AccountInformation />
    </aside>
    <main>
      <AccountContent />
    </main>
    <footer>
      <Footer />
    </footer>
  </div>
)

export default Account
