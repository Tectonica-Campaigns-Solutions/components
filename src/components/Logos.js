import React from "react";

function Logos({ backgroundColor=null, title=null, intro=null, logos=null, ctas=null }) {
  return (
    <div className={`logos-block ${backgroundColor}`}>
      <div className="container">
        { title && <h2>{title}</h2> }
        
        {
            intro && (
              <div className="intro"
                dangerouslySetInnerHTML={{__html: intro}}
              />
            )
          }

        {
          logos && (
            <div className="row logos-list justify-content-center g-5">
              {
                logos.map(logo => (
                  <div className="col-lg-2 col-md-3 col-6">
                    Logo
                  </div>
                ))
              }
            </div>
          )
        }

        
      </div>
    </div>
  )
}

export default Logos