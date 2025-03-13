// components/meals/meals-grid.js
import MealItem from './meal-item';
import classes from './meals-grid.module.css';

const MealsGrid = ({ meals }) => {
  // Ensure meals is an array before trying to map
  if (!Array.isArray(meals)) {
    return <p>No meals found!</p>; // Fallback message
  }

  return (
    <ul className={classes.meals}>
      {meals.map(meal => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
};

export default MealsGrid;
