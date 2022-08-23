import React from 'react'
import bg from '../images/结局.png'

const End = () => {


    return (
        <div style={{
            margin: 0,
            height: '110vh',
            backgroundImage: `url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            overflow: 'hidden'
        }}>
        </div>
    )
}
export default End;