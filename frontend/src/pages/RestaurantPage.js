import React, { Component } from 'react';
import { Row, Col, Card, CardImg,} from 'react-bootstrap';
import searchObj from "../designPatterns/SearchStateSingleton"

class RestaurantPage extends Component {

  render() {
    return (
		<>	
			<div className="restaurantPage">
			<h2 className="restaurantTitle">{searchObj.restaurant.name}</h2>
			<div className="restaurantInfo">
				<img className="image" src={searchObj.restaurant.image_url} />

				<div className="restaurantText">
				<a className="card-link" href={searchObj.restaurant.url}>Website</a>
				<div className="card-text">location: {searchObj.restaurant.location.zip_code}</div>
				<div className="card-text">Phone: {searchObj.restaurant.phone}</div>
				<div className="card-text">Price: {searchObj.restaurant.price}</div>
				<div className="card-text">Rating: {searchObj.restaurant.rating}</div>
				</div> 
			</div>
			</div>
		</>
	);
  }
}
export default RestaurantPage;
