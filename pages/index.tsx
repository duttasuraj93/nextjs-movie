import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import Footer from '../components/Footer'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      {/* <Header /> */}
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati quasi recusandae ipsam voluptates ipsa veniam dolor corporis at, odio dolore.</div>

      {/* <Footer /> */}
      
    </div>
  )
}

export default Home
