const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send(
    `<div>
      <a href="/"><- Kembali</a>
      <h1>Hubungi Kami</h1>
      <p>Ilham Novriadi - 0812 5178 2913</p>
      <p>Instagram : Ilham Novriadi</p>
      <p>Linkedin : Ilham Novriadi</p>
    </div>`
  );
});

module.exports = router;
