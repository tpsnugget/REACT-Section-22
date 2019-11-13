import React, {Component} from "react"
import {Link} from "react-router-dom"

class FoodSearch extends Component{

   constructor(props){
      super(props)
      this.state = {
         query: ""
      }
      this.handleChange = this.handleChange.bind(this)
      this.handleClick = this.handleClick.bind(this)
   }

   handleChange(e){
      this.setState({
         query: e.target.value
      })
   }

   handleClick(){
      alert("Saved your food to the DB!")
      this.props.history.push(`/food/${this.state.query}`)
   }

   render(){
      return(
         <div>
            <h1>Search for a food!</h1>
            <input type="text" placeholder="Search for a food" value={this.state.query} onChange={this.handleChange}/>
            <Link to={`/food/${this.state.query}`}>Go!</Link>
            <button onClick={this.handleClick}>Save New Food!</button>
         </div>
      )
   }
}

export default FoodSearch