function scuberGreetingForFeet(rideLength){
  if (rideLength <= 400) {
    return 'This one is on me!';
  } else if (rideLength < 2000) {
    return 'That will be twenty bucks.';
  } else if (rideLength <= 2500) {
    return 'I will gladly take your thirty bucks.';
  } else if (rideLength > 2500) {
    return 'No can do.';
  }
}

function ternaryCheckCity(city){
  return (city === 'NYC') ? 'Ok, sounds good.' : "No go.";
}

function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous':
      return 'Thank you so much.';
      break; //this shouldn't be necessary because of return but just in case i guess
    case 'not as generous':
      return 'Thank you.'
    default:
      return 'Bye.';
  }
}