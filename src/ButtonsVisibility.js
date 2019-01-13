export function buttonVisible(state) {
	state.isRoomIncEnabled = true;
	state.isRoomDecEnabled = true;
	
	state.isAdultIncEnabled = true;
	state.isAdultDecEnabled = true;
	
	state.isChildDecEnabled = true;
	state.isChildIncEnabled = true;
	
	if(state.roomClicks === 5){
		state.isRoomIncEnabled = false;
		state.isRoomDecEnabled = true;
	}
	else if(state.roomClicks === 0){
		state.isRoomDecEnabled = false;
		state.isRoomIncEnabled = true;
	}
	
	if(state.adultClicks === 0){
		state.isAdultDecEnabled = false;
	} 
	
	if(state.childClicks === 0){
		state.isChildDecEnabled = false;
	}
	
	if((state.roomClicks !== 0) && ((state.roomClicks * 4)=== (state.childClicks + state.adultClicks))) {
		if(state.isRoomIncEnabled === false){
			state.isAdultIncEnabled = false;
		}
		state.isChildIncEnabled = false;
	} 
}