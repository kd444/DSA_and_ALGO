var object1 = {value:10};
var object2 = object1;
var object3 = {value: 10};

// instantiation

class Player {
    constructor(name, type){
        console.log(this)
        this.name=name;
        this.type=type
    }

    introduce(){
        console.log(`Hi I am ${this.name}, I'm a ${this.type}`)
    }
}

// whenever u extend a class use super to access to its constructor properties
class Wizard extends Player {
    constructor(name,type){
        // super class calls the constructor
      super(name,type)
      console.log('wizard',this)
    
    }
    play(){
        console.log(`WEEE I'm a ${this.type}`)
    }
}
// new key word we create a new wizard 
const wizard1 = new Wizard('Shelly','healer');
const wizard2 = new Wizard('Shawn','Dark Magic')