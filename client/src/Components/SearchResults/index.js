import React from 'react';
import './style.css';

const SearchResults = (props) => {
    return(
        <div>
            <ul>
                {props.results.map(result => (
                    <li key='result'>
                        <p>{result.volumeInfo.title}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default SearchResults;