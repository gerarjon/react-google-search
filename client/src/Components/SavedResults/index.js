import React from 'react';
import './style.css';

const SavedResults = (props) => {
  return(
    <div>
      <h4>Saved Books</h4>
      <div className="row">
        <ul>
          {props.results.map(result => (
            <li key={result._id}>
              <div className="section">
                <div className="row">
                  {/* Title  */}
                  <span className="book-title">{result.title}</span>
                  <span className="right button-group">
                      {/* View Button  */}
                      <a 
                        className="waves-effect waves-light btn-small light-blue darken-4" 
                        href={result.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                      >
                        View
                      </a>
                      {/* Save Button  */}
                      <button 
                        className="waves-effect waves-light btn-small save-button red darken-4" 
                        id={result._id} 
                        onClick={() => props.handleDelete(result._id)} 
                      >
                          Delete
                      </button>
                  </span>
                </div>
                {/* Author  */}
                <h6>Author(s): {result.authors}</h6>
                <div className="row">
                  {result.image === "" ? 
                    // Book Image 
                    <div className="no-image col m2">No image available</div> :
                    <img className={"col m2"} alt="Book Cover" src={result.image} />
                  }
                  {/* Book Description  */}
                  <p className="col m10">{result.description === undefined ? "No description available" : result.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SavedResults;