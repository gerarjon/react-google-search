import React from 'react';
import './style.css';

const SearchResults = (props) => {
    return(
        <div>
            <h5>Results</h5>
            <div className="row">
                <ul>
                    {props.results.map(result => (
                        <li key='result' className="row">
                            <div className="row">
                                <h5>{result.volumeInfo.title}</h5>
                            </div>
                            <h6>Author(s): {result.volumeInfo.authors}</h6>
                            <div className="row">
                                <img className="col m2" alt={result.volumeInfo.title} src={result.volumeInfo.imageLinks === undefined ? "" : result.volumeInfo.imageLinks.thumbnail} />
                                <p className="col m10">{result.volumeInfo.description === undefined ? "No description" : result.volumeInfo.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default SearchResults;