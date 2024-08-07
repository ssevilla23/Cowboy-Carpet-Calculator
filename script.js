/* This is where you'll complete the Milestone. Open your README.md file and click 'Open Preview' for detailed instuctions! */

function calculateCarpet() {
  // 👇 Write your code here 👇

  let roomOneResult = getRoomWidth(1) * getRoomLength(1);
  let roomTwoResult = getRoomWidth(2) * getRoomLength(2);
  let roomSum = roomTwoResult + roomOneResult;
  let extra = roomSum * 0.1;
  let total = roomSum + extra;
  showResult(total);
  
  // console.log("click");
}
calculateCarpetTest();

/* LEVEL UP! (optional) 
	1. Function explanations:
    - validateRoomNumber seems to be a debugger that checks if the developer is calling the correct rooms. If I attempt to call getRoomWidth() in the console and my parameter is undefined; a string; or a number other than 1 or 2, then it will throw an error. If I correctly call the function getRoomWidth() with 1 or 2 as the parameter, the validateRoomNumber will return True and allow me to see what number that user inserted as the width for the room I called.
    - validateResult is similar to the function above where it checks that I called the showResult() function with the correct parameter. It only throws a customized error when I don't input a parameter, but it also throws 'undefined' and prints "NaN" in the "Required Sqft" area if I use a string as a parameter. It mainly checks if the showResult() function has a parameter or not though.

	2. Custom styles added:
  - I changed the entire page's font from Arial to Playwrite DE Grund
  - I centered Room 1 and 2 by targeting and centering the <h5> tags
  - It only seemed fitting for a carpet website to have some carpet, so I adjusted the container class by assigning it to a div instead of the body in order to add the carpet background.


*/