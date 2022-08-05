import React from 'react';
import Card from './Card';


const CardList= ({robots}) => {
// if (true){
//     throw new Error('Noooooo!');}

// we created a var here (const cardComponent = robot.map ((user, i) => {})) to return the card array loop which we now replace with the card component that was initially returned
    return (
        <div>
            {
                robots.map ((user, i) => {
                    return( 
                        <Card 
                            key={i} 
                            id={robots[i].id} 
                            name={robots[i].name} 
                            email={robots[i].email}
                        />
                    )
                })
            }
        </div>
    );
    
}

export default CardList;