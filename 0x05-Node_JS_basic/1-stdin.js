process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('readable', () => {
  const name = process.stdin.read();

  if (name.length > 0) {
    process.stdout.write(`Your name is: ${name}`);
    process.exit();
  }
});

process.stdin.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
