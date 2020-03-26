import React, { Component } from 'react';
import Container from "../Components/Container";
import Searchbar from '../Components/Searchbar';
import SearchResults from "../Components/SearchResults";
import "../App.css";
import API from "../utils/API";

class Home extends Component {
    state = {
        search: '',
        results: [],
        error: ''
    }

    handleInputChange = (event) => {
        this.setState({ search: event.target.value })
    };

    handleFormSubmit = (event) => {
        event.preventDefault();
        API.getBookList(this.state.search) 
            .then(res => {
                if (res.data.status === 'error' ) {
                    throw new Error(res.data.items)
                }
                this.setState({results: res.data.items, error: ''});
            })
            .catch (err => this.setState({error: err.message}))
    }

    render() {
        return(
            <Container>
                <Searchbar handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
                <SearchResults results={this.state.results}/>
            </Container>
        )
    }
}

export default Home;