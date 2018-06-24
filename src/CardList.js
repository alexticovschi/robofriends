import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
    const cardComponent = robots.map((robot, i) => (
        <Card 
            key={i}
            id={robot.id} 
            name={robot.name} 
            email={robot.email}/>
    ));
    return (
        <Fragment>
            {cardComponent}
        </Fragment>
    )
}

export default CardList;