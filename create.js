const { Mini } = require("./models");

Mini.create({
  username: "Faris",
  password: "asd",
  approved: true,
}).then((article) => {
  console.log(article);
});
