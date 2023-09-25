"use client";
import React, {useEffect,useState,useRef} from "react";
import styles from './events.module.css'
import {motion, useInView, useAnimation} from 'framer-motion'
import {Element} from 'react-scroll'


export const Reveal = ({width="fit-content",children}) =>{
 const ref=useRef(null)
 const isInView=useInView(ref,{once:true})
 const mainControls=useAnimation()

 useEffect(()=>{

  if(isInView){
    mainControls.start('visible')
  }

 },[isInView])
    return(
    
        <div ref={ref} style={{position:'relative',width,overflow:'hidden'}}>
          <motion.div variants={{
            hidden:{opacity:0,y:75},
            visible:{opacity:1,y:0}
          }}
          initial={'hidden'} animate={mainControls} transition={{duration:0.5,delay:0.25}}>{children}</motion.div>
        </div>

    )

}