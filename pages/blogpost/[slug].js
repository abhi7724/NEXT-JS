import React, {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import styles from '/styles/Blogpost.module.css'


//Step 1: Find the file coreesponding to the slug
//Step 2: Populate through the and display them

const slug = () => {
  const router = useRouter();
  const [blog, setBlog] = useState();
  useEffect(() => {
    if (!router.isReady) return;
    const slug = router.query.slug;
    console.log(slug);
   fetch(`http://localhost:3000/api/getblog?slug=${slug}`).then((a)=>{
    return a.json();
   })
   .then((parsed) =>{
    setBlog(parsed)
   })
  
    
  }, [router.isReady])
  
    
   
  return <div className={styles.container}>
    <main className={styles.main}>
      <h1> {blog && blog.title}</h1>
    <hr />
    <div>
      {blog && blog.content}
    </div>
    </main>
    </div>;
  
};

export default slug
