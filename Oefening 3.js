function Schilder(voornaam, achternaam, stijl){
    this.voornaam = voornaam;
    this.achternaam = achternaam;
    this.stijl = stijl;
    this.schilderijen = [];
}

function Schilderij(naam, canvasgrootte, kostprijs){
    this.naam = naam;
    this.canvasgrootte = canvasgrootte;
    this.kostprijs = kostprijs;
}

Schilder.prototype.addPainting = function(newName, newCanvas, newCost){
    this.schilderijen.push(new Schilderij(newName, newCanvas, newCost))
}

Schilder.prototype.removePainting = function(removalName){
    this.schilderijen = this.schilderijen.filter(function(){
        return this.naam != removalName;
    })
}

Schilder.prototype.getList = function(){
console.log(
`${this.voornaam} ${this.achternaam} / ${this.stijl}`)
for(let i=0; i<this.schilderijen.length; i++){
    const localizedPrice = this.prijs.toLocaleString("de-DE", {style:"currency", currency:"EUR"})
    console.log(
        `   - Naam: ${this.naam}
            - Canvas: ${this.canvasgrootte}
            - Prijs: ${localizedPrice}
            ------------------------------`)
    }
}

Schilder.prototype.getTotalWidth = function(){
    const widthCol = this.schilderijen.map(widthComb);
    function widthComb(){
        const widthIndex = this.naam.indexOf("x")
        const preX = this.naam.substring(0, widthIndex-1)
        const numberedWidth = Integer.parseInt(preX)
        return numberedWidth
    }
    const totalWidth = widthCol.reduce(function(acc, el){
        return acc+el
    },0)
    return totalWidth
}