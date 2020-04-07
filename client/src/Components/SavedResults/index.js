import React from 'react';
import './style.css';

const SavedResults = (props) => {
  return(
    <div>
      <h5>Results</h5>
      <div className="row">
        <ul>
          {props.results.map(result => (
            <li key={result._id} className="row">
              <div className="row">
                {/* Title  */}
                <span className="book-title">{result.title}</span>
                <span className="right button-group">
                    {/* View Button  */}
                    <a className="waves-effect waves-light btn-small" href={result.link} target="_blank" rel="noopener noreferrer">View</a>
                    {/* Save Button  */}
                    <button className="waves-effect waves-light btn-small save-button" id={result._id} onClick={(event) => props.handleDelete(event)} type="submit">Delete</button>
                </span>
              </div>
              {/* Author  */}
              <h6>Author(s): {result.authors}</h6>
              <div className="row">
                {result.image === undefined ? 
                  // Book Image 
                  <div className="no-image col m2">No image available</div> :
                  <img className={"col m2"} alt="Book Cover" src={result.image} />
                }
                {/* Book Description  */}
                <p className="col m10">{result.description === undefined ? "No description available" : result.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SavedResults;