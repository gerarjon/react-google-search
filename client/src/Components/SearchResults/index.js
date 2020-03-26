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
                <span className="book-title">{result.volumeInfo.title}</span>
                <span className="right button-group">
                    <a className="waves-effect waves-light btn-small" href={result.volumeInfo.previewLink} target="_blank" rel="noopener noreferrer">View</a>
                    <button className="waves-effect waves-light btn-small" type="submit">Save</button>
                </span>
              </div>
              <h6>Author(s): {result.volumeInfo.authors}</h6>
              <div className="row">
                {result.volumeInfo.imageLinks === undefined ? 
                  <div className="no-image col">No image available</div> :
                  <img className={"col m2"} alt="Book Cover" src={result.volumeInfo.imageLinks.thumbnail} />
                }
                <p className="col m10">{result.volumeInfo.description === undefined ? "No description available" : result.volumeInfo.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SearchResults;