//Get Date First
const countDown = new Date("Aug 15, 2021 16:55:25").getTime();
// console.log(countDown);

//Set Interval Time To Time
const setTimeDisplay = setInterval(() => {
    
    //Todays Date all time
    const nowTime = new Date().getTime();
    // console.log(nowTime);

    //Distance Bw NowTime and Count
    const distance = countDown - nowTime;

    //Now Show All The Data on the screen
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    document.getElementById("days").textContent  = days;

    const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    document.getElementById("hours").textContent = hours;


    const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
    document.getElementById("minutes").textContent = minutes;

    const seconds = Math.floor(distance % (1000 * 60) / 1000);
    document.getElementById("seconds").textContent = seconds;


}, 1000);