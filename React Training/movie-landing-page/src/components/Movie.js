import React from 'react';
import '../css/Movie.css';

class Movie extends React.Component {
    render() {
        return (
            <div
                className="movie"
                onClick={() => {
                    window.open(this.props.url);
                }}
            >
                <div className="movie-img">
                    <img src={this.props.imageSrc}></img>
                </div>

                <div className="movie-caption">{this.props.movieName}</div>
            </div>
        );
    }
}

export default Movie;
