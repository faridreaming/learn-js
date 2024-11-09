import { readFile } from "fs";

readFile("./sample.txt", (error, data) => {
  if (error) {
    console.log(error);
    return;
  }

  const greeting = data
    .toString()
    .replace("%name%", "Farid")
    .replace("%your_name%", "Pumba");

  console.log(greeting);
});
