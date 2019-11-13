import React, { Component } from "react"
import "./Meal.css"

class Meal extends Component {

   render() {
      const foodName = this.props.match.params.foodName
      const drinkName = this.props.match.params.drinkName
      const foodurl = `https://source.unsplash.com/1600x900/?${foodName}`
      const drinkurl = `https://source.unsplash.com/1600x900/?${drinkName}`
      return (
         <div className="Meal">
            <div>
               <h1>Food: {foodName}, Drink: {drinkName}</h1>
            </div>
            <div>
               <img src={foodurl} alt={foodName} className="Meal-food-img" />
               <img src={drinkurl} alt={drinkName} className="Meal-drink-img" />
            </div>
         </div>
      )
   }
}

export default Meal