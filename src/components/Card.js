import React from 'react';


const Card =(props) => {
    // const {name, email, id} = props
    return (
        <div className='tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5'>
            <img alt= 'robots' src={`https://robohash.org/${props.id}`} width={'250'}/>
            
            <div className=''>
                <h2>{props.name}</h2>
                <p>{props.email}</p>
            </div>
        </div>
    );
}

export default Card;