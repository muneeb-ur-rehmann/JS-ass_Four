// ***** 14-16 ***** \\

// Question # 1 

// var name = [];
// console.log(name)

// Question # 2

// var jsObject = new Array('Muneeb ur Rehman')
// console.log(jsObject)

// Question # 3

// var arr = ['string']
// console.log(arr)

// Question # 4

// var arr = [23]
// console.log(arr)

// Question # 5

// var arr = [true]
// console.log(arr)

// Question # 6

// var arr = [true, 'string', 23, null, undefined, ]
// console.log(arr)

// Question # 7

// var faculty1 = ['SSC' + "<br>"]
// var faculty2 = ['HSC' + "<br>"]
// var faculty3 = ['BCS' + "<br>"]
// var faculty3 = ['BS' + "<br>"]
// var faculty4 = ['BCOM' + "<br>"]
// var faculty5 = ['MS' + "<br>"]
// var faculty6 = ['PhD' + "<br>"]
// var faculty7 = ['M.Phil' + "<br>"]
// document.write("<h1>" + "QUALIFICATION" + "</h1>")
// document.write(faculty1)
// document.write(faculty2)
// document.write(faculty3)
// document.write(faculty4)
// document.write(faculty5)
// document.write(faculty6)
// document.write(faculty7)

// Question # 8

// var stdName = ['Muneeb', 'umer', 'naveed']
// var obtMarks = [489, 467, 426]
// document.write("Score of " + stdName[0] + " is ", obtMarks[0] + " Percentage " + obtMarks[0] / 500 * 100 + "%" + "<br>")
// document.write("Score of " + stdName[1] + " is ", obtMarks[1] + " Percentage " + obtMarks[1] / 500 * 100 + "%" + "<br>")
// document.write("Score of " + stdName[2] + " is ", obtMarks[2] + " Percentage " + obtMarks[2] / 500 * 100 + "%")

// Question # 9

// var colorName =prompt("Enter your color:")
// var inColor = prompt("Enter Your Color:")
// var colorName = ['Red', 'Green', 'blue', 'white', 'black', 'orange', 'yellow' + "<br>"]

// Adding color in beginning

// colorName.unshift(inColor)
// document.write(colorName)

// Adding color in End

// colorName.push(inColor)
// document.write(colorName)

// Adding two color in beginning & prompt will not use

// colorName.unshift("Grey", "Purple")
// document.write(colorName)

// Delete first color 

// delete colorName[0]
// document.write(colorName)

// Delete last color

// colorName.pop()
// document.write(colorName)

// Add a color 

// colorName.splice(1, 4)
// document.write(colorName)


// INCOMPLETE

// Question # 10

// var num = [234, 546, 67, 125, 786]
// document.write(num + "<br>")
// num.sort()
// document.write(num)

// Question # 11


// document.write("<h1>" + "Cities Name" + "</h1>")
// var city = ['Quetta', 'Lahore', 'Karachi', 'Islamabad', 'peshawar']
// document.write(city + "<br>")
// var selectedCities = city.splice(1, 3)
// document.write(selectedCities)

// Question # 12

// var arr = ["This", "is", "my", "cat"];
// let a = arr.join(" ")
// document.write(a)

// Question # 13

// var item = ['Keyboard', 'Mouse', 'Moniter']
// document.write("<h1>" + "Devices" + "</h1>")
// document.write(item[0] + "<br>")
// document.write(item[1] + "<br>")
// document.write(item[2] + "<br>")

// Question # 14

// var item = ['Keyboard', 'Mouse', 'Moniter']
// document.write(item + "<br>")
// item[0] = [item[2], item[2] = item[0]][0]
// document.write(item)

// Question # 15

// var company = ['nokia', 'sony', 'motorola', 'samsung', 'apple', 'hair']
// document.write("<select>" + "<option>" + company[0] + "</option>" + "<br>" +
//     "<option>" + company[1] + "</option>" + "<br>" +
//     "<option>" + company[2] + "</option>" + "<br>" +
//     "<option>" + company[3] + "</option>" + "<br>" +
//     "<option>" + company[4] + "</option>" + "<br>" +
//     "<option>" + company[5] + "</option>" + "</select>")