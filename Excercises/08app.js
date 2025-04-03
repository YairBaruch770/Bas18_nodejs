let names = ["alex","alon","jack","tyrone","david"]
console,console.log(names[0] + " : " + names[4]);

for (let i = 0; i < names.length; i++) {
      let length = names[i].length                                   
      console.log("Name: " + names[i] + " length of name: " + length)  
}

let reversed = names.toReversed()
console.log(reversed)