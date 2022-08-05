import React from 'react';

const SearchBox = ({searchfield,searchChange})=> {
    return (
        <div className='pa2'>
            <input 
            className='pa2 ba b--gren bg-lightest-blue'
            type= 'search' 
            placeholder='Search robots'
            onChange={searchChange}
            />
        </div>
    );
}

export default SearchBox;


// we have an app, a searchbox and a cardlist, the Cardlist and the searchbox needs communicate to beable to filter the robots.
// hence, we need to use state which is an object that describes our application. 


// haven persed the onsearchchange aas props to searchbox, we will now 
// say (onChange html= searchange) under the placeholder