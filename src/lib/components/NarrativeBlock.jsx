import React from 'react'
import Slider from "react-slick";
import { GatsbyImage } from "gatsby-plugin-image";

function NarrativeBlock({title=null, content=null, alignment=null, bgColor=null, images=null, ctas=null }) {
  return (
    <div className="container narrative-block">
      <div className="row">
        <div className="col-lg-5 col-first">
          { title && (
            <h2>{title}</h2>
          )}
          {
            content && (
              <div
                dangerouslySetInnerHTML={{__html: content}}
              />
            )
          }
          {ctas && ctas.length > 0 && <CtaList ctas={block.ctas} />}
        </div>
        <div className="col-lg-5 col-second">
            {
              images && <Image image={images} />
            }
        </div>
      </div>
    </div>
  )
}

function CtaList({ctas}){
  return (
    <div>hola</div>
  )
}

function Image({image}){
  return (
    <GatsbyImage image={image.gatsbyImageData} />
  )
}



export default NarrativeBlock