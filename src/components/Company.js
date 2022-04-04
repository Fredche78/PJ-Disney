import React, { Component } from 'react';
import logo from '../logo.png';
import {Link} from 'react-router-dom';
import "../stylesheets/App.scss";
import MoviePoster from "./MoviePoster";

class Company extends Component {

    state = {
        companies: []
    }

    async getCompany (company) {

        const pageCompanies = await fetch(`https://elorri.fr/api/disney-plus/company/${company}`).then((response) => response.json());
        
        this.setState({
            companies: pageCompanies
        });
    }

    componentDidMount() {
        this.getCompany(this.props.match.params.company);
       
    }


  render() {

    const listCompany = this.state.companies.map(

        (company) => {
  
          return (
  
            <MoviePoster
  
              key={company.id}
              id={company.id}
              poster={company.poster}
  
            />
  
          )
  
        }
  
    );

    // const MovieCompany = ({ poster, id }) => {

    //     return (
    
    //         // <div className='Poster'>
    
    //             <Link to={`/movie/${id}`}>
    
    //                 <img src={poster} alt="poster" />
     
    //             </Link>
    
    
    //     )
    
    // }


    return (

        <div className="App">

            <header className="App-header">

                <Link to="/">
                    <img src={logo} className="App-logo" alt="logo" />
                </Link>
            
            </header>

            <div className="present">
                <div className="imgCompany">
                    <img src={`/img/companies/logo-${this.props.match.params.company}.png`} className="App-company" alt="" />
                </div>
         
                <div className="presentTxt">
                    Vous présente tout son catalogue
                </div>
            </div>

            <div className="listCompany">
                {listCompany}
            </div>

        </div>

    );
  }
}

export default Company;
