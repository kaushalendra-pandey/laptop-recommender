import React,{useState} from 'react'
import Recommendation from '../Recommendations/Recommendation'
import "./SelectTab.css"

const SelectTabs = () => {

    const [option,setOptions] = useState("")
    const showOptions = (name) => {
        setOptions(name)
    }   

    return (
        <>
            <div className="select-tabs">
                <div onClick={() => showOptions("normalUse")} className="normal-use single-tab">
                    Normal uses
                </div>
                <div onClick={() => showOptions("gamingUse")} className="gaming-use single-tab">
                    Gaming uses
                </div>
                <div onClick={() => showOptions("hignEndUse")} className="high-end-use single-tab">
                    High-end uses
                </div>

            </div>
            {
                option && <Recommendation option={option}/>
            }
        </>
    )
}

export default SelectTabs
