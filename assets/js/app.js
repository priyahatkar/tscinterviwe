const cl = console.log;


// const barcodeSvg = document.getElementById('barcode');
// JsBarcode(barcodeSvg, "Chinmay", {
//     format: "code128",
//     width: 2,
//     height: 100,
// });

// const barcodeCanvas = document.getElementById('barcodes');
// const barcode = new Barcode(barcodeCanvas, {
//     code: "Chinmay",
//     type: "code128",
//     width: 2,
//     height: 100,
// });
// barcode.render();

// const barcodeDiv = document.getElementById('barcods');
// const barcodeNumber = "Chinmay";
// for (let i = 0; i < barcodeNumber.length; i++) {
//     const digit = barcodeNumber[i];
//     const bar = document.createElement('span');
//     bar.style.width = '2px';
//     bar.style.height = '100px';
//     bar.style.display = 'inline-block';
//     bar.style.backgroundColor = i % 2 === 0 ? 'black' : 'white';
//     barcodeDiv.appendChild(bar);
// }

// JsBarcode("#barcode", "Chinmay", {
//     format: "pharmacode",
//     lineColor: "#000",
//     width: 4,
//     height: 40,
//     displayValue: false
// });

JsBarcode(".barcode").init();