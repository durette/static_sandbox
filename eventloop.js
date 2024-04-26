'use strict'
document.write('Hello, World!')
const table = document.getElementById("myTable")


const tableRows = [];
const callbackFunction = [];
for (let i=0; i<10; ++i) {
	tableRows[i] = table.insertRow(-1)
	const tableColumns = [];
	for (let j=0; j<10; ++j) {
		tableColumns[j] = tableRows[i].insertCell(-1)
		tableColumns[j].innerHTML = 'ROW ' + i + ' COLUMN ' + j
		//console.log(tableColumns[j])
		callbackFunction[i*j] = (j) => {tableColumns[j].bgColor = '#FFFF00'}
	}
}


let callbackFunction2 = () => {callbackFunction[3](8)}


setTimeout(callbackFunction2, 1000)

for (let i=0; i<10; ++i) {
}
