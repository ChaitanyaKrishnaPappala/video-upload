require("dotenv").config();
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes";

const app = new express(); //eslint-disable-line

interface test {
  name: string;
}

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET,POST,OPTIONS,PUT,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  res.header("Access-Control-Expose-Headers", "Authorization");
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }
  next();
});

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors()); // it enables all cors requests
app.use("/", routes);

app.listen(3001, (err) => {
  if (!err) console.log(`Server Running on port ${3001}`); //eslint-disable-line
  else console.log(err); //eslint-disable-line
});
