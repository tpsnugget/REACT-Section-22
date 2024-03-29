import React, { Component } from "react"
import { Redirect } from "react-router-dom"
import "./Food.css"

class Food extends Component {

   render() {
      const name = this.props.match.params.name
      const url = `https://source.unsplash.com/1600x900/?${name}`
      return (
         <div className="Food">
      {/\d/.test(name) ? (<Redirect to="/" />) :
               (<div>
                  <div className="Food-title">
                     <h1>I love to eat {name}</h1>
                  </div>
                  <div>
                     <img src={url} alt={name} className="Food-img" />
                  </div>
               </div>)}
         </div>
      )
   }
}

export default Food