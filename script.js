init();

function init(){
	//alert("Hey!");
	displayData();
	//Check if it is a new week compared to info stored in localstorage
	if(new Date.now() >= new Date(localstorage.getItem('expire')).getTime()){
		fetchData();
	}
}

//Localstorage setup: expire (the date when it needs to be updated), updated (when it was last updated), data (pure info in JSON object)

function fetchData(){
	//Fetch request

	//Parse DOM tree and construct JSON object

	//Save to localstorage

	//Update expire for next sunday/monday 00:00 and set updated date

	//displayData
}

function displayData(){
	//Does data exist yet? Display loading.

	//Get the data for the current date

	//No data? Display other text

	//Display the recipes for today
}