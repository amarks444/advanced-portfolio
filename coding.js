const counter = document.getElementById("counter");

let count = 0;

const target = 1000;

const speed = 2;

const updateCounter = () => {

    if(count < target){

        count += speed;

        counter.innerText = count + "+";

        requestAnimationFrame(updateCounter);

    }else{

        counter.innerText = "1000+";
    }
};

updateCounter();