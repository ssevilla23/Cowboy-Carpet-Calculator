function calculateCarpet() {

  let roomOneResult = getRoomWidth(1) * getRoomLength(1);
  let roomTwoResult = getRoomWidth(2) * getRoomLength(2);
  let roomSum = roomTwoResult + roomOneResult;
  let extra = roomSum * 0.1;
  let total = roomSum + extra;
  showResult(total);
  
  // console.log("click");
}
calculateCarpetTest();
