const express = require("express");
const app = express();
const port = process.env.port || 3000;
const divisions = require("./data/divisions.json");
const districts = require("./data/districts.json");
const upazilas = require("./data/upazilas.json");
const unions = require("./data/unions.json");

app.get("/", (req, res) => {
  res.send("Welcome to GEO Bangladesh Server!");
});
// -------------Bangla Route ----------------------
const routeBn = express.Router();
const routeEn = express.Router();
routeBn.get("/", (req, res) => {
  res.send("স্বাগতম!");
});

// --------------- English Route -----------------------

routeEn.get("/divisions", (req, res) => {
  res.send(divisions);
});
routeEn.get("/division/:name", async (req, res) => {
  const name = req.params.name;
  const divName = divisions.filter((div) => {
    return div.name.toLowerCase().includes(name.toLowerCase());
  });
  const details = districts.filter((item) => {
    return item.division_id === divName[0].id;
  });

  if (details) {
    res.status(201).send(details);
  } else {
    res.status(404).send("Division not found!");
  }
});
routeEn.get("/districts", (req, res) => {
  res.send(districts);
});
routeEn.get("/districts/:name", (req, res) => {
  const params = req.params.name.toLowerCase();
  const distName = districts.filter((dist) => {
    const currDist = dist.name.toLowerCase();
    return currDist.includes(params);
  });
  if (!distName.length) {
    return res.status(404).send("District not found!");
  }
  let details = upazilas.filter((item) => {
    return item.district_id === distName[0].id;
  });
  if (details) {
    res.status(201).send(details);
  } else {
    res.status(404).send("District not found!");
  }
});
routeEn.get("/upazilas", (req, res) => {
  res.send(upazilas);
});
routeEn.get("/upazilas/:name", (req, res) => {
  const params = req.params.name.toLowerCase();
  const upaName = upazilas.filter((upa) => {
    const currUpa = upa.name.toLowerCase();
    return currUpa.includes(params);
  });
  if (!upaName.length) {
    return res.status(404).send("Upazila not found!");
  }
  let details = unions.filter((item) => {
    return item.upazilla_id === upaName[0].id;
  });
  if (details) {
    res.status(201).send(details);
  } else {
    res.status(404).send("Upazila not found!");
  }
});
routeEn.get("/unions", (req, res) => {
  res.send(unions);
});

app.use("/api/v1/bn", routeBn);
app.use("/api/v1/en", routeEn);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
