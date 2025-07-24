//your JS code here. If required.
function levelFinder(){
	let currentElement = document.getElementById("level")
	let count = 0

	while(currentElement != null){
		currentElement = currentElement.parentElement
		count++
	}

	alert(`The level of the element is: ${count}`)
}
levelFinder()