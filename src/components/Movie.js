import React, { Component } from 'react';
import logo from '../logo.png';
import { Link } from 'react-router-dom';
import "../stylesheets/App.scss";
import { MovieDisplay} from './MovieDisplay';


export default class movie extends Component {

    state = {
        movie: {},
        modalVisible: false
    }

    playMovie = () => {
        this.setState({
            modalVisible: true,
        });
    }

    handleCancel = () => {

        // Arrêter la video à la fermeture de la popin
        const iframe = document.querySelector('iframe');
        console.log(iframe);
        if (iframe) {
        console.log(iframe.src);
            let iframeSrc = iframe.src;
            iframe.src = iframeSrc;
        }

        this.setState({
            modalVisible: false,
        });
    }

    async getMovie(id) {

        const response = await fetch(`https://elorri.fr/api/disney-plus/movie/${id}`);
        const data = await response.json();
        this.setState({
            movie: data
        });
    }

    componentDidMount() {
        this.getMovie(this.props.match.params.id);
    }

    render() {

        return (

            <div className="App">

                <header className="App-header">

                    <Link to="/">
                        <img src={logo} className="App-logo" alt="logo" />
                    </Link>

                </header>

                <MovieDisplay  
                    movie={this.state.movie} 
                    modalVisible={this.state.modalVisible}
                    playMovie={() => this.playMovie()}
                    handleCancel={() => this.handleCancel()} 
                />

            </div>

        );
    }
}

