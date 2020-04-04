import React, { Component } from 'react';
import Container from "../Components/Container";
import API from "../utils/API";
import "../App.css";

class Saved extends Component {
    state= {
        books: []
    };

    componentDidMount() {
        API.getBooks()
            .then(res => this.setState({books: res.data}))
            .catch(err => console.log(err))
    }

    render() {
        return(
            <Container>
                <ul>
                    {this.state.books.map( book => 
                        <li>{book.title}</li>
                    )}
                </ul>

            </Container>
        )
    }
}

export default Saved;