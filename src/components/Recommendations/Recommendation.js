import React,{useState,useEffect} from 'react'
import {gamingUse, higEndUse, normalUse} from "../../database/info"
import "./recommendations.css"

const Recommendation = ({option}) => {

    let use = []
    if(option === "normalUse"){
        use = normalUse
    }else if(option === "gamingUse"){
        use = gamingUse
    }else{
        use = higEndUse
    }

    return (
        <div className="list">
            {
               use.map((val,idx) => {
                   return(
                    <>
                        <p style={{fontSize:"30px",margin:"0.5rem"}}> {val?.name} </p>
                        <p style={{margin:"0"}}> Rating : {val?.rating} </p>
                        <a style={{textDecoration:"none"}} href={val?.link}> Buy from here! </a>
                    </>
                   )
               })
            }
        </div>
    )
}

export default Recommendation
