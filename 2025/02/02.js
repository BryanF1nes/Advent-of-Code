import fs from "fs/promises";

const input = await fs.readFile('./sample.txt', 'utf8');

console.log(input);
