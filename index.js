// Code your solution here

function heyJude() {
  return "Na na na na na na na, na na na na, hey Jude.".repeat(16);
}

function prohibitedLanguage(str) {
  const myWords = /candycorn|brusselssprouts/;
  return str.search(myWords);
}
