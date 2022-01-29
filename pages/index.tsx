import type { NextPage } from 'next'
import SideBar from "../Components/SideBar"
import Header from '../Components/Header'
import Main from "../Components/Main"
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <SideBar />
      <Main/>
    </div>
  )
}

export default Home
