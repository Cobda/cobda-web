import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'
import AccountContent from '../components/AccountContent'
import AccountInformation from '../components/AccountInformation'
import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'

const Account = () => {
  const [session] = useSession()
  const router = useRouter()

  useEffect(() => {
    if (!session) {
      router.push('/sign-in')
    }
  }, [])

  return (
    <div className="layout-account">
      {/* TODO: Title and file name should be username instead. Ex: Shawn Mentos | Cobda */}
      <Meta title="Account | Cobda" />
      <header>
        <Navbar />
      </header>
      {/* TODO: For further implemetation}
    {/* <aside>
      <AccountInformation />
    </aside> */}
      <main>
        <AccountContent />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Account
