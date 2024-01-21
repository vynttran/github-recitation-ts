// Endpoint for querying the fibonacci numbers

import { Request, Response } from 'express';
import fibonacci from "./fib";

export default (req: Request, res: Response) => {
  const numStr = req.params.num;
  if (typeof numStr !== 'string') {
    res.status(400).send('Invalid input');
    return;
  }
  
  const num = parseInt(numStr, 10);
  if (isNaN(num)) {
    res.status(400).send('Input must be a number');
    return;
  }

  const fibN = fibonacci(num);
  let result = `fibonacci(${num}) is ${fibN}`;

  if (fibN < 0) {
    result = `fibonacci(${num}) is undefined`;
  }

  res.send(result);
};
