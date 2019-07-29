//Changes the size of images and text without refreshing the page.
function ElementSizeChanger(elementClass, inputId, sizeLimit = [0, 600]){
	let elementsToChange = document.getElementsByClassName(elementClass);
	let size = document.getElementById(inputId).value;
	let lowerLimit = sizeLimit[0];
	let upperLimit = sizeLimit[1];
	let imageUnit = "px";
	let textUnit = "pt";

	
	//Restricts image upper limit size to sizeLimit[1]
	if(size > upperLimit){
		size = document.getElementById(inputId).value = upperLimit;
	}
	//Restricts image lower limit size to sizeLimit[0]
	else if(size < lowerLimit){
		size = document.getElementById(inputId).value = lowerLimit;
	}
	
	for(let i = 0; i < elementsToChange.length; i++){
		//console.log(elementsToChange[i]);
		
		//This changes all images in a div if you are using the divs as frames. Div > imgs
		if(elementsToChange[i].tagName.toLowerCase() == "div"){
			if(elementsToChange[i].children[0].tagName.toLowerCase() === "img"){
				let innerElementsToChange = elementsToChange[i].getElementsByTagName("img");
				
				for(let j = 0; j < innerElementsToChange.length; j++){
					elementsToChange[i].style.width = size + imageUnit;
					elementsToChange[i].style.height = size + imageUnit;
					elementsToChange[i].style.lineHeight = size + imageUnit;
					elementsToChange[i].style.margin = "20 " + imageUnit + (size*.2) + imageUnit;
					innerElementsToChange[j].style.width = size + imageUnit;
					innerElementsToChange[j].style.height = "auto";
				}
			}
			//This changes all p tags in a div
			else if(elementsToChange[i].children[0].tagName.toLowerCase() === "p"){
				let innerElementsToChange = elementsToChange[i].getElementsByTagName("p");
				
				for(let j = 0; j < innerElementsToChange.length; j++){
					innerElementsToChange[j].style.fontSize = size + textUnit;
				}
			}
		}
		//This will change the image only
		else if(elementsToChange[i].tagName.toLowerCase() == "img"){
			elementsToChange[i].style.width = size + imageUnit;
			elementsToChange[i].style.height = "auto";
		}
		//This will change all p tags on the page
		else if(elementsToChange[i].tagName.toLowerCase() == "p"){
			elementsToChange[i].style.fontSize = size + textUnit;
		}
	}
}