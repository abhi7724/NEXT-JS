import Head from 'next/head'


import styles from '../styles/Home.module.css';




export default function Home() {
  return (
    <div className={styles.container}>
      
      <style jsx>
        {`
        h2{
          font-size:38px;
        }
        h3{
          font-size
        }
        `}
       
      </style>
      <Head>
        <title>VIBE HAi</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="KEYWORDS" content="Esports, Tournaments , prizepools " />
        
      </Head>

     
      
      

      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className='mySpan  '>ABHINAV'S PLACE</span>
         
        </h1>

        <div className="image">


        
        {/* <Image className={styles.myimg} alt="/" img src="/gamer.jpg" width={600} height={400}/> */}
        <img className={styles.myimg} src="/gamer.jpg" width={600} height={400} alt="" />
        </div>
        <p className={styles.description}>
          A Gamer By heart for the Gamers
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>

        {/* <div className={`${styles2.con} ${styles1.con}`}> */}
        {/* <div className={`${styles2.con} ${styles1.con}`}> */}
        <div>
          <h2>Popular Blogs</h2>
          <div className="blogItem">
            <h3>How to Enter E-sports in India in 2022</h3>
            <p>Gaming is the most best thing has ever happended in India</p>
            
          </div>
          <div className="blogItem">
            <h3>How to Enter E-sports in India in 2022</h3>
            <p>Gaming is the most best thing has ever happended in India</p>

          </div>
          <div className="blogItem">
            <h3>How to Enter E-sports in India in 2022</h3>
            <p>Gaming is the most best thing has ever happended in India</p>

          </div>
          </div>
       
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            
            <img src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}
