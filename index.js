/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

  // Reference: https://www.cluemediator.com/convert-a-12-hour-format-to-24-hour-format-using-javascript
// const convertTime12to24 = time12h => {
//   const [time, modifier] = time12h.split(" ");

//   let [hours, minutes] = time.split(":");

//   if (hours.lenght === 1) {
//     hours = "0" + hours;
//   }

//   if (modifier.toUpperCase === "PM") {
//     hours = parseInt(hours, 10) + 12;
//   }
//   return `${hours}:${minutes}`;
// }
// const convertedTime = convertTime12to24();

/* Write your implementation of greet() */

// The only issue was the "1:00 - 9:00" that was beign recognized as evening  instead of morning. Couldn't convert it to HH:MM
// function greet(convertedTime) {

//   if (convertedTime < "12") {
//     return "Good Morning";
//   }

//   if (convertedTime >= "12" && convertedTime < "17") {
//     return "Good Afternoon";
//   }

//   if (convertedTime >= "17" && convertedTime < "24") {
//     return "Good Evening";
//   }
// }

function greet(convertTime12to24) {
  const hours = parseInt(convertTime12to24, 10);
  if (hours < 12) return "Good Morning";
  if (hours >= 12 && hours < 17) return "Good Afternoon";
  if (hours >= 17 && hours < 24) return "Good Evening";
  if (hours >= 24) return "Invalid time. Try again!"
}

/* Write your implementation of displayMessage() */
function displayMessage(greeting) {
  document.querySelector('h1').innerHTML = greeting;
}