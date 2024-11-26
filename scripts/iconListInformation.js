/*



*/

console.log("\x1b[33m=================Start Process================\x1b[0m");
console.time("Process Time");

const fs = require("fs");
const path = require("path");
const iconsListType = require("../icons.json") || [];
const iconsListDetails = require("../iconsDetails.json") || [];
const { v4: uuidv4 } = require("uuid");

const iconsList = iconsListType.flatMap(({ type, icons }) => {
    return icons.map((icon) => {
        return {
            type,
            iconPath: icon,
            description: "",
            id: uuidv4(),
        };
    });
});

const unexistedIcons = iconsList.filter((icon) => {
    return !iconsListDetails.some(
        (detailsIcon) =>
            detailsIcon.iconPath.trim() === icon.iconPath.trim() && detailsIcon.type.trim() === icon.type.trim()
    );
});

if (unexistedIcons.length > 0) {
    iconsListDetails.unshift(...unexistedIcons);
} else {
    console.log("No new icons to add");
}

fs.writeFileSync(path.join(__dirname, "../iconsDetails.json"), JSON.stringify(iconsListDetails, null, 2));

console.log("\x1b[32m Icons list updated in iconsDetails.json\x1b[0m");

console.timeEnd("Process Time");
console.log("\x1b[33m=================End Process================\x1b[0m");
