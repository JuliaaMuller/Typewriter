let time = 0

const sentence = "hello from the other side";
for (const char of sentence) {
  setTimeout(() => {
    process.stdout.write(char);
  }, time);
  time += 50; 
};
  setTimeout(() => {
  console.log("");
  }, time);




