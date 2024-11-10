/*
script to generate icons list /icons.json file. 

run pnpm run buildList




*/

console.log("\x1b[33m=================Start Process================\x1b[0m");
console.time("Process Time");

const fs = require("fs");
const path = require("path");

const iconsDir = path.join(__dirname, "../public/icons");

console.log(`\x1b[32m Read directory ${iconsDir} \x1b[0m`);

const iconFiles = fs
    .readdirSync(iconsDir)
    .sort()
    .map((dir) => {
        const fullPath = path.join(iconsDir, dir);
        return {
            type: `${dir}`,
            icons: fs.readdirSync(fullPath).filter((file) => file.endsWith(".svg")),
        };
    });

if (iconFiles.length === 0) {
    console.log("\x1b[31mNo icons found\x1b[0m");
    console.timeEnd("Process Time");
    return;
}

fs.writeFileSync(path.join(__dirname, "../icons.json"), JSON.stringify(iconFiles, null, 2));

console.log("\x1b[32m Icons list generated in icons.json\x1b[0m");

console.timeEnd("Process Time");
console.log("\x1b[33m=================End Process================\x1b[0m");
