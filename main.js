const R = require('ramda');
const fs = require('fs');
const readline = require('readline');

const filePath = 'connect-4.txt';
const content = fs.readFileSync(filePath, 'utf-8');

const create_matrix = R.pipe(
    R.split('\n'),
    R.map(R.pipe(R.split(','), R.splitEvery(6)))
);

const choose_random = (liste) => {
    return liste[Math.floor(Math.random() * liste.length)];
}

const displayRandom = R.pipe(
    R.init(),
    R.transpose(),
    R.reverse(),
    R.map(R.pipe(R.map(R.replace('b', ' ')), R.join(' | '), console.log))
);

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const board_list = create_matrix(content);
const board = choose_random(board_list);
const result = R.last(board)[0];
//console.log(result);
displayRandom(board);
rl.question('\nQuel sera le résultat du joueur X (win / loss / draw) ?\n\n', (input) => {
    if(input == result) console.log("\nBravo !");
    else console.log("\nNul !");
    rl.close();
});