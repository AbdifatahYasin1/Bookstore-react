import React from 'react'

const Bookitems = (props) => {
    const {title, author} = props;
  return (
    <div>
        <li>{title}</li>
        <li>{author}</li>
    </div>
  )
}

export default Bookitems