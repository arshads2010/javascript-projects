let cargoHold = ['oxygen tanks', 'space suits', 'parrot', 'instruction manual', 'meal packs', 'slinky', 'security blanket'];

//1) Use bracket notation to replace ‘slinky’ with ‘space tether’. Print the array to confirm the change.
//cargoHold.splice(5)


cargoHold[5] = "space tether"
console.log("array after replaceing slinky -------"+cargoHold);

//2) Remove the last item from the array with pop. Print the element removed and the updated array.
console.log("removed item  "+cargoHold.pop()+" and the whole array is "+cargoHold);

let tempArray = cargoHold;

//3) Remove the first item from the array with shift. Print the element removed and the updated array.
console.log("removed first item ----------"+ tempArray.shift(1,tempArray.length));
console.log("original array after removing ---------"+ tempArray);
//4) Unlike pop and shift, push and unshift require arguments inside the (). Add the items 1138 and ‘20 meters’ to the the array - the number at the start and the string at the end. Print the updated array to confirm the changes.

cargoHold.push('20 meters') 
cargoHold.unshift(1138)
console.log(cargoHold)
//5) Use a template literal to print the final array and its length.
console.log(`the array  ${cargoHold} has a length of ${cargoHold.length}`)