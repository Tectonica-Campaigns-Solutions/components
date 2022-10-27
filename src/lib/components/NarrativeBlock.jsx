import React from 'react'
import Slider from "react-slick";
import { GatsbyImage } from "gatsby-plugin-image";

function NarrativeBlock({title=null, content=null, alignment=null, bgColor=null, images=null, ctas=null }) {
  return (
    <div className="container">
      <div className="row">
        <div className={`col-lg-5`}>
          { title && (
            <h2>{title}</h2>
          )}
          {
            content && (
              <p>{ content }</p>
            )
          }
          {ctas && ctas.length > 0 && <CtaList ctas={block.ctas} />}
        </div>
        <div className={`col-lg-5`}>
            {
              <Image image={images} />
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

function WrapperImage ({images}){
  
}

function Slider({images}){
  
}

function Image({image}){
  <GatsbyImage image={image.gatsbyImageData} />
}



export default NarrativeBlock