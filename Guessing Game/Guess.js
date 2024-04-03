const max = prompt ("enter the max number");

const random = Math.floor(Math.random() * max) +1;

let guess = prompt ("guess the number");

while(true) {
    if (guess=="quit") {
        console.log("quitting the app");
        break;
    }

    if (guess==random) {
        console.log("you are guessing right! congrats!! random number is right", random);
        break;
    } else if(guess < random) {
        guess = prompt(" hint : your guess was too small. please try again");
       
    } else {
        guess = prompt(" hint : your guess was too to large. please try again");
    }

}
    
    
    
    
    