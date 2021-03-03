import React from "react";


const Card = ({name, id, }) => {
    return (
        <div className="tc bg-light-white dib br3 pa4 ma2 grow bw2">
            <img alt="Pokemon" src={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`} width = '200px' height='200px'/>
            <div>
                <p>#{id}</p>
                <h2>{name.toUpperCase()}</h2>
               

            </div>


        </div>

    );

}


export default Card;