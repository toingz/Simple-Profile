function translasi(titikLama, T){
    let x_baru = titikLama.x + T.x;
    let y_baru = titikLama.y + T.y;

    return {x:x_baru, y:y_baru};
}

function rotasi(titikLama, theta){
    let x_baru = titikLama.x * Math.cos(theta) - titikLama.y * Math.sin(theta);
    let y_baru = titikLama.y * Math.cos(theta) + titikLama.x * Math.sin(theta);

    return{x:x_baru , y:y_baru}

}
function skala(titikLama, S){
        let x_baru = titikLama.x * S.x;
        let y_baru = titikLama.y * S.y

        return{ x:x_baru , y:y_baru};
    }
 
function rotasiTitikCustom(titikLama, tPusat, theta){
    let rot1 = translasi(titikLama, {x: - tPusat.x, y: -tPusat.y});
    let rot2 = rotasi(rot1,theta);
    let rot3 = translasi(rot2, tPusat);

    return rot3;
}

function skalaTitikCustom(titikLama,tPusat,S){
    let rot1 = translasi(titikLama, {x: - tPusat.x, y: -tPusat.y});
    let rot2 =  skala(rot1,S);
    let rot3 = translasi(rot2, tPusat);

    return rot3;
}

function translasiArray(arrayTitik, T){
    let arrayHasil = [];
    for(let i=0; i<arrayTitik.length; i++) {
     let temp = translasi(arrayTitik[i], T);
     arrayHasil.push(temp);
    }
     return arrayHasil;
 }

 function skalaArray(arrayTitik, titikPusat, S){
    let arrayHasil = [];
    for(let i=0; i<arrayTitik.length; i++) {
     let temp = skalaTitikCustom(arrayTitik[i], titikPusat, S);
     arrayHasil.push(temp);
    }
     return arrayHasil;
 }
function rotasiArray(arrayTitik, titikPusat, sudut){
    let arrayHasil = [];
    for(let i=0; i<arrayTitik.length; i++) {
     let temp = rotasiTitikCustom(arrayTitik[i], titikPusat, sudut);
     arrayHasil.push(temp);
    }
     return arrayHasil;
 }