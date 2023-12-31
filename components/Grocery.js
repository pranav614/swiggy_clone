import React from 'react';


const Grocery=()=>{
    return(
        <div>
            <div className="contact-us-container">
      <h2>Contact Us</h2>
      <form >
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            required
          />
        </div>
       <div className='submit-button'><button type="submit">Submit</button></div> 
      </form>
    </div>
        </div>
    )
}; 
export default Grocery;