function EsPrimo(n) {
    let c = 0, p = false;
        for(let i=1;i<=n;i++){
            if(n % i == 0){
                c++
            }
        }
        if(c == 2){
            p = true;
        }
    return p;
}

function EsNumPresidenta(n){
    let ns = n.split(" "), v = "", ar = "", s = 0, I = 0;
    let a = parseInt(ns[0]), b = parseInt(ns[1]);
    for(let i=a;i<=b;i++){
        I = 0;
        s = 0;
        v = "";
        v += i;
        if(EsPrimo(i)){
            I += 1;
        for(let ib=0;ib<v.length;ib++){
            s += parseInt(v.charAt(ib));
        }
        if(EsPrimo(s)){
            I += 1;
        }
        }
        if(I == 2){
            ar = ar + i + " ";
        }
    }
    return ar;
}