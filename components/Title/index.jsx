import React from "react";
import styles from './title.module.css'

export const Title = ({large, color,text,opacity,normal,marginTop,marginBottom,left,marginLeft, italic, small,bold}) =>{

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
  
    return cl
  }
    return(
        
   <h1 className={getClass()} style={{color: color ? color: "#2C2F34", marginTop:marginTop ? marginTop : '0', marginBottom: marginBottom ? marginBottom :"",marginLeft: marginLeft ? marginLeft :""}}>{text}</h1>
    )
}