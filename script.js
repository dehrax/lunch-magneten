init();
var container = document.querySelector("#container");
console.log(container);
function init(){
	//alert("Hey!");
	
	displayData();
	//Check if it is a new week compared to info stored in localstorage
	if(new Date() >= new Date(window.localStorage.getItem('expire')).getTime()){
		fetchData();
	}
}

//Localstorage setup: expire (the date when it needs to be updated), updated (when it was last updated), data (pure info in JSON object)

function getHTML(html){
	console.log(html);
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
					console.log(data.query.results.result);
					var parser = new DOMParser();
					var newDom = parser.parseFromString(data.query.results.result, "text/html");
					var nodeList = newDom.querySelector("center");

					var table = nodeList.firstChild.nextSibling.innerHTML;
					console.log(newDom);
					console.log();
					container.innerHTML = nodeList.firstChild.nextSibling.innerHTML;
					console.log(newDom);
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

	//No data? Display other text

	//Display the recipes for today
}