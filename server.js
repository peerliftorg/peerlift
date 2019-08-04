
import path from 'path';
import express from 'express';
const PORT = process.env.HTTP_PORT || 4001;
const app = express();
app.use(express.static(path.join(__dirname, 'client', 'build')));

app.get('/', (req, res) => {
  res.send('just gonna send it');
});

app.listen(PORT, () => {
  console.log(`Server listening at port ${PORT}.`);
});