import React from 'react'

const ArrayLinks = (props) => {
    const { count, current, url } = props;
    const array = [];
    for (let i = 0; i < Math.floor(count / 10) + 1; i++) {
        array.push(i + 1)
    }
    return (
        <div className="array-links">
            {array.map(num =>  num == current ? <span key={num}>{num}</span> : <a key={num} href={url + num}>{num}</a> )}
        </div>
    )
}

export default ArrayLinks
