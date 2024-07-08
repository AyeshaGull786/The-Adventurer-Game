// "The Adventure Game"
;
var adventurer = {
    health: 100,
    gold: 50,
};
function takeStep(adventurer) {
    adventurer.health -= 10;
    if (adventurer.health <= 0) {
        console.log("Game Over! You Lost!");
        return adventurer;
    }
    if (adventurer.health % 50 === 0) {
        fightMonster(adventurer);
    }
    return adventurer;
}
function fightMonster(adventurer) {
    adventurer.health -= 20;
    adventurer.gold += 20;
    console.log("You fought a monster and won!");
    return adventurer;
}
for (var i = 0; i < 20; i++) {
    adventurer = takeStep(adventurer);
}
if (adventurer.health > 0) {
    console.log("Congratulations! You reached the treasure!");
}
console.log("Final Health: ".concat(adventurer.health));
console.log("Final gold: ".concat(adventurer.gold));
