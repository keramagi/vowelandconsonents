function vowelsAndConsonants(s) {
    let s1 = s.length;

    for (let i = 0; i <= s1; i++){
        if(s[i] == "a" || s[i] == "e" || s[i] == "i" || s[i] == "o" || s[i] == "i"){
            console.log(s[i])
        }
    }
    for(let j=0; j<= s1; j++){
         if(s[j] == "a" || s[j] == "e" || s[j] == "i" || s[j] == "o" || s[j] == "i"){
            // do nothing
        }
        else{
            console.log(s[j])
        }
    }
}


function main() {
    const s = readLine();
    
    vowelsAndConsonants(s);
}