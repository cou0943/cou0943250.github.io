alert("You are home alone one night and super bored you can go out to a friend's house, but do you really want to? ");
let Home_or_friend_house = prompt("choice 1: Go to friend's house choice 2: stay home.")

if(Home_or_friend_house == 1 ) {
    let knock_or_dorbell = prompt("You get to your friend's house, will you knock on the door or ring the doorbell? Choice 1:Ring The Doorbell, Choice 2: Knock.");
    if(knock_or_dorbell==1){
        alert("Someone comes to the door and lets you in, you have a great night with your friends and go home afterwards and get a great night of sleep. End.");
   } else{
    alert("Nobody hears you knock over the loud music inside, you get nervous and go home and sleep. End");
}
}

 if(Home_or_friend_house == 2){
    let TV_or_games = prompt("Yeah you're really tired, you should rest, but what are you gonna do? Choice 1: watch TV Choice 2: play video games");
   if(TV_or_games ==1){
        alert(" you fall asleep on the couch after watching several episodes of your favorite show, what a good night at home. End.");

    } else {

     alert("You play video games for hours, then look at the clock and it's... 7AM! where did the time go? you trudge through your day and go to bed early. End ");
    }
}
