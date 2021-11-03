const express = require("express");
const chirpsstore = require("../chirpstore");
let router = express.Router();

router.get("/:id?", (req, res) => {
  let id = req.params.id;
  if (id) {
    res.send(chirpsstore.GetChirp(id));
  } else {
    const chirps = chirpsstore.GetChirps();
    // delete chirps.nextid;
    const tempArr = Object.entries(chirps);
    const chirpArr = tempArr.map((chirp) => {
      const newChirp = {
        id: chirp[0],
        user: chirp[1].user,
        text: chirp[1].text,
      };
      return newChirp;
    });
    // chirpArr.reverse();
    res.json(chirpArr)
  }
});

router.post("/", (req, res) => {
  res.send(chirpsstore.CreateChirp(req.body));
});

router.put("/:id", (req, res) => {
  const id = req.params.id;
  const chirp = req.body;
  res.send(chirpsstore.UpdateChirp(id, chirp));
});

router.delete("/:id", (req, res) => {
  const id = req.params.id;
  res.send(chirpsstore.DeleteChirp(id));
});

module.exports = router;
