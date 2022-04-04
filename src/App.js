import React, { Component } from 'react';
import logo from './logo.png';
import "./stylesheets/App.scss";
import {Card, Carousel} from 'antd';
import MoviePoster from "./components/MoviePoster";
import Suggest from "./components/Suggest";
import { Link } from 'react-router-dom';


class App extends Component {

  state = {
    movies: [],
    suggestions: [],
  }

  handleClick = (page, id) => {
    this.props.history.push(`/${page}/${id}`);
  }

  async getMovies() {

    const dataMovies = await fetch("https://elorri.fr/api/disney-plus/movies").then((response) => response.json());

    this.setState({
      movies: dataMovies
    });
  }

  async getSuggest() {

    const suggestMovies = await fetch("https://elorri.fr/api/disney-plus/suggest").then((response) => response.json());

    this.setState({
      suggestions: suggestMovies
    });
  }

  componentDidMount() {
    this.getSuggest();
    this.getMovies();
  }

  render() {

    const listPoster = this.state.movies.slice(0, 6).map(

      (movie) => {

        return (

          <MoviePoster

            key={movie.id}
            id={movie.id}
            poster={movie.poster}

          />

        )

      }

    );

    const listCover = this.state.suggestions.slice(0, 3).map(

      (suggest) => {

        return (

          <Suggest

            key={suggest.id}
            id={suggest.id}
            cover={suggest.cover}

          />

        )

      }

    );

    const movies = [...this.state.movies];
    
    const highLightItems = movies.filter(movie => movie.highlighted).map(item => {
      return (
        <div key={item.id} className="highlight-item">
          <Card
            cover={
              <img
                alt={item.title}
                src={item.cover}
              />
            }
            onClick={() => this.handleClick("movie", item.id)}
          />
        </div>
      );
    });

  return(

      <div className = "App" >

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <div className="landscape">
          <Carousel autoplay>
            {highLightItems}
          </Carousel>
        </div>

        <div className="studioList">

          <div className="btn">
            <Link to="/company/disney">
              <img src="/img/companies/logo-disney.png" alt="" />
            </Link>
          </div>

          <div className="btn">
            <Link to="/company/pixar">
              <img src="/img/companies/logo-pixar.png" alt="" />
            </Link>
          </div>

          <div className="btn">
            <Link to="/company/marvel">
              <img src="/img/companies/logo-marvel.png" alt="" />
            </Link>
          </div>

          <div className="btn">
            <Link to="/company/starwars">
              <img src="/img/companies/logo-starwars.png" alt="" />
            </Link>
          </div>

        </div>

        <div className="newMovies">

          <h2>Nouveautés</h2>

          <div className="movies">
            {listPoster}
          </div>

        </div>

        <div className="suggestMovies">

          <h2>Suggestion</h2>

          <div className="coverSuggest">
            {listCover}
          </div>

        </div>

      </div>

    );
  }
}

export default App;


