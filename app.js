const express = require('express');
const app = express();




app.get("/", (req, res) => {
    res.sendFile(`${__dirname}/public/pag.html`);
  });

  app.get("/2", (req, res) => {
    res.sendFile(`${__dirname}/public/pg2.html`);
  });

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
