// Code your solution here

function heyJude() {
  return "Na na na na na na na, na na na na, hey Jude.".repeat(16)
}

function prohibitedLanguage(words) {
  let banned_words = /candycorn|brusselssprouts/
  return words.search(banned_words)
}
