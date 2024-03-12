import React from 'react'


export const getStaticPaths = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await res.json()

    const paths = data.map ((curEle) => {
        return {
            params: {pageNo : curEle.id.toString()}
        }
    })

    return{
        paths:paths,
        fallback: false,
    }
}

// ---------
export const getStaticProps = async (context) => {
    const id = context.params.pageNo
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
    const data = await res.json()
  
    return {
      props: {
        data,
      }
    }
  }

const myData = ({data}) => {
    return (
        <>
            <h3>{data.id}</h3>
            <h2>{data.title}</h2>
            <h5>{data.body}</h5>
        </>
    )
}

export default myData