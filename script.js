init();

//console.log(container);
function init(){
	//alert("Hey!");
	var container = document.querySelector("#container");
	displayData();
	//Check if it is a new week compared to info stored in localstorage
	if(new Date() >= new Date(window.localStorage.getItem('expire')).getTime()){
		fetchData();
	}
}

//Localstorage setup: expire (the date when it needs to be updated), updated (when it was last updated), data (pure info in JSON object)

function decodeMenu(html){
	/*
		!IMPORTANT!
		This piece of the code will make you throw up. Do not under any circumstance do this. Except this once. Forgive me for my sins.
		Decoding the HTML table with hardcoded keywords and RegEx. It works, but it's not pretty.
	*/
	//Create array of dishes
	//console.log(html);
	var dishes = [
	"Gröna smak(er)?:",
	"Världens smak(er)?:",
	"Klassisk smak(er)?:",
	"Soppa:",
	"Pasta:" //This one will return two alternatives for each day
	];

	var foodArrays = [];

	//Loop through dishes. Each search should return an array of 5 items, one for each weekday
	dishes.forEach((dish, index) => {
		//console.log(dish);
		var search = new RegExp(dish + "(.*)", "gm");

		foodArrays[index] = html.match(search);

	});

	//console.log(foodArrays);

	var days = [];

	// Loop to build the menu for each day
	for (var i = 0; i < 5; i++) {
		//Say that the day wan to be an array
		days[i] = [];
		console.log("New day " + i);

		//Loop dishes
		for(var j = 0; j <= foodArrays.length-1; j++){
			console.log('New dish ' + j);
			// Say that the dish want to be an array
			days[i][j] = [];

			//Say that the dish is located at 
			var dish = foodArrays[j];
			console.log(dish);

			//Think of the pasta
			if(j == 4){
				console.log("Look at me! Im pasta!");
				var pasta = dish[i*2].split(':');
				pasta.push(dish[i*2+1].split(':')[1]);
				console.log(pasta);
				days[i][j] = pasta;

			}
			else{
				days[i][j] = dish[i].split(':');
			}
		}

		/*
		days[i] = foodArrays.map((dish, index) => {
			//Dish for day i
			//Account for the second type of pasta
			if(index==4){
				var pasta = dish[i].split(':').push(dish[i+1].split(':'));
				return pasta;
			}

			//Selects the specific dish for day i
			console.log(dish[i]);
			return dish[i].split(':');
		});*/
		//console.log(days);
	}

	console.log(days);
	
	//var test = foodArrays["Pasta:"][0].split(':');

	//printText(test[0], test[1]);

	//Combine the arrays for daywise data

	//Return structured data


	//console.log(html);
}

function fetchData(){
	//Fetch request

	//Run select * from htmlstring where url="https://gastrogate.com/rest_lunchinfo.php?id=69" via YQL (Yahoo Query Langauge)
	var url = "http://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20htmlstring%20where%20url%3D%22https%3A%2F%2Fgastrogate.com%2Frest_lunchinfo.php%3Fid%3D69%22&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&format=json";
	var settings = {
		method:'POST',

	};

	fetch(url, settings)
		.then((response)=>{
			if(response.ok){
				response.json().then((data) => {
					//console.log(data.query.results.result);
					//Create DOM document to traverse element nodes
					var parser = new DOMParser();
					var newDom = parser.parseFromString(data.query.results.result, "text/html");
					var nodeList = newDom.querySelector("center");

					var table = nodeList.firstChild.nextSibling.innerHTML;
					//console.log(newDom);
					
					//container.innerHTML = table;
					decodeMenu(table);
					//console.log(newDom);
				});	
			}

		}).catch(err => {console.log(err);});

	//Parse DOM tree and construct JSON object

	//Save to localstorage

	//Update expire for next sunday/monday 00:00 and set updated date

	//displayData
}

function displayData(){
	//Does data exist yet? Display loading.

	//Get the data for the current date
	var day = new Date().getDay();
	console.log(day);
	if(day == 0 || day == 5){ //Saturday or sunday
		printText('Vad gör du i skolan?', 'Det är ju helg!', true);
		return;
	}
	//No data? Display other text

	//Display the recipes for today
}

function printText(title, subtitle, big){
	var temp = document.createElement('div');
	var snippet;

	//TODO make this look nicer
	if(big){
		snippet = '<h1>'+ title +'</h1><h2>'+ subtitle +'</h2>';
	}
	else{
		snippet = '<h2>'+ title +'</h2><h3>'+ subtitle +'</h3>';
	}
	
	temp.innerHTML = snippet;
	container.append(temp);

}