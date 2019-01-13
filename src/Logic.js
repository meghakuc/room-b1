import React, { Component } from 'react';
import './App.css';
import people from './img/people.jpg';
import rooms from './img/rooms.jpg';
import adults from './img/adults.jpg';
import children from './img/children.jpg';
import decrease from './img/decrease.jpg';
import increase from './img/increase.jpg';
import * as buttonVisibility from './ButtonsVisibility';

class Logic extends Component {
	constructor(props) {
		super(props);
		this.state = {
		  roomClicks: 0,
		  adultClicks: 0,
		  childClicks: 0,
		  isAdultDecEnabled: true,
		  isAdultIncEnabled: true,
		  isRoomDecEnabled: true,
		  isRoomIncEnabled: true,
		  isChildDecEnabled: true,
		  isChildIncEnabled: true
		};
	}
		
	DecreaseRooms = () => {
		var roomCount = this.state.roomClicks;
		var adultCount = this.state.adultClicks;
		var childCount = this.state.childClicks;
		
		if(roomCount === adultCount){
			adultCount = adultCount - 1;
		}
		else if(((roomCount-1) * 4) < adultCount) {
			adultCount = (roomCount-1) * 4;
		}
		roomCount = roomCount- 1;
		if((roomCount * 4 - adultCount) < childCount) {
			childCount = roomCount * 4 - adultCount;
		}
		this.setState({roomClicks: roomCount, adultClicks: adultCount, childClicks: childCount});
	}
	  
	IncreaseRooms = () => {
		var roomCount = this.state.roomClicks;
		var adultCount = this.state.adultClicks;
		var childCount = this.state.childClicks;
		
		if(roomCount === adultCount) {
			adultCount = adultCount + 1;
		}
		roomCount = roomCount + 1;
		this.setState({roomClicks: roomCount, adultClicks: adultCount, childClicks: childCount});
	}
	  
	DecreaseAdults = () => {
		var roomCount = this.state.roomClicks;
		var adultCount = this.state.adultClicks;
		var childCount = this.state.childClicks;
		
		if(adultCount === roomCount) {
			roomCount = roomCount - 1;
		}
		adultCount = adultCount - 1;
		if((roomCount * 4 - adultCount) < childCount) {
			childCount = roomCount * 4 - adultCount;
		}
		this.setState({roomClicks: roomCount, adultClicks: adultCount, childClicks: childCount});
	}
	  
	IncreaseAdults = () => {
		var roomCount = this.state.roomClicks;
		var adultCount = this.state.adultClicks;
		var childCount = this.state.childClicks;
		
		if((childCount + adultCount) === (roomCount * 4)) {
			roomCount = roomCount + 1;
		}
		adultCount = adultCount + 1;
		this.setState({roomClicks: roomCount, adultClicks: adultCount, childClicks: childCount});
	}
	  
	DecreaseChild = () => {
		this.setState({ childClicks: this.state.childClicks - 1 });
	}
	  
	IncreaseChild = () => {
		var roomCount = this.state.roomClicks;
		var adultCount = this.state.adultClicks;
		var childCount = this.state.childClicks;
		
		if((childCount + adultCount) < (roomCount * 4)) {
			childCount = childCount + 1; 
		}
		else
		if((childCount + adultCount) === (roomCount * 4)) {
			if(adultCount === roomCount) {
				adultCount = adultCount + 1;
			}
			childCount = childCount + 1; 
			roomCount = roomCount + 1; 
		}
		this.setState({roomClicks: roomCount, adultClicks: adultCount, childClicks: childCount});
	}
	
	render() {
		buttonVisibility.buttonVisible(this.state);
		return (
          <div className="Div1">
		  <p className="p1">
				<img src={people} alt="People" />
				Choose number of <b>&nbsp;people</b>
		  </p>
		<div className="Div2">
		<p className="p1">
			<img src={rooms} alt="Rooms" />
		ROOMS</p>
        <div className="Div3">
			<button className="button" 
			onClick={this.DecreaseRooms} 
			disabled={!(this.state.isRoomDecEnabled)}>
				<img className="button" src={decrease} alt="Decrease Rooms"/>
			</button>
			<b>{this.state.roomClicks}</b>
			<button className="button" 
			onClick={this.IncreaseRooms} 
			disabled={!(this.state.isRoomIncEnabled)}>
				<img className="button" src={increase} alt="Increase Rooms"/>
			</button>
		</div>
		<br/><hr/>
		<p className="p1">
			<img src={adults} alt="Adults" />
		ADULTS</p>
        <div className="Div3">
			<button className="button" 
			onClick={this.DecreaseAdults} 
			disabled={!(this.state.isAdultDecEnabled)}>
				<img className="button" src={decrease} alt="Decrease Adults"/>
			</button>
			<b>{this.state.adultClicks}</b>
			<button className="button" 
			onClick={this.IncreaseAdults} 
			disabled={!(this.state.isAdultIncEnabled)}>
				<img className="button" src={increase} alt="Increase Adults"/>
			</button>
		</div>
		<br/><hr/>
		<p className="p1">
			<img src={children} alt="Children" />
		CHILDREN</p>
		<div className="Div3">
			<button className="button" 
			onClick={this.DecreaseChild} 
			disabled={!(this.state.isChildDecEnabled)}>
				<img className="button" src={decrease} alt="Decrease Children"/>
			</button>
			<b>{this.state.childClicks}</b>
			<button className="button" 
			onClick={this.IncreaseChild} 
			disabled={!(this.state.isChildIncEnabled)}>
				<img className="button" src={increase} alt="Increase Children"/>
			</button>
		</div>
		<br/>
      </div>
	  </div>
        );
	}
}

export default Logic;