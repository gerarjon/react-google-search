import React, { Component } from 'react';
import Container from "../Components/Container";
import Searchbar from '../Components/Searchbar';
import "../App.css";

class Home extends Component {
    render() {
        return(
            <Container>
                <Searchbar />

            </Container>
        )
    }
}

export default Home;