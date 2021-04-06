import React, { Component } from 'react';

class Card extends Component {
    render() {

        const data = this.props.info[this.props.n]

        let {id,name,city,country,employer, title,favoriteMovies} = data

        const movies = favoriteMovies.map ( (e,i) => {

            return (
                <li key = {i} >{e}</li>
            )
        } )

        console.log(this.props.info[this.props.n])
        return (
            <div className = 'card' >
                <h1 className = 'id'> {id}/{this.props.info.length}</h1>
                <h1 className = 'name'>{name.first} {name.last}</h1>
                <p>From:{city}, {country}</p>
                <p>Job Title: {title} </p>
                <h3>Favorities Movies:</h3>
                <p>Employer: {employer}</p>
                
                <ol>
                    {movies}    
                </ol>    
            </div>
        );
    }
}

export default Card;