import Link from 'next/link';
import React from 'react'

export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await res.json()

  return {
    props: {
      data,
    }
  }
}
const blog = ({ data }) => {
  return (
    <>
      {data.slice(0, 5).map((curEle) => (
        <div>
          <h3>{curEle.id}</h3>
          <Link href={`/blog/${curEle.id}`}>
            <h2>{curEle.title}</h2>
          </Link>
        </div>
      ))}
    </>
  )
}

export default blog