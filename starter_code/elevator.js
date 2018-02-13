class Elevator {
  constructor(){
    this.floor      = 0;
    this.MAXFLOOR   = 10;
    this.waitingList = [];
    this.passengers = [];
    this.requests   = [];
    this.direction = "up"
  }

  start() { 
    let interval = setInterval(() => this.update(),1000);
  }

  stop() { 
    clearInterval(interval)
  }

  update() {
    this.log(); 
    if(this.requests.length === 0){
      this.stop();
    }else{
      if(this.direction == "up"){
        this.floorUp();
        this.waitingList.forEach((element, index) => {this._passengersEnter(element, index);});
        this.passengers.forEach((element, index) => {this._passengersLeave(element, index);});
      } else if(this.direction == "down"){
        this.floorDown();
        this.waitingList.forEach((element, index) => {this._passengersEnter(element, index);});
        this.passengers.forEach((element, index) => {this._passengersLeave(element, index);});
      }
    }
  }
    
  

  _passengersEnter(person, index) { 
    if(this.floor == person.originFloor){
      this.passengers.push(person);
      console.log(`${person.name} has enter the elevator.`)
      this.requests.splice(this.requests.indexOf(person.destinationFloor),1)
      this.waitingList.splice(index,1)
      this.requests.push(person.destinationFloor)
    }
  }

  _passengersLeave(person, index) { 
    if(this.floor == person.destinationFloor){
      this.requests.splice(this.requests.indexOf(person.destinationFloor),1)
      console.log(`${person.name} has left the elevator.`)
      this.passengers.splice(person,index)

    }
  }

  floorUp() { 
    if(this.floor < this.MAXFLOOR){
      this.floor ++
    }else{
      this.direction == "down"
    }
  }

  floorDown() { 
    if(this.floor > 0){
      this.floor --
    }else{
      this.direction == "up"
    }

  }

  call(person) {
    this.requests.push(person.originFloor);
    this.waitingList.push(person);
    // console.log(this.requests.length)
    // console.log(this.waitingList)
  }

  log() { 
    console.log(`Direction: ${this.direction} Floor: ${this.floor}`);
  }
}

module.exports = Elevator;
