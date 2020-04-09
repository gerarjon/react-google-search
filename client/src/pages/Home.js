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
        error: '',
        message: 'Your book is saved'
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
            .catch (err => this.setState({ error: err.message }))
    }

    handleSave = id => {
        let savedBooks = this.state.results.filter( book => book.id === id);
        savedBooks = savedBooks[0];
        let image = savedBooks.volumeInfo.imageLinks
        if (!image) {
            image = "";
        } else {
            image = savedBooks.volumeInfo.imageLinks.smallThumbnail;
        }
        API.saveBook({
            title: savedBooks.volumeInfo.title,
            authors: savedBooks.volumeInfo.authors,
            description: savedBooks.volumeInfo.description,
            image: image,
            link: savedBooks.volumeInfo.previewLink
        })
            .then(
                console.log(this.state.message),
                console.log(savedBooks)
            )
            .catch( 
                err => this.setState({ error: err.message })
            )
            
    }

    render() {
        return(
            <Container>
                <Searchbar handleInputChange={this.handleInputChange} handleFormSubmit={this.handleFormSubmit} />
                <SearchResults results={this.state.results} handleSave={this.handleSave}/>
            </Container>
        )
    }
}

export default Home;