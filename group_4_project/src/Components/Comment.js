import React from 'react'
import Star from './Star'

export default function Comment({comment}) {
    console.log('comment ==>' ,comment)
    return (
        <div className='d-flex flex-column w-75 mx-auto m-2' style={{border: '1px solid gray'}}>
            <div className='d-flex p-4'>
                { comment.rate.map( (e) => <Star bool = {e} />)}
            </div>
            <p className='card_price' >{comment.comment}</p>
        </div>
    )
}
