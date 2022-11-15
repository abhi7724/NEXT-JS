import React from 'react'
import userRouter from 'next/router'

const slug = () => {
    const router = userRouter();
    const {slug} = router.query;
    console.log(router.query)
  return (
    <div>slug</div>
  )
}

export default slug
