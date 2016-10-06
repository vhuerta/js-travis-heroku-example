import { default as express, Router } from 'express';
import math from './math';

let app = express();

app.get('/:param1/:param2', (req, res, next) => {
  let result = math.sum(req.params.param1, req.params.param2);
  res.json({ result });
});


app.listen(process.env.PORT || 3000, '0.0.0.0', () => {
  console.log(`App ready on port ${process.env.PORT || 3000}`);
});
