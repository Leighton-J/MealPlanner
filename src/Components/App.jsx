import React, {useEffect, useState} from "react";
import Header from "./Header";
import Footer from "./Footer";

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

const mealOptions = [
  "Curry",
  "Fajitas",
  "Gammon and Chips",
  "Spaghetti Bolognese",
  "Chilli",
  "Enchiladas",
  "Steak and Jacket Potato",
  "Steak and Chips",
  "Stir Fry",
  "Pasta Bake"
];

const mealsSchedule = [];

function App() {
  const [mealsSchedule, setMealsSchedule] = useState([]);
  return (
    <div class="centre">
      <div class="coloured-section container-fluid">
        <Header />
      </div>
      <div class="white-section">
        <div class="mealSchedule">
          {mealsSchedule.map((meal, index) => (
          <p key={index}>{meal.dayOfWeek}: {meal.meal}</p>
          ))}
        </div>
          <div>
          <button class="btn btn-primary" onClick={mealPlan}>Generate Meals</button> {/* Button added */}
          </div>
        </div>
          <div class="coloured-section container-fluid">
            <Footer />
          </div>
    </div>
    
  );

  // Generates an array of meals assigned against a day of the week taken from an array of meals
function mealPlan(){

  const availableMeals = [...mealOptions];
  
  const updatedMealsSchedule = daysOfWeek.map(day => {
   
    const randomIndex = Math.floor(Math.random() * availableMeals.length);
    const randomMeal = availableMeals[randomIndex];
    availableMeals.splice(randomIndex, 1);
    return {dayOfWeek: day, meal: randomMeal};

  });

  setMealsSchedule(updatedMealsSchedule);

};
}





export default App;
