// function calculateTriangleArea(){
//     //get triangle base
//     const baseField = document.getElementById('triangle-base');
//     const baseValueText = baseField.value;
//     const base = parseFloat(baseValueText);
  
//     //get triangle height
//     const triangField = document.getElementById('triangle-height');
//     const trianglevalueText = triangField.value;
//     const height = parseFloat(trianglevalueText);
    

//     const area = 0.5 *base *height;
   
//     //show triangle area
//    const areaSpan = document.getElementById('triangle-area');
//    areaSpan.innerText = area;

//    //add to calculation entry
//    addToCalculationEntry("Triangle", area)
 

// }

// function calculateRectangleArea(){
//     const width =document.getElementById('rectangle-width');
//     const widthValueText = width.value;
//     const  widthValue = parseFloat(widthValueText);
  
 
//     //rectangle lenght
//     const rectangleLength = document.getElementById('rectangle-height');
//     const rectangleLenghtText = rectangleLength.value;
//     const lenght = parseFloat(rectangleLenghtText);
    
//     //validate input: widht and length
//     if(isNaN(widthValue) || isNaN(lenght)){
//         alert('please insert a number');
//         return;
//     }

//     //calculate rectangle
//     const rectangleArea = widthValue * lenght;
//     //showarea
//     const rectangleSpan =document.getElementById('rectangle-area');
//     rectangleSpan.innerText = rectangleArea;

//        //add to calculation entry
//    addToCalculationEntry("Rectangle", rectangleArea)
// }






// ///////////////reusable function ---- with reduce code////////
// function calculateParallelogramArea(){
// const base = getInputValue('parallelogram-base');
// //console.log(base);

// const height = getInputValue('parallelogram-height');
// //console.log(height);
// if(isNaN(base) || isNaN(height)){
// alert("please inser a number");
// return;

// }
// const area = base * height;

// setElementInnerText("parallelogram-area", area);

// // add to calculation entry
// addToCalculationEntry("parallelogram", area)

// }

// // Ellipse
// function calculateEllipseArea(){
//     const major = getInputValue("ellipse-major-radius");
//     const minor = getInputValue("ellipse-minor-radius");

//     if(isNaN(major) || isNaN(minor)){
//         alert('please insert number');
//         return;
//     }
//     const calculateArea = 3.14 * major * minor;
//     const toFixedTwoNumber = calculateArea.toFixed(2);

//     setElementInnerText("ellipse-area", toFixedTwoNumber);

//        //add to calculation entry
//    addToCalculationEntry("Ellipse", toFixedTwoNumber)


// }












// // create function
// //reusable get input value field in number

// function getInputValue (fieldID){
//     const inputField = document.getElementById(fieldID);
//     const inputFieldText = inputField.value;
//     const inputValue =parseFloat(inputFieldText);
//     return inputValue;

// }
// //reusable set innertext span, p, div etc text;
// function setElementInnerText (elementID, area){
//     const element = document.getElementById(elementID);
//     element.innerText = area;
// }

// //add to calculatin entry
// /*
// 1. get the element where you want to add the dynamic HTML
// 2 . creat an element you want to add
// 3. if needed add some clss
// 4. set inner HTML. it could be dynamic Template string
// 5. appent the created element as a child of the parent
// */
// function addToCalculationEntry(areaType, area){
//  console.log(areaType+ " "+ area);
//  const calculationEntry =document.getElementById('calculation-entry');

//  const count = calculationEntry.childElementCount;
//  const p = document.createElement('p');
//  p.classList.add('my-4');
//  p.innerHTML = `${count + 1}. ${areaType} ${area} cm<sup>2</sup> <button class = "btn btn-sm btn-success">Convert</button>
//  `

//  calculationEntry.appendChild(p);
 
// }



//Data validation
/*
1. set the proper type of the input field. (number, data, email ) etc.
2.check type using typeof
4. Nan means : Not a number.    isNaN checking whether the input is not a number or not


*/