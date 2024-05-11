const divisions = require("./data/divisions.json");

const modifiedDivisions = divisions[3].data.map((item) => {
  item.images = [];
});
