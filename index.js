// Code your solution in this file!
function distanceFromHqInBlocks(num) {
  let distanceInBlocks = Math.abs(42 - num);
  return distanceInBlocks;
}

function distanceFromHqInFeet(num) {
  let distanceBefore = distanceFromHqInBlocks(num);
  let distanceAfter = distanceBefore * 264;
  return distanceAfter;
}

function distanceTravelledInFeet(block1, block2) {
  let feetTravelled = Math.abs(block1 - block2) * 264;
  return feetTravelled;
}

function calculatesFarePrice(block1, block2) {
  let distanceToCharge = distanceTravelledInFeet(block1, block2);
  if (distanceToCharge <= 400) {
    return 0;
  } else if (distanceToCharge > 400 && distanceToCharge <= 2000) {
    return (distanceToCharge - 400) * 0.02;
  } else if (distanceToCharge >= 2000 && distanceToCharge <= 2500) {
    return 25;
  } else if (distanceToCharge > 2500) {
    return "cannot travel that far";
  }
}
