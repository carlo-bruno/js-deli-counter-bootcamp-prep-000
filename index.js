function takeANumber(line, name) {
  line.push(name);
  return `Welcome, ${name}. You are number ${line.indexOf(name) +1} in line.`;
}

function nowServing(line) {
  if (line.length === 0) return "There is nobody waiting to be served!";
  else {
    return `Currently serving ${line[0]}`;
  }
  line.
}