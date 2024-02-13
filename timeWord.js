// timeword.js

function timeToWords(time) {
    // Define arrays for hours and minutes
    const hours = ["twelve", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve"];
    const minutes = ["oh", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven", "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen", "twenty", "twenty-one", "twenty-two", "twenty-three", "twenty-four", "twenty-five", "twenty-six", "twenty-seven", "twenty-eight", "twenty-nine", "thirty", "thirty-one", "thirty-two", "thirty-three", "thirty-four", "thirty-five", "thirty-six", "thirty-seven", "thirty-eight", "thirty-nine", "forty", "forty-one", "forty-two", "forty-three", "forty-four", "forty-five", "forty-six", "forty-seven", "forty-eight", "forty-nine", "fifty", "fifty-one", "fifty-two", "fifty-three", "fifty-four", "fifty-five", "fifty-six", "fifty-seven", "fifty-eight", "fifty-nine"];

    // Split the input time
    let [hour, minute] = time.split(":").map(num => parseInt(num, 10));
    let period = hour >= 12 ? "pm" : "am";
    hour = hour > 12 ? hour - 12 : hour;
    hour = hour === 0 ? 12 : hour;

    // Handle special cases
    if (time === "00:00") return "midnight";
    if (time === "12:00") return "noon";

    // Construct the time in words
    let hourWord = hours[hour];
    let minuteWord = minute > 0 ? (minute < 10 ? "oh " + minutes[minute] : minutes[minute]) : "";
    let conjunction = minute === 0 ? "o'clock" : minuteWord;

    return `${hourWord} ${conjunction} ${period}`.trim();
}

module.exports = timeToWords;
