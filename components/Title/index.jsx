import React from "react";
import styles from './title.module.css'
import { Reveal } from "../Reveal";

export const Title = ({large, widthReveal,color,text,opacity,normal,marginTop,marginBottom,left,marginLeft, italic, small,bold,right,extraSmall}) =>{

  const getClass=()=>{
    let cl=``
    cl+=styles.text
    if(large){
      cl+=" "+styles.large
    }
    if(opacity){
      cl+=" "+styles.opacity
    }
    if(normal){
      cl+=" "+styles.normal
    }

    if(left){
      cl+=" "+styles.left
    }

    if(italic){
      cl+=" "+styles.italic
    }
    if(small){
      cl+=" "+styles.small
    }
    if(bold){
      cl+=" "+styles.bold
    }
    if(right){
      cl+=" "+styles.right
    }
    if(extraSmall){
      cl+=" "+styles.extraSmall
    }
    return cl
  }
    return(
        <Reveal width={widthReveal ? widthReveal :'fit-content'}>
   <h1 className={getClass()} style={{color: color ? color: "#2C2F34", marginTop:marginTop ? marginTop : '0', marginBottom: marginBottom ? marginBottom :"",marginLeft: marginLeft ? marginLeft :""}}>{text}</h1>
   </Reveal>
    )
}