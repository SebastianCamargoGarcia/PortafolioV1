import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../components/Navbar'  
import Main  from '../components/Main'
import About from '../components/About'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
export default function Home () {
  return (
    <div className="">
      <Head>
        <title>Sebastian Camargo | Full Stack Developer</title>
        <meta
          name="description"
          content="Portafolio de Sebastian Camargo, Desarrollador Full Stack especializado en .NET, SAP Business One, Next.js, NestJS, Flutter, Supabase e integraciones empresariales."
        />
        <meta name="author" content="Sebastian David Camargo Garcia" />
        <meta property="og:title" content="Sebastian Camargo | Full Stack Developer" />
        <meta
          property="og:description"
          content="APIs REST, integraciones SAP Business One, dashboards administrativos y aplicaciones web modernas."
        />
        <link rel="icon" href="/favicon.ico" /> 
      </Head>

    <Navbar/>
    <Main/> 
    <About/>
    <Skills/>
    <Projects/>
    <Contact/>
    </div>
  )
}


