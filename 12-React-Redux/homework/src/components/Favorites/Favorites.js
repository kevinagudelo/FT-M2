import React, { Component } from "react";
import { connect } from "react-redux";
// import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { removeMovieFavorite } from '../../actions/index';

import './Favorites.css';

export class ConnectedList extends Component {

  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          
          {this.props.movies && 
          this.props.movies.map(movie => (
            
            <div key={movie.imDB}>
              <Link  to={'/movie/'+movie.imdbID}>
                    <b>
                      {movie.Title}
                    </b>
              </Link>
              <button  onClick={()=> this.props.removeMovieFavorite(movie.imdbID)}>ELIMINAR</button>

            </div>
          ))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps (state){
  return {
      movies : state.moviesFavourites
  }

}
function mapDispatchToProps (dispatch){
  return {
    removeMovieFavorite: movieID => dispatch(removeMovieFavorite(movieID))
  }

}


export default connect(mapStateToProps,mapDispatchToProps)(ConnectedList);
