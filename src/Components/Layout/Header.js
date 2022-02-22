import { Fragment } from 'react';
import HeaderCart from './HeaderCart';

import classes from './Header.module.css';

const Header = (props) => {
    return (
        <Fragment>
            <header className={classes.header}>
                <div>
                    <h1>FoodApp</h1>
                </div>       
                <HeaderCart onClick={props.onShowCart} />
            </header>
            <div className={classes.dummy}>
                <div className={classes['main-image']}>
                    <div className={classes['main-image-triangulos']}>
                        <div className={classes['main-image-losangos']}>
                            <div className={classes['main-image-circulos']}>
                                <div className={classes['main-image-outline01']}>
                                    <div className={classes['main-image-outline02']}></div>
                                </div>
                            </div> 
                        </div>
                    </div>  
                </div>                 
                {/* <div className={classes.endereco}>
                    <h1>Endereço</h1>
                    <input></input>
                    <button>OO</button>
                </div> */}
            </div>
        </Fragment>
    )
}

export default Header;
