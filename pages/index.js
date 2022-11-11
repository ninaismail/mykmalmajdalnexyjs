import Head from 'next/head'
import Header from '../components/layout/main-header'
import Footer from '../components/layout/footer'
import HeroSection from '../components/hero-section'
import CategoriesSection from '../components/categories-section'
import Branches from '../components/branches'
import LangSwitch from '../components/layout/langswitch'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Km Almajdal</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <LangSwitch/>
      <Header />
      <HeroSection />
      <CategoriesSection/>
      <Branches/>
      <Footer />
    </div>
  )
}

