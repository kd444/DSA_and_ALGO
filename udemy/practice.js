function boo(n){
    for(let i=0;i<n.length;i++){
    console.log("boo")
    
}
}

boo([1,2,3,4,5,])  



const array = ["hi","my","teddy"];
array[0];// 0(1)
array[array.length-1] ;//0(1)


console.log('sadasdasdasd'.length);


///
const nemo=['nemo'];
const everyone=['dory','bruce','marlin','nemo','gill','bloat','nigel','squirt','darla','hank'];
const large =new Array(10000).fill('nemo');
function findNemo(array){
    for(let i=0;i<array.length;i++){
         if(array[i] ==  'nemo'){
         console.log("found nemo");
         }
    }
}
findNemo(everyone);
console.log(large);




// DATA STRUCTURES
const strings = ['a','b','c','d'];

//push
strings.push('e');  //o[1 ]

//pop
strings.pop();

strings.unshift('x');  // o(n)

//spice
strings.splice(2,0,'alien') // o(n/2) => o(n)

// dynamic array dont need to think about memory
// push can be n size 
//alway check in even numbers

class MyArray{
    constructor(){
        this.length=0;
        this.data-{};
        
    }
}