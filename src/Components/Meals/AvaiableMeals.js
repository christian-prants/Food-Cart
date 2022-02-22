import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

import classes from "./AvaiableMeals.module.css";

const AvaiableMeals = (props) => {
    const mealsList = props.meals.map(meal => 
        <MealItem 
            id={meal.id}
            key={meal.id} 
            img={meal.img}
            name={meal.name} 
            desc={meal.desc} 
            price={meal.price} 
        />);

    return (
        <section className={classes.meals}>
            <Card style={classes.card}>
                <ul>
                    {mealsList}
                </ul>
            </Card>
        </section>
    )
}

export default AvaiableMeals;