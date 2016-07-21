import React from 'react';

export const NewSpot = (props) => {


	return (
		<div>
		<form>
		    <div className="form-group">
		        <label className="sr-only">Spot name</label>
		        <input type="text" placeholder="name" className="form-control" id="email" />
		    </div>
		    <div className="form-group">
		        <label className="sr-only">Address</label>
		        <input type="text" name="subject" placeholder="address" className="form-control" id="address" />
		    </div>
		    <div className="form-group">
		        <label className="sr-only">Short description</label>
		        <input type="text" name="subject" placeholder="" className="form-control" id="short" />
		    </div>
		    <div className="form-group">
		        <label className="sr-only" for="message">Detailed description</label>
		        <textarea name="message" placeholder="" className="form-control" id="detailed"></textarea>
		    </div>
		    <div className="form-group">
		        <label className="sr-only">Bust</label>
		        <input type="text" name="subject" placeholder="bust" className="form-control" id="bust" />
		    </div>
		    <button type="submit" className="btn">Add spot</button>
		</form>
		</div>
		);
};