import React, {Component} from "react"

export default class Filter extends Component {
    render(){
        return(
            <div>
                <div className="filter-result"></div>
                <div className="filter-category">{""} 
                Order 
                <select>
                    <option>ALL</option>
                    <option value="">ALL</option>
                    <option value="">ALL</option>
                    <option value="">ALL</option>
                    <option value="">ALL</option>
                </select>
                </div>
                <div className="filter-allergen">
                    Filter
                    <select>
                        <option value="">ALL</option>
                        <option value="">ALL</option>
                        <option value="">ALL</option>
                        <option value="">ALL</option>
                        <option value="">ALL</option>
                    </select>
                </div>
            </div>
        )
    }
}