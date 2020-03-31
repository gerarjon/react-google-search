import React, { Component } from 'react';
import Container from "../Components/Container";
import API from "../utils/API";
import "../App.css";

class Saved extends Component {
    state= {
        books: []
    };

    componentDidMount() {
        this.loadBooks();
        console.log(this.state.books)
    }
    
    loadBooks() {
        API.getBooks()
        .then(res => this.setState({ books: res.data}))
        .catch(err => console.log(err))
    }

    render() {
        return(
            <Container>
                {this.state.books}

            </Container>
        )
    }
}

export default Saved;