import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import styles from "/styles/Blogpost.module.css";
import * as fs from "fs";

//Step 1: Find the file coreesponding to the slug
//Step 2: Populate through the and display them

const Slug = (props) => {
  function createMarkup(c) {
    return {__html: c};
  }
  const [blog, setBlog] = useState(props.mytopics);
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1> {blog && blog.title}</h1>
        <hr />
        {blog && <div  dangerouslySetInnerHTML={createMarkup(blog.content)}></div>}
         
      </main>
    </div>
  );
};

export async function getStaticPaths() {
  return {
    paths: [
      { params: { slug: "creators" } },
      { params: { slug: "gaming-as-career" } },
      { params: { slug: "how-to-learn-egaming" } },
    ],
    fallback: true, // can also be true or 'blocking'
  };
}

export async function getStaticProps(context) {
  console.log(context); 

  const { slug } = context.params;

  console.log(slug);

  let mytopics = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");
  return {
    props: { mytopics: JSON.parse(mytopics) }, // will be passed to the page component as props
  };
}

export default Slug;
