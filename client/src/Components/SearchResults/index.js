import React from 'react';
import './style.css';

const SearchResults = (props) => {
  return(
    <div>
      <div className="row">
        <ul>
          {props.results.map(result => (
            <li key={result.id}>
              <div className="section">
                <div className="row">
                  {/* Title  */}
                  <span className="book-title">{result.volumeInfo.title}</span>
                  <span className="right button-group">
                      {/* View Button  */}
                      <a 
                        className="waves-effect waves-light btn-small light-blue darken-4" 
                        href={result.volumeInfo.previewLink} 
                        target="_blank" 
                        rel="noopener noreferrer">View</a>
                      {/* Save Button  */}
                      <button 
                        className="waves-effect waves-light btn-small save-button green darken-4" 
                        id={result.id} 
                        onClick={() => props.handleSave(result.id)} 
                      >
                        Save
                      </button>
                  </span>
                </div>
                {/* Author  */}
                <h6>Author(s): {result.volumeInfo.authors.join(", ")}</h6>
                <div className="row">
                  {result.volumeInfo.imageLinks === undefined ? 
                    // Book Image 
                    <div className="no-image col m2">No image available</div> :
                    <img className={"col m2"} alt="Book Cover" src={result.volumeInfo.imageLinks.smallThumbnail} />
                  }
                  {/* Book Description  */}
                  <p className="col m10">{result.volumeInfo.description === undefined ? "No description available" : result.volumeInfo.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SearchResults;