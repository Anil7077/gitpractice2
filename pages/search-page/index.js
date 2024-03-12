import React, { useState } from 'react'
import { myData } from '@/public/data/myData'

const index = () => {
    const [query, setQuery] = useState("")
    return (
        <>
            <div className='app'>
                <input placeholder='search here' onChange={event => setQuery(event.target.value)} />
                {
                    myData.filter(post => {
                        if (query === '') {
                            return post;
                        } else if (post.name.toLowerCase().includes(query.toLowerCase())) {
                            return post;
                        }
                    }).map((post, index) => (
                        <div className="box" key={index}>
                            <p>{post.id}</p>
                            <p>{post.name}</p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}


export default index