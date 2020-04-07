import React, { Component } from 'react';
import Container from "../Components/Container";
import API from "../utils/API";
import SavedResults from "../Components/SavedResults";
import "../App.css";

class Saved extends Component {
    state= {
        results: []
    };

    componentDidMount() {
        API.getBooks()
            .then(res => this.setState({results: res.data}))
            .catch(err => console.log(err))
    }

    handleDelete(event) {
        event.preventDefault();
        console.log('hello')
    }

    render() {
        return(
            <Container>
                <SavedResults results={this.state.results} handleDelete={this.handleDelete} />
            </Container>
        )
    }
}

export default Saved;