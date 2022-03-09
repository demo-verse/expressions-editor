import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ExpressionsEditor from './ExpressionsEditor'


export default function Home() {
  

  const NavBar = () => {
    return (
      <div style= {{flex: 0, color: "wheat"}}>
      <nav>
     <button className='exprSettingsBtn'>settings</button>     
     
     <button className='addFriendsBtn'>add a friend</button>


      </nav>
    </div>
    );
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Expressions of Peace</title>
        <meta name="description" content="Collaborative Expressions" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

   <NavBar/>

      <main className={styles.main}>
          
   
      <ExpressionsEditor/>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://demover.se"
          target="_blank"
          rel="noopener noreferrer"
        >
          {/* <span style={{color: "pink"}}>
            Powered by
            </span>  */}
          <span className={styles.logo}>
            <Image src="/demoverse_horizontal.png" alt="demoVerse logo" width={200} height={62} />
          </span>
        </a>
      </footer>
    </div>
  )
}
