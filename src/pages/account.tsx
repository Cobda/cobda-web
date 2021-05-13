import React, { useEffect } from 'react'
import Footer from '../components/Footer'
import Meta from '../components/Meta'
import Navbar from '../components/Navbar'
import AccountContent from '../components/AccountContent'
import AccountInformation from '../components/AccountInformation'
import axios from 'axios'
import { BASE_URL } from '../constant'
import { useSetRecoilState } from 'recoil'
import { userState } from '../recoil/atoms'

const Account = ({ user }: any) => {
  const setUserState = useSetRecoilState(userState)
  const title = user ? `${user.username} | Cobda` : 'Account | Cobda'

  useEffect(() => {
    setUserState(user)
  }, [])

  return (
    <div className="layout-account">
      <Meta title={title} />
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

export const getServerSideProps = async (context: any) =>
  axios
    .get(`${BASE_URL}/api/users/${context.query.id}`)
    .then((user) => {
      return {
        props: {
          user: user.data
        }
      }
    })
    .catch(() => {
      return { props: {} }
    })

export default Account
