import React, {Component} from 'react';

class Movie extends Component {
    render() {
        return (
            //add JSX here
            <div> 
                <img class="image" src={this.props.image}></img>
                <h1 >The lord of the Rings: {this.props.title}</h1>
                <p >{this.props.hours}h {this.props.minutes}min</p>
            </div>
        )
    }
}

export default Movie;