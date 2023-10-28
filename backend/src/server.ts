import compression from "compression";
import express from "express";
const app = express();
const port = 3000;

app.use(compression());
app.get('/', (req,res) => {
    res.send('Hello world')
})
app.get('/:id', (req,res) => {
    res.send(`Hello user number ${req.params.id}`)
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
