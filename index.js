// Code your solution here

function heyJude(na) {
  return na.repeat(16);
}

function prohibitedLanguage(str) {
  const myWords = /candycorn|brusselssprouts/;
  return str.search(myWords);
}
