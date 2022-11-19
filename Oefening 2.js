function Text(str){
    this.str = str;
}

Text.left = function(leftNum){
    return this.str.substr(0,leftNum);
}

Text.right = function(rightNum){
    return this.str.substr(-rightNum,rightNum);
}

Text.charCount = function(){
    return this.str.length
}

Text.wordCount = function(){
    strClean = this.str.replaceAll(" &","");
    const splitWords = strClean.split(' ')
    return splitWords.filter(woord => woord !== '').length;
}

Text.vowelCount = function(){
    return this.str.match(/[aeiou]/).length;
}

Text.capitalCount = function(){
    return (this.str.match(/[A-Z]/g)).length;
}

Text.append = function(string){
    return str.concat(string);
}

Text.prepend = function(string){
    return string.concat(str);
}