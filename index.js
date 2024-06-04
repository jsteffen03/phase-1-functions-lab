// Code your solution in this file!
function distanceFromHqInBlocks(blocks){
    const location = 42;
    return Math.abs(blocks - location);
}
//Learned "Math.abs" ensures numbers are always expressed as postive!

function distanceFromHqInFeet(someValue){
    const blocks = distanceFromHqInBlocks(someValue);
    return blocks * 264;
}

function distanceTravelledInFeet(start, destination) {
    const blocks = Math.abs(start - destination);
    const feet = blocks * 264
    return feet;
}

function calculatesFarePrice(start, destination){
    const blocks = Math.abs(start - destination);
    const feet = blocks * 264;
    if (feet <= 400) {
        return 0;
     } else if (feet > 400 && feet <= 2000) {
       const distance = feet- 400;
       const price = distance * .02;
       return price;
     } else if (feet > 2000 && feet <= 2500)  {
       return 25;
     } else {
       return 'cannot travel that far';
     }
   }

