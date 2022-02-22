import { Fragment } from 'react';

import MealsSummary from "./MealsSummary";
import AvaiableMeals from "./AvaiableMeals";

const DUMMY_MEALS = [
    {
      id: 'm1',
      img: '../../Assets/food_img/burrito.jpg',
      name: 'Burritos 4 Quesos',
      desc: 'Tortilla de trigo, molho 4 queijos, frango, tomate, rúcula, bacon e molho de pimenta. *imagem meramente ilustrativa* - não acompanha guacamole e sour cream.',
      price: 21.99,
    },
    {
      id: 'm2',
      img: '../../Assets/food_img/burrito.jpg',
      name: 'Burritos Classic',
      desc: 'Tortilla de trigo, chili com carne (molho de carne com feijão), bacon crocante, cheddar, barbecue, alface, tomate, pimenta jalapeño, e molho de pimenta. *imagem meramente ilustrativa* - não acompanha guacamole e sour cream.',
      price: 24.99,
    },
    {
      id: 'm3',
      img: '../../Assets/food_img/burrito.jpg',
      name: 'Burritos Veggie',
      desc: 'Tortilla de trigo, chile com carne de soja (Molho de soja com Feijão), grão de bico, milho verde, cheddar, alface, tomate, pimenta jalapeño e molho de pimenta. *imagem meramente ilustrativa* - não acompanha guacamole e sour cream.',
      price: 18.99,
    },
    {
      id: 'm4',
      img: '../../Assets/food_img/burrito.jpg',
      name: 'Burritos Pollo',
      desc: 'Tortilla de trigo, tiras de frango, milho verde, pasta de feijão, cheddar, barbecue, alface, tomate e molho de pimenta, pimenta jalapeño. *imagem meramente ilustrativa* - não acompanha guacamole e sour cream.',
      price: 21.99,
    }
];

const DUMMY_ESTAB = [
    {
      id: 'm1',
      name: 'La Niña',
      desc: 'O melhor da cozinha mexicana na sua casa!'
    }
];

const nameEstab = DUMMY_ESTAB.map(estab => { return  estab.name })
const descEstab = DUMMY_ESTAB.map(estab => { return  estab.desc })

const Meals = () => {
    return (
        <Fragment>
            <MealsSummary estabName={nameEstab} estabDesc={descEstab} />
            <AvaiableMeals meals={DUMMY_MEALS} />
        </Fragment>
    )
}

export default Meals;
