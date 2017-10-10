//takes in a range, which can then be used
function produceDrivingRange(blockRange){
  return function(start, end){
    distanceComparison = end.slice(0, -2) -  start.slice(0, -2);
    if (distanceComparison <= blockRange) {
      return `within range by ${blockRange - distanceComparison}`;
    }
    else {
      return `${distanceComparison-blockRange} blocks out of range`
    }
  }
}


function produceTipCalculator(percentage){
  return function(amount){
    return amount * percentage;
  }
}
