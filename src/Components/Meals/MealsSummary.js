import classes from "./MealsSummary.module.css";
import Card from "../UI/Card";

const MealsSummary = (props) => {
    return (
        <section className={classes.summary}>
           <Card style={classes.card}>
            <h2>{props.estabName}</h2>
            <p>
                {props.estabDesc}
            </p>
            </Card>
        </section>
    )
}

export default MealsSummary;