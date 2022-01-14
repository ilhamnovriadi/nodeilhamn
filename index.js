const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

const kontakRouter = require("./routes/kontak");
const materiRouter = require("./routes/materi");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send(`<div>
    <h1>Selamat Datang di Belajar MERN</h1>
    <h3>Menu</h3>
    <ul>
    <li><a href='/materi'>/materi</a></li>
    <li><a href='/kontak'>/kontak</a></li>
    </ul>
    </div>`);
});

app.use("/kontak", kontakRouter);
app.use("/materi", materiRouter);

const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Berjalan di port ${port}`));
