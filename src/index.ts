import express from "express";

const app = express();
const port = 3000;

app.get("/", (req: any, res: any) => {
  res.send("Hello, this is FileFlow Upload Service!!");
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
