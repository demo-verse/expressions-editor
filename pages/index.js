import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import ExpressionsEditor from './ExpressionsEditor'


export default function Home() {
  

  const NavBar = () => {
    return (
      <div className='navBar' style= {{flex: 0, color: "wheat"}}>
      <nav>
     <button className='exprSettingsBtn'>save</button>     
     
     <button className='addFriendsBtn'>mint</button>


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


      <main className={styles.main}>
          
   
      <ExpressionsEditor/>

      </main>
   <NavBar/>

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
