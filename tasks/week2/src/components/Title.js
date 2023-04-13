import React from "react"
// import "./myStyle.css"
import './myStyles.css'

function Title({data2}){
    console.log("title page is rendering")
    return (
    <div>
        <h3 className="id1">My id is {data2.id} & </h3> <h2 className="title">Title: {data2.title}.</h2><h2 className="description"> {data2.description}</h2>
    </div>
    )
}
export default React.memo(Title);