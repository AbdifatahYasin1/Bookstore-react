import React from 'react'

const Form = () => {
  return (
    <div>
        <h1>Add new Book</h1>
        <input type="text" name="title" placeholder="Book Title" />
        <input type="text" name="author" placeholder="Author" />
        <button>Add Book</button>

        </div>
  )
}

export default Form