class Room {
  constructor(name, description, inventory) {
    this.name = name;
    this.playerIsHere = false;
    this.description = description;
    this.inventory = inventory || [];
    this.isLocked = false;
    this.canChangeTo = (newRoom) => {
      let validTransitions = rooms[this.name].canChangeTo;
      if(validTransitions.includes(newRoom)) {
        return true
      }
      else { return false }
    }
  }
}

const mainStreet = new Room('182 Main St.','You are standing on Main Street between Church and South Winooski.\nThere is a door here. A keypad sits on the handle.\nOn the door is a handwritten sign.');


player = {
  currentRoom = mainStreet,
  playerInventory = [],
  playerStatus = [],
  //player actions
    //look around
  lookAround = () => {
    return (this.currentRoom.description)
  },
  
    //change rooms
  changeRoom = (room) => {
    if (this.currentRoom.canChangeTo(room) && room.isLocked === true) {
      return ("The door is locked")
    }
    else if (this.currentRoom.canChangeTo(room) && room.isLocked === false) {
      this.currentRoom = room
    }
    else { return ("You can't go that way") }

  }
    //pick up
    //use items
}