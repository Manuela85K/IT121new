
  function translateToPigLatin(text) {
    if (text.length < 2) {
    return "Input can't be translated.";
  }
  
  const words = text.split(" ");
  let pigLatin = "";

  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    let firstLetter = word[0];
    let secondLetter = word[1];

    if (firstLetter === "a","e", "i", "o", "u") {
      pigLatin += word + "way ";
    } else if(secondLetter) {
      pigLatin += word.slice(1) + firstLetter + "ay ";
    } else {
      pigLatin += word.slice(2) + firstLetter + secondLetter + "ay ";
    }
  }
  pigLatin = pigLatin.slice(0, -1);
  return pigLatin;
}
console.log(translateToPigLatin("Manuela Hello"));
console.log(translateToPigLatin("America"))
console.log(translateToPigLatin("")); 
console.log(translateToPigLatin("L")); 


