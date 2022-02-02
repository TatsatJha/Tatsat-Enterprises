import type { NextPage } from 'next'
import SideBar from "../Components/SideBar"
import Header from '../Components/Header'
import {MainHome} from "../Components/Main"
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Header page=""/>
      <MainHome/>
    </div>
  )
}

export default Home
