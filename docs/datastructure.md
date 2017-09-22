	# LocalStorage data structure

	## Flags
	expire: Date

	updated: Date

	offline: Bool
	cached: Bool

	## Weekday data
	recipes: {
		//array of weekdays 0-6 (0 is sunday according to [MDN web docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/getDay))
		0: {
			"Gröna smaker": "Vegetarisk och saker",
			"Världens smaker": "",
			"Klassisk smak": "",
			"Soppa": "",
			"Pasta": "",
			"Pasta": ""
		},
		1: {...}
		... 
	}