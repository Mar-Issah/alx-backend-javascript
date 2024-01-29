process.stdin.setEncoding('utf8');

console.log('Welcome to Holberton School, what is your name?');

process.stdin.on('data', (input) => {
  const name = input.trim();

  if (name.length > 0) {
    console.log(`Your name is: ${input}`);
    process.exit();
  }
});

process.stdin.on('exit', () => {
  process.stdout.write('This important software is now closing\n');
});
