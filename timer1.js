//Simple Timer Challenge Module 1 Week 4 from Lighthouse Labs Web Development Bootcamp
//implement an alarm clock/timer which will beep after a specified amount of time has passed. The user can specify an unlimited number of alarms using command line arguments

const timer1 = function() {
  let args = process.argv.slice(2);//start at index 2 to avoid the first two arguments which are the path to node and the path to the file
  
  if (args.length === 0) {//if no arguments are given in the command line
    console.log("No beeps scheduled - try again!");//print that no beeps were scheduled
  }
  for (let arg of args) {//for each argument in the command line
    if (arg > 0 && !isNaN(arg)) {//only accept positive numbers and confirm that the argument is a number
      setTimeout(() => {
        console.log(`beep at ${arg} seconds`)//print the time at which the beep will occur
        return process.stdout.write('\x07');//make the beep sound
      }, arg * 1000);
    }
  }
};
timer1();//call the function

//example usage: node timer1.js 10 3 5 15 9 which makes the beep at 3 seconds, 5 seconds, 9 seconds, 10 seconds, and 15 seconds
// to make the machine perform a system sound: process.stdout.write('\x07');