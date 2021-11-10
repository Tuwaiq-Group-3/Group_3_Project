import React from 'react'
import Star from './Star'

export default function Comment({comment}) {
    return (
        <div className='d-flex flex-column w-75 mx-auto m-2' style={{border: '1px solid gray'}}>
            <div className='d-flex p-4'>
                { comment.rate.map( (e, index) => <Star key={index} bool = {e} />)}
            </div>
            <p className='card_price' >{comment.comment}</p>
        </div>
    )
}
