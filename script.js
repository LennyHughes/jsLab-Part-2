
function getDamage() {
    let val = Math.floor(Math.random() * 5) + 1; 
    return val;
  }
  
function startGame(){
    let response = prompt("Do you want to play?");
    let userName;

    if (['yes', 'Yes', 'YES', 'Yeah', 'yeah', 'y','Y'].indexOf(response) >= 0){
        userName = prompt("Great! What is your name?");
        return startCombat();
    }

    function startCombat(){
        let userHealth = 40;
        let grantHealth = 10;
        let userWins = 0;
        let winner; 
        let attack = "attack";

        while (userWins < 3 && userHealth > 0 ){

        if(attack === "attack") {   

        grantHealth = grantHealth - getDamage();
        userHealth = userHealth - getDamage();
        console.log(`${userName} has ${userHealth} health left.`);
        console.log(`Grant the Mighty Chicken has ${grantHealth} health left.`);
        } else {return;}

        if (grantHealth <= 0 && userHealth > 0){
            userWins++;

            if(userWins === 3){
                winner = userName;
                break;
            } else {
            console.log(`You have beaten Grant! You need to win ${3 - userWins} more round(s)`);
            attack = prompt("would you like to attack or quit?");
            grantHealth = 10;
            }
        } else if (grantHealth > 0 && userHealth <= 0) {
            winner = "Grant the Mighty Chicken";
            break;
        } else {winner = "No one";}
        }//end of while

        return winner;
    }//end of startCombat function 
}//end of startGame function



let champ = startGame();
if(champ !== undefined){
console.log(`Winner is ${champ}`);}