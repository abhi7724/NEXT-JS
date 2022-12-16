import React, { useEffect,useState } from 'react'
import styles from '/styles/trophies.module.css'
import Link from 'next/link'
import * as fs from 'fs';




//Step 1: Collect all the files from a blogdata directory
//Step 2: Iterate though them and display them

const Trophies = (props) => {
  console.log(props)
  const [blogs,setblogs] = useState(props.alltopics);
  // useEffect(()=>{
    
  //   }, []) 
   
   
  
  return <div className={styles.container}>
    <main className={styles.main}>
      {blogs.map((blogitem)=>{
        return <div key={blogitem.slug}>
        <Link href={`/blogpost/${blogitem.slug}`}>
        <h3 className={styles.blogItemh3}>{blogitem.title}</h3></Link>
        <p className={styles.blogItemp}>{blogitem.metadesc.substr(0,140)}...</p>
        
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
};



export async function getStaticProps(context) {
  
   
  let data = await fs.promises.readdir("blogdata");
  let myfile;
  let alltopics= [];
  
    for (let index = 0; index < data.length; index++) {
      const item = data[index];
      console.log(item)
      myfile = await fs.promises.readFile(('blogdata/' + item), 'utf-8')
      console.log(myfile)
      alltopics.push(JSON.parse(myfile))
    }
      



    return{
    props: {alltopics}, // will be passed to the page component as props

    
  }
}

export default Trophies
