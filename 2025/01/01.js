import fs from "fs/promises";

const input = await fs.readFile('./input.txt', 'utf8');
const data = input.trim().split("\n");

function partOne(rotations) {
    const START = 50;
    const MAX = 100;
    let current = START;
    let counter = 0;

    rotations.forEach((rotation) => {
        const dir = rotation.slice(0, 1);
        const value = Number(rotation.slice(1));

        if (dir === "L") {
            current = (current - value + MAX) % MAX;
        } else if (dir === "R") {
            current = (current + value) % MAX;
        }

        if (current === 0) {
            counter += 1;
        }
    });

    return counter;
};

console.log(partOne(data));

function partTwo(rotations) {
    const START = 50;
    const MAX = 100;
    let current = START;
    let counter = 0;

    rotations.forEach((rotation) => {
        const dir = rotation.slice(0, 1);
        const value = Number(rotation.slice(1));

        for (let i = 0; i < value; i++) {
            current = dir === "L"
                ? (current - 1 + MAX) % MAX
                : (current + 1) % MAX;

            if (current === 0) {
                counter += 1;
            }
        }
    })

    return counter;
};

console.log(partTwo(data));
