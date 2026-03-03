import React, { Fragment } from 'react'

const ListAndKeys = () => {
  const username = ["Sundari", "mala", "leela", "urmila"]
  return (
    <>
      {
        username.map((ele, index)=> {
          return (
            <Fragment key={index}>
              <h1>{ele}</h1>
            </Fragment>
          )
        })
      }
    </>
  )
}

export default ListAndKeys