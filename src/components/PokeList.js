import React from 'react'; 
import Card from './Card';

const PokeList = ({ pokemon }) => {
    return(
        <div>
            {pokemon.map((user, i) => {
                return (<Card 
                    key = {i} 
                    id = {pokemon[i].id}
                    name = {pokemon[i].name}
                   
                    
                    />
                );

            })
            
            }

        </div>
    );
}

export default PokeList;