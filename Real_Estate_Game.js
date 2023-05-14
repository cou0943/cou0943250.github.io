class User {
    #Houses;
  
    constructor() {
      this.#Houses = [];
    }
  
    getHouses() {
      return this.#Houses;
    }
  
    buyHouse(HouseAddress) {
      let newHouse = new House(HouseAddress);
      this.#Houses.push(newHouse);
      alert("You bought a new House at " + HouseAddress + ".");
    }
  
    sellHouse(Address) {
      for (let i = 0; i < this.#Houses.length; i++) {
        let HouseAddress = this.#Houses[i].getAddress();
        if (HouseAddress == Address) {
          alert(HouseAddress + " has been sold");
          this.#Houses.splice(i, 1);
        }
      }
    }
  }
  
  class House {
    #Address;
    #Rooms;
  
    constructor(Address) {
      this.#Address = Address;
      this.#Rooms = [];
    }
  
    getAddress() {
      return this.#Address;
    }
  
    addRoom(room) {
      this.#Rooms.push(room);
    }
  
    getRooms() {
      return this.#Rooms;
    }
  }
  
  class Room {
    #PaintColor;
  
    constructor(PaintColor) {
      this.#PaintColor = PaintColor;
    }
  
    getPaintColor() {
      return this.#PaintColor;
    }
  
    setPaintColor(PaintColor) {
      this.#PaintColor = PaintColor;
    }
  }
  
  let user = new User();
  
  let Playing = true;
  while (Playing) {
    let BuyorModify = prompt("Would you like to buy a house (1) or work on a currently owned house (2)?");
  
    if (BuyorModify == 2) {
      let HouseList = "";
      let Houses = user.getHouses();
      for (let i = 0; i < Houses.length; i++) {
        HouseList += i + " - " + Houses[i].getAddress();
      }
      let addressChoice = prompt("Choose a house to work on: " + HouseList);
      let currentHouse = Houses[addressChoice];
      let newOrPaint = prompt("What would you like to do? Add a new room (1) Paint a room (2)");
      if (newOrPaint == 1) {
        let newRoomType = prompt("What room would you like to add? (living room, kitchen, ect)");
        let newRoom = new Room(newRoomType);
        currentHouse.addRoom(newRoom);
        alert("You added a new " + newRoomType + " to your house!");
      } else if (newOrPaint == 2) {
        let RoomList = "";
        let Rooms = currentHouse.getRooms();
        for (let i = 0; i < Rooms.length; i++) {
          RoomList += i + " - " + Rooms[i].getPaintColor();
        }
        let roomChoice = prompt("Choose a room to paint: " + RoomList);
        let newColor = prompt("What color would you like to paint the room?");
        Rooms[roomChoice].setPaintColor(newColor);
        alert("You painted the room " + newColor + ".");
      }
    } else {
      let HouseAddress = prompt("What is the address of the new house?");
      user.buyHouse(HouseAddress);
    }
  }
