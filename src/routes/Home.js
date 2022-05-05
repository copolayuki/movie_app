// import logo from './logo.svg';
// import './App.css';
import React from 'react';
import axios from 'axios';
import Movie from '../components/Movie';
import './Home.css';

class Home extends React.Component {
  // class component
  state = {
    isLoading: true,
    movies: [],
  };
  getMovies = async () => {
    // console.log(movies.data.data.movies);
    const {
      data: {
        data: { movies }, // console.log(movies);
      },
    } = await axios.get(
      'https://yts-proxy.now.sh/list_movies.json?sort_by=rating'
    );
    // console.log(movies);
    // const movies = await axios.get('https://yts-proxy.now.sh/list_movies.json');
    this.setState({ movies, isLoading: false }); // <-- { movies: movies } 축약
  };
  componentDidMount() {
    this.getMovies();
  }

  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className='container'>
        {isLoading ? (
          <div className='loader'>
            <span className='loader__text'>Loading...</span>
          </div>
        ) : (
          <div className='movies'>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                title={movie.title}
                summary={movie.summary}
                poster={movie.medium_cover_image}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </section>
    );
  }
}

export default Home;
