// Code your solution here
function heyJude(n) {
  return n.repeat(16)
}

function prohibitedLanguage(w) {
  let bad_words  = /candycorn|brusselssprouts/
  return w.search(bad_words)
}
