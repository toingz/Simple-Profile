

function gambarTitik(imageDataTemp, x, y, r, g, b) {
    let index;
    index = 4 * (x + (y * myCanvas.width));
    imageDataTemp.data[index + 0] = r;	// R
    imageDataTemp.data[index + 1] = g;	// G
    imageDataTemp.data[index + 2] = b;	// B
    imageDataTemp.data[index + 3] = 255;	// A
}


/* Menggambar Polygon */
function polygon(imageDataTemp, point_array, r,g,b) {
    let point = point_array[0];
    for(let i = 1; i < point_array.length; i++) {
        let point2 = point_array[i];
        dda(imageDataTemp, point.x, point.y, point2.x, point2.y, r,g,b);
        point = point2;
    }
    dda(imageDataTemp, point.x, point.y, point_array[0].x, point_array[0].y, r,g,b);
}


         /* Menggambar Garis dengan Algoritma DDA*/
         function dda(imageData, x1, y1, x2, y2, r, g, b) {
            let dx = x2 - x1;
            let dy = y2 - y1;
  
            if (Math.abs(dx) > Math.abs(dy)) {
              // Penambahan pada sumbu x
              let y = y1;
              if (x2 > x1) {
                // Bergerak ke kanan
                for (let x = x1; x < x2; x++) {
                  y = y + dy / Math.abs(dx); // 1/m
                  gambarTitik(imageData, Math.ceil(x), Math.ceil(y), r, g, b);
                }
              } else {
                // Bergerak ke kiri
                for (let x = x1; x > x2; x--) {
                  y = y + dy / Math.abs(dx); // 1/m
                  gambarTitik(imageData, Math.ceil(x), Math.ceil(y), r, g, b);
                }
              }
            } else {
              // Penambahan pada sumbu y
              let x = x1;
              if (y2 > y1) {
                // Bergerak ke kanan
                for (let y = y1; y < y2; y++) {
                  x = x + dx / Math.abs(dy); // m
                  gambarTitik(imageData, Math.ceil(x), Math.ceil(y), r, g, b);
                }
              } else {
                // Bergerak ke kiri
                for (let y = y1; y > y2; y--) {
                  x = x + dx / Math.abs(dy); // m
                  gambarTitik(imageData, Math.ceil(x), Math.ceil(y), r, g, b);
                }
              }
            }
          }

          /* Algoritma Bressenham */
          function Bressenham(imageDataTemp, x1, y1, x2, y2, r,g,b) {
              let dx = Math.abs(x2 - x1);
              let dy = Math.abs(y2 - y1);
              let d1 = 2 * dy;
              let d2 = 2 * (dy - dx);
              let p = 2 * dy - dx;
              let xEnd;

              if(x1 > x2) {
                x = x2;
                y = y2;
                xEnd = x1;
              } else {
                x = x1;
                y = y1;
                xEnd = x2;
              }
              gambarTitik(imageDataTemp, x,y, r,g,b);

              while(x < xEnd) {
                x++;
                if(p < 0) {
                  p = p + d1;
                } else {
                  if(y1 > y2) {
                    y--;
                  } else {
                    y++;
                    p = p + d2;
                  }
                }              
                gambarTitik(imageDataTemp, x,y, r,g,b);
              }
            }

            // Fungsi Lingkaran
          function lingkaran(imageDataTemp, xc, yc, radius, r, g, b) {
              for (let theta = 0; theta < Math.PI*2; theta += 0.01) {
                  x = xc + (radius * Math.cos(theta));
                  y = yc + (radius * Math.sin(theta));
                  gambarTitik(imageDataTemp, Math.ceil(x), Math.ceil(y), r, g, b);
                }
            } 

            // fungsi elipse
            function elips(imageDataTemp, xc, yc, radiusX, radiusY, r, g, b) {
                for (let theta = 0; theta < Math.PI*2; theta += 0.01) {
                    x = xc + radiusX* Math.cos(theta);
                    y = yc+ radiusY* Math.sin(theta);
                    gambarTitik(imageDataTemp, Math.ceil(x), Math.ceil(y), r, g, b);
                }
            }

            //Fill Area Menggunakan Flood Fill
            function floodFill(imageDataTemp, canvas, x0,y0, toFlood, color) 
            {let tumpukan= [];
              tumpukan.push({x : x0, y : y0});
              while(tumpukan.length> 0) 
              {var titikSkrg= tumpukan.shift();
                var indexSkrg= 4 * (titikSkrg.x+ titikSkrg.y* canvas.width);
                var r1 = imageDataTemp.data[indexSkrg+ 0];
                var g1 = imageDataTemp.data[indexSkrg+ 1];
                var b1 = imageDataTemp.data[indexSkrg+ 2];
                
                if((r1 == toFlood.r) && (g1 == toFlood.g) && (b1 == toFlood.b)) 
                {imageDataTemp.data[indexSkrg+ 0] = color.r;
                  imageDataTemp.data[indexSkrg+ 1] = color.g;
                  imageDataTemp.data[indexSkrg+ 2] = color.b;
                  imageDataTemp.data[indexSkrg+ 3] = 255;
                  
                  tumpukan.push({x:titikSkrg.x+1, y:titikSkrg.y});
                  tumpukan.push({x:titikSkrg.x-1, y:titikSkrg.y});
                  tumpukan.push({x:titikSkrg.x, y:titikSkrg.y+1});
                  tumpukan.push({x:titikSkrg.x, y:titikSkrg.y-1});
                }}}