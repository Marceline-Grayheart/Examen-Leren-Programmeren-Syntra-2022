const input = require('readline-sync');

const voorNaamRaw = input.question("Voornaam? ");
const achterNaamRaw = input.question("Achternaam? ");
const adresRaw = input.question("Straat en huisnummer? ");
const postCodeRaw = input.question("Postcode? ");
const gemeenteRaw = input.question("Gemeente? ");
const voorNaamAbbr = voorNaamRaw.substr(0,1).toUpperCase() + ".";
const volledigeNaam = voorNaamAbbr + " " + achterNaamRaw;
const gemeenteCap = gemeenteRaw.toUpperCase();
const volledigeGemeente = postCodeRaw + " " + gemeenteCap;
const voorNaamLengte = voorNaamRaw.length;
const achterNaamLengte = achterNaamRaw.length;
const volledigeNaamLengte = volledigeNaam.length;
const volledigeGemeenteLengte = volledigeGemeente.length; 
const adresLengte = adresRaw.length;
const postCodeLengte = postCodeRaw.length;
const gemeenteLengte = gemeenteRaw.length; 
const lengthCompArray = [volledigeNaamLengte, volledigeGemeenteLengte, adresLengte];
const sortedLengthComp = lengthCompArray.sort((a, b) => {
    return b-a
});
const composeDashes = []
for(let i = 0;i<sortedLengthComp[0];i++){
    composeDashes.push("-");
}
const composedDashes = composeDashes.join("");
const firstSpacing = []
for(let i = 0;i<(composedDashes.length-volledigeNaamLengte);i++){
    firstSpacing.push(" ");
}
const firstSpaced = firstSpacing.join("");
const secondSpacing = []
for(let i = 0;i<(composedDashes.length-adresLengte);i++){
    secondSpacing.push(" ");
}
const secondSpaced = secondSpacing.join("");
const thirdSpacing = []
for(let i = 0;i<(composedDashes.length-gemeenteLengte);i++){
    thirdSpacing.push(" ");
}
const thirdSpaced = thirdSpacing.join("")

if(voorNaamLengte === 0){
    console.log("Minstens één van de ingevulde velden is niet geldig.");
} else if(achterNaamLengte === 0){
    console.log("Minstens één van de ingevulde velden is niet geldig.");
} else if(adresLengte === 0){
    console.log("Minstens één van de ingevulde velden is niet geldig.");
} else if(postCodeLengte === 0){
    console.log("Minstens één van de ingevulde velden is niet geldig.");
} else if(gemeenteLengte === 0){
    console.log("Minstens één van de ingevulde velden is niet geldig.");
} else if(postCodeRaw < 1000){
    console.log("Minstens één van de ingevulde velden is niet geldig.");
} else if(postCodeRaw > 9000){
    console.log("Minstens één van de ingevulde velden is niet geldig.");
}else if(volledigeNaamLengte > 40){
    console.log("Kader is te breed. Gebruik afkortingen in de breedste stukken.");
} else if(adresLengte > 40){
    console.log("Kader is te breed. Gebruik afkortingen in de breedste stukken.");
} else if(volledigeGemeenteLengte > 40){
    console.log("Kader is te breed. Gebruik afkortingen in de breedste stukken.");
} else{
    console.log(
    `--${composedDashes}--
| ${volledigeNaam}${firstSpaced} |
| ${adresRaw}${secondSpaced} |
| ${volledigeGemeente}${thirdSpaced} |
--${composedDashes}--`);
}