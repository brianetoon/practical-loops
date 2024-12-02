// Part 3 - Feeling Loopy
// Team - Toon, Priyanka, Hunter, Mohammed


// Objectives
// - Store each cell of dataa in a variable
// - when you encounter a comma, moce to the next cell
// - when you encounter \n move to the next row
// - log each row of data

// const mainString = `Index,Mass (kg),Spring 1 (m),Spring 2 (m)\n1,0.00,0.050,0.050\n2,0.49,0.066,0.066\n3,0.98,0.087,0.080\n4,1.47,0.116,0.108\n5,1.96,0.142,0.138\n6,2.45,0.166,0.158\n7,2.94,0.193,0.174\n8,3.43,0.204,0.192\n9,3.92,0.226,0.205\n10,4.41,0.238,0.232`;
const mainString = `ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26`;


let tempRow = "";
let cellArray = [];


for (let i = 0; i < mainString.length; i++) {

  if (mainString[i] !== "\n") {
    tempRow += mainString[i];

  } else {
      tempRow += ","
      let tempString = "";

    for (let y = 0; y < tempRow.length; y++) {
      if (tempRow[y] !== ",") {
        tempString += tempRow[y];
      } else {
        cellArray.push(tempString);
        tempString = "";
      }
    }

    console.log(cellArray);
    cellArray = [];
    tempRow = "";
  }
}
