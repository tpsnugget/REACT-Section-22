import React, { Component } from "react"
import "./Food.css"

class Food extends Component {

   render() {
      const name = this.props.match.params.name
      const url = `https://source.unsplash.com/1600x900/?${name}`
      return (
         <div className="Food">
            <div className="Food-title">
               <h1>I love to eat {name}</h1>
            </div>
            <div>
               <img src={url} alt={name} className="Food-img" />
            </div>
         </div>
      )
   }
}

export default Food