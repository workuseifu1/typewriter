const sentence = "hello there from lighthouse labs";

for (let i = 0; i < sentence.length; i++) {
  let speed = 50 * i;
  if (i !== sentence.length - 1) {
    setTimeout(() => {
      process.stdout.write(sentence[i]);
    }, speed);
  } else if (i === sentence.length - 1) {
    setTimeout(() => {
      process.stdout.write(sentence[i] + "\n");
    }, speed);
  }
}