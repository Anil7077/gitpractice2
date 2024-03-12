import Link from 'next/link'
import React from 'react'

const index = () => {
  return (
    <div>
        <h1>My name is anil ...</h1>
        <Link href="/" exact>BACK</Link>
    </div>
  )
}

export default index