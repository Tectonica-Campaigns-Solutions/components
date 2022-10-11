import React from 'react'

function NarrativeBlock({title=null, content=null, col1class=null, col2class=null }) {
  return (
    <div className="container">
      <div className="row">
        <div className={col1class ? col1class : ''}>
          { title && (
            <h2>{title}</h2>
          )}
          {
            content && (
              <p>{ content }</p>
            )
          }
        </div>
        <div className={col2class ? col2class : ''}>
            columna 2
        </div>
      </div>
    </div>
  )
}

export default NarrativeBlock