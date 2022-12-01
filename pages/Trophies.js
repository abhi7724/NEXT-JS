import React, { useEffect,useState } from 'react'
import styles from '/styles/trophies.module.css'
import Link from 'next/link'




//Step 1: Collect all the files from a blogdata directory
//Step 2: Iterate though them and display them

const Trophies = () => {
  const [blogs,setblogs] = useState([]);
  useEffect(()=>{
    console.log("useEffect is running");
    fetch('http://localhost:3000/api/blogs').then((a)=>{
      
      return a.json();})
    .then((parsed)=>{
      
      console.log(parsed)
      setblogs(parsed)
    })
    }, []) 
   
   
  
  return <div className={styles.container}>
    <main className={styles.main}>
      {blogs.map((blogitem)=>{
        return <div key={blogitem.slug}>
        <Link href={`/blogpost/${blogitem.slug}`}>
        <h3 className={styles.blogItemh3}>{blogitem.title}</h3></Link>
        <p className={styles.blogItemp}>{blogitem.content.substr(0,140)}...</p>
        
      </div>
})}
  <h2>Popular Blogs</h2>
  
  <div className="blogItem">
    <h3 >How to Enter E-sports in India in 2022</h3>
    <p>Gaming is the most best thing has ever happended in India</p>

  </div>
  <div className="blogItem">
    <h3>How to Enter E-sports in India in 2022</h3>
    <p>Gaming is the most best thing has ever happended in India</p>

  </div>
  </main>
  </div>
}

export default Trophies
