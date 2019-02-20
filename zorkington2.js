class Room {
  constructor(name, description, inventory) {
    //name and description should be strings, inventory is an array of objects
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
    };

    this.unlock = () => {
      if (this.isLocked === false) {
        return ('The door is already unlocked')
      }
      else {
        this.isLocked = false;
        return ("The door unlocks with an audible click.")
      }
    };

    this.removeItem = (item) => {
      this.inventory.pop(item)
    };
    
    this.examineItem = (item) => {
      let thisItem = this.inventory.find(obj => {
        return obj.name === item.toLowerCase()
      } )
      if (this.inventory.includes(thisItem)){
        return (thisItem.description)
      }
      else {return (`You don't see ${item} in here...`)}
    };

  }
}

//Inventory object definitions
//mainStreet objs
const keyPad = {
  name = 'keypad',
  description = 'A keypad with the digits 1-9.\nLooks pretty standard.',
  unlockFoyer = (input) => {
    if (input.toString() === '12345') {
      foyer.unlock()
    }
    else { return ('Bzzzzt! Wrong code') }
  }
}

const sign = {
  name = 'sign',
  description = 'The sign says "Welcome to Burlington Code Academy! Come on\nup to the third floor. If the door is locked, use the code: 12345."',
  read = () => {
    return (this.description)
  }
}
//foyer objs
  //7 days
//classroom 
  //Alex C
//muddyWaters
  //register? coffee?
//mrMikes
  //register? pizza?
const mainStreet = new Room('182 Main St.','You are standing on Main Street between Church and South Winooski.\nThere is a door here. A keypad sits on the handle.\nOn the door is a handwritten sign.', [keypad, sign]);


player = {
  currentRoom = mainStreet,
  playerInventory = [],
  playerStatus = [],
  //player actions
  
  lookAround = () => {
    return (this.currentRoom.description)
  },
  
  changeRoom = (room) => {
    if (this.currentRoom.canChangeTo(room) && room.isLocked === true) {
      return ("The door is locked...")
    }
    else if (this.currentRoom.canChangeTo(room) && room.isLocked === false) {
      this.currentRoom = room
    }
    else { return ("You can't go that way") }
  },
    //pick up
  pickUp = (item) => {
    this.playerInventory.push(item)
  }
    //use items
}