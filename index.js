import { createRequireFromPath } from "module";

// Code your solution here

function heyJude(verse) {
    return verse.repeat(16);
}

function prohibitedLanguage(string) {

    let myRegExp = /candycorn|brusselssprouts/
    return string.search(myRegExp)
}
