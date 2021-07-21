function matrixIdentitas() {
    let identitas = [
[1,0,0],
[0,1,0],
[0,0,1]
];
return identitas;
}

function perkalianMatriks(m1 , m2){
    let hasil = [
        [0,0,0],
        [0,0,0],
        [0,0,0]
    ];

    for(let i=0;i<3;i++){
        for(j=0;j<3;j++){
            for(k=0;k<3;k++){
                // hasil[i][k] = hasil [i][k] + m1[i][j] * m2[j][k];
                hasil[i][k] += m1[i][j] * m2[j][k];
            }
        }
    }
    return hasil;
}

function translasiKomposit(dx,dy){
    let translasi = [
        [1,0,dx],
        [0,1,dy],
        [0,0,1]
    ];
    return translasi;
}

function skalaKomposit(mx,my){
    let skala = [
        [mx,0,0],
        [0,my,0],
        [0,0,1]
    ];
    return skala;
}

function rotasiKomposit(t){
    let rotasi = [
        [Math.cos(t), -Math.sin(t), 0],
        [Math.sin(t), Math.cos(t), 0],
        [0,0,1]
    ];
    return rotasi;
}

function rotasiFP(xc,yc,t){
    let m1 = translasiKomposit(-xc, -yc);
    let m2 = rotasiKomposit(t);
    let m3 = translasiKomposit(xc,yc);

    let hasil;
    hasil = perkalianMatriks(m3,m2);
    hasil = perkalianMatriks(hasil,m1);

    return hasil;
}

function skalaFP(xc,yc,mx,my){
    let m1 = translasiKomposit(-xc, -yc);
    let m2 = skalaKomposit(mx,my)
    let m3 = translasiKomposit(xc,yc);

    let hasil;
    hasil = perkalianMatriks(m3,m2);
    hasil = perkalianMatriks(hasil,m1);

    return hasil;
}

function transformasiTitik(titikLama,m){
    let xBaru = (m[0][0] * titikLama.x) + (m[0][1] * titikLama.y) + (m[0][2] * 1);
    let yBaru = (m[1][0] * titikLama.x) + (m[1][1] * titikLama.y) + (m[1][2] * 1);

    return {x: xBaru, y:yBaru};
}

function transformasiArray(arrayTitik,m){
    let hasil = [];
    for(let i=0;i<arrayTitik.length;i++){
        let titikHasil = transformasiTitik(arrayTitik[i],m)
        hasil.push(titikHasil);
    }
    return hasil;
}