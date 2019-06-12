function heyJude(){
    let verse = "Na na na na na na na, na na na na, hey Jude."
    return verse.repeat(10)
}

function prohibitedLanguage(string){
    
    const badNames = /ilovecandycorn|brusselssproutsarenumberone/;


    return string.search(/candycorn|brusselssprouts/)
}
