import React from 'react'
import "./SelectTab.css"

const SelectTabs = () => {
    return (
        <div className="select-tabs">
            <div className="normal-use single-tab">
                Normal uses
            </div>
            <div className="gaming-use single-tab">
                Gaming uses
            </div>
            <div className="high-end-use single-tab">
                High-end uses
            </div>
        </div>
    )
}

export default SelectTabs
