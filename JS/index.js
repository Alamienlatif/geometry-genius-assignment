// document.getElementById("triangle-btn")
// .addEventListener("click", function (){
//     const quantityBase = document.getElementById("btrianglequantity").value;
//     const quantity = document.getElementById("htrianglequantity").value;
//     const triangleTotal = quantityBase * quantity * 0.5;
//     // console.log(triangleTotal);
//   setInnerText("area",triangleTotal);
// });


// document.getElementById("rectangle-btn")
// .addEventListener("click", function (){
//     const quantityBase = document.getElementById("wrectanglequantity").value;
//     const quantity = document.getElementById("lrectanglequantity").value; 
//     const rectangleTotal = quantityBase * quantity;
//     // console.log(rectangleTotal);
//     setInnerText("area",rectangleTotal);
// });


//   function setInnerText(id, value) {
//     document.getElementById(id).innerText = value;
// }
// // 135--FarstFlor  FarstIn-- parallelogram & rhombus console a problem -------

document.getElementById("parallelogram-btn")
.addEventListener("click", function () {
  const quantityBase = document.getElementById("parallelogramquantityb").innerText;
  const quantity = document.getElementById("parallelogramquantityh").innerText;
  const parallelogramTotal = quantityBase * quantity;
  // console.log(parallelogramTotal);
  document.getElementById("area").innerText = parallelogramTotal;
});


// document.getElementById("rhombus-btn")
// .addEventListener("click", function (){
//   const quantityBase = document.getElementById("rhombus1").innerText;
//   const quantity = document.getElementById("rhombus2").innerText;
//  const rhombusTotal = quantityBase * quantity * 0.5;
// console.log(rhombusTotal);  
//   // document.getElementById("area").innerText = rhombusTotal;
// });


// document.getElementById("pentagon-btn")
// .addEventListener("click", function (){
//   const quantityBase = document.getElementById("pentagonp").innerText;
//   const quantity = document.getElementById("pentagonb").innerText;
//   const pentagonTotal = quantityBase * quantity;
//   console.log(pentagonTotal);
// })

// document.getElementById("ellipse-btn")
// .addEventListener("click", function (){
//   const quantityBase = document.getElementById("ellipse1").innerText;
//   const quantity = document.getElementById("ellipse2").innerText;
//   const ellipseTotal = quantityBase * quantity;
//   console.log(ellipseTotal);
// })

// function displayData(productName, productprice, productQuanteity, priceTotal)  {
//   const container = document.getElementById("table-container");
//  productNaem, productPrice, prodiutQuantiity, productiTotal

// const tr = document.createElement("tr");
//   tr.innerHTML = `
//   <td>${1}</td>
//   <td>${pro}</td>
//   <td>${}</td>
//   <td>${}</td>
//   <td>${}</td>
//   `;
//   container.appendChild(tr);
// }