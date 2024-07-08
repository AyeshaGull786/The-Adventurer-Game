// "The Adventure Game"

// You are a brave adventurer seeking fortune and glory in a mystical land. You have a map that leads
//  to a hidden treasure, but the journey is treacherous and filled with obstacles.

// Create a program that simulates your journey, using the following rules:

// - You start with 100 health points and 50 gold coins.
// - Each step you take costs 10 health points.
// - You encounter a monster every 5 steps, which you must fight.
// - Fighting a monster costs 20 health points, but you gain 20 gold coins if you win.
// - If your health points fall to 0, the game ends, and you lose.
// - If you reach the treasure (20 steps away), you win!
interface Adventurer{
    health: number;
    gold: number;
};
let adventurer: Adventurer = {
    health: 100,
    gold: 50,
};
function takeStep (adventurer:Adventurer):Adventurer  {
    adventurer.health -= 10;
    if(adventurer.health <= 0){
        console.log("Game Over! You Lost!");
        return adventurer;
    }
    if (adventurer.health % 50===0){
        fightMonster(adventurer);
    }
    return adventurer;
}
function fightMonster(adventurer:Adventurer):Adventurer{
    adventurer.health -= 20;
    adventurer.gold += 20;
    console.log("You fought a monster and won!");
    return adventurer;
}
for(let i=0; i<20; i++){
    adventurer = takeStep(adventurer);
}
if(adventurer.health > 0){
    console.log("Congratulations! You reached the treasure!");
}
console.log(`Final Health: ${adventurer.health}` );
console.log(`Final gold: ${adventurer.gold}`);