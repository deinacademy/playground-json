const path = require("path");
const fs = require("fs");

const toJSON = (objectToSave) => {
  try {
    const json = JSON.stringify(objectToSave, null, 4);
    const result = (err) => {
      if (err) throw err;
      console.log("The file has been saved!");
    };
    const fileName = path.join(__dirname, "../", "data/got.json");

    fs.writeFile(
      fileName,
      json,
      {
        encoding: "utf8",
        flag: "w",
      },
      result
    );
  } catch (error) {
    console.log("Error: ", error);
  }
};

module.exports = {
  toJSON,
};
