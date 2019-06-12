// Code your solution here

function repeat(str, num) {
  return (new Array(num+1)).join(str);
}

function heyJude(str) {
  return repeat(str, 16);
}

function prohibitedLanguage(string) {
  let target = /candycorn|brusselssprouts/;
  return string.search(target);
}
