// Code your solution here
function repeat(str, num) {
	return (new Array(num + 1)).join(str)
}

function heyJude() {
	return repeat("Na na na na na na na, na na na na, hey Jude.", 16)
}

function prohibitedLanguage(str) {
	let banned = /candycorn|brusselssprouts/
	return str.search(banned)
}