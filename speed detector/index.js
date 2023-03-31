var speed = parseInt(prompt("please enter speed, '-1' to stop"))
const speedLimit = 70;
const kmPerDemerit = 5;
let demeritPoint = 0;

if (speed <= speedLimit) {
    alert("speed limit is ok");
}else{
    demeritPoint = Math.floor(kmOverlimit/ kmPerDemerit);
    console.log("points:" + demeritPoint);
    if (demeritPoint > 12){
        console.log("You have exceeded the limit. Your demerit points:" + demeritPoint);
    }
    }
