const express = require(`express`);
const bodyParser = require(`body-parser`);
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post(`/bfhl`, (req, res) => {
  try {
    const { data } = req.body;
    const user = {
      user_id: "john_doe_17091999",
      email: `john@xyz.com`,
      roll_number: "ABCD123",
    };

    const even = data.filter((nums) => parseInt(nums) % 2 === 0);
    const odd = data.filter((nums) => parseInt(nums) % 2 !== 0);
    const uppercase = data.map((Char) =>
      isNaN(Char) ? Char.toUpperCase() : Char,
    );

    const response = {
      is_success: true,
      user_id: user.user_id,
      email: user.email,
      roll_number: user.roll_number,
      odd,
      even,
      alphabets: uppercase,
    };
    res.send(response);
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal server error");
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
