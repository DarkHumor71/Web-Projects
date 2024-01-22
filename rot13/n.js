const x=26;
function rot13(str) {
    let res="";
    let arr=str.split('');
    arr.forEach(element => {
        
        if(element.match(/[a-zA-Z]/)){
            let asc=element.charCodeAt(0);
            console.log(asc);
                if((asc <= 90 && asc >= 65)){
                    for(let i=1; i<14; i++){
                        if (asc>=90) {
                            asc-=26;
                        }
                        asc++;
                    }
                    res+=String.fromCharCode(asc);
                }
                else if((asc<=122 &&asc>=97)){
                    for(let i=1; i<14; i++){
                        if (asc>90) {
                            asc-=26;
                        }
                        asc++;
                    }
                    res+=String.fromCharCode(asc);
                }
            
            
        }else{
            res+=element;
        }
    });
    return res;

}

let q=rot13("SERR PBQR PNZC");
console.log(q);