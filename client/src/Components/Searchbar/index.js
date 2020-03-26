import React from 'react';
import './style.css';

const Searchbar = (props) => {
    return(
        <div className="row">
            <h5>Book Search</h5>
            <form>
                <div className="row">
                    <div className="input-field">
                        <input 
                            id="search" 
                            type="search" 
                            name="search" 
                            value={props.search} 
                            onChange={props.handleInputChange} />
                        <label 
                            htmlFor="search" 
                            className="active">
                            Book
                        </label>
                    </div>
                    <div className="right-align">
                        <button 
                            className="btn waves-effect waves-light" 
                            type="submit" 
                            name="action"
                            onClick={props.handleFormSubmit}>
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default Searchbar;