//Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var name="\t\n Zoha Nafees \n\t"
console.log("Name with white space:'" + name + "'")
var strippedName=name.trim()
console.log("Name without white space:'"+strippedName+"'")