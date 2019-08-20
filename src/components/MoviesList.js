import React from 'react';

const Movieslist = ({data}) => {

    const renderMovies = (movies) => (
        movies ?
        movies.map((item , i )=>(
        <div key={i}>{item.name}</div>
       )) 
       :
       null
    )


   console.log(data)
    return (
        <div>
             {renderMovies(data)}
        </div>
    );
};

export default Movieslist;