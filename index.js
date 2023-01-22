
  function translateToPigLatin(text) {
    if (text.length < 2) {
    return "Input can't be translated.";
  }
  
  const words = text.split(" ");
  let pigLatin = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let letterOne = word[0];
    let letterTwo = word[1];

    if (letterOne = "a","e", "i", "o", "u") {
      pigLatin = word + "way ";
    } else if(!letterTwo) {
      pigLatin = word.slice(0,1) + letterOne + "ay ";
    } else {
      pigLatin = word.slice(-2) + letterOne + letterTwo + "ay ";
    }
  }
  pigLatin = pigLatin.slice(0, -1);
  return pigLatin;
}
console.log(translateToPigLatin("Lion Mane"));
console.log(translateToPigLatin("America"))
console.log(translateToPigLatin("")); 
console.log(translateToPigLatin("L")); 


