"use client";
import React,{useContext} from "react";
import styles from './title.module.css'
import LoaderContext from "@/context/LoaderContext";

import { Oval } from  'react-loader-spinner'
export const Loader = () =>{
  const { loading } = useContext(LoaderContext);

    return(
        <div className={loading ? `${styles.loaderContainer}`: `${styles.loaderContainer} ${styles.notLoading}`}>
<Oval
    height = "80"
    width = "80"
    radius = "9"
    color = 'rgba(253,195,22,1)'
    secondaryColor="rgba(253,195,22,0.7)"
    ariaLabel = 'Oval-loading'     
    wrapperStyle
    wrapperClass
  />
        </div>
    )
}