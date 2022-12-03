import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "/styles/Blogpost.module.css";

//Step 1: Find the file coreesponding to the slug
//Step 2: Populate through the and display them

const slug = (props) => {
  const [blog, setBlog] = useState(props.mytopics);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1> {blog && blog.title}</h1>
        <hr />
        <div>{blog && blog.content}</div>
      </main>
    </div>
  );
};

export async function getServerSideProps(context) {
  // console.log(context.query)
  // const router = useRouter();
  
 
   
    const {slug} = context.query;
    console.log(slug);
    
    let data = await fetch(`http://localhost:3000/api/getblog?slug=${slug}`)
      let mytopics = await data.json()
      
      

  return {
    props: { mytopics }, // will be passed to the page component as props
  }
}

export default slug;
