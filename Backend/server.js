require("dotenv").config();
const app = require("./src/app");
const connectDB = require("./db/db");

const port = 3000;

connectDB();

app.listen(port, () => {
  console.log(`Server is running at port ${port}`);
});
