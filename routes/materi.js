const express = require("express");
const router = express.Router();
const DATA = require("../materi.json");

const renderMateri = (data) => {
  let render = `<div>`;
  let close = `</div>`;
  for (let i = 0; i < DATA.length; i++) {
    const row = `<div><h3>${data[i].materi}</h3><p>${data[i].content}</p></div>`;
    render += row;
  }
  return render + close;
};
router.get("/", (req, res) => {
  res.send(
    `<div>
      <a href="/"><- Kembali</a>
      <h1>Kurikulum MERN</h1>
     ${renderMateri(DATA)}
    </div>`
  );
});

module.exports = router;
