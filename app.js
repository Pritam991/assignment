require("dotenv").config();
const express = require("express");

const app = express();
const PORT = process.env.PORT || 5000;

// Fibonacci endpoint
app.get("/fibonacci/:n", (req, res) => {
  const n = parseInt(req.params.n);

  if (isNaN(n)) {
    res.status(400).send("Invalid input");
    return;
  }

  const fibonacci = [0, 1];

  for (let i = 2; i <= n; i++) {
    fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
  }

  res.send({
    result: fibonacci[n]
  });
});

// Factorial endpoint
app.get("/factorial/:n", (req, res) => {
  const n = parseInt(req.params.n, 10);

  if (isNaN(n)) {
    res.status(400).send("Invalid input");
    return;
  }

  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  res.json({
    factorial,
  });
});


// Prime number endpoint
app.get("/prime/:n", (req, res) => {
  const n = parseInt(req.params.n, 10);

  if (isNaN(n)) {
    res.status(400).send("Invalid input");
    return;
  }

  let isPrime = true;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }

  res.json({
    isPrime,
  });
});
app.listen(5000, () => {
  console.log("Server listening on port 5000");
});
