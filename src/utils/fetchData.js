	// ES8 getJson function
	const getJson = async ($text, amount) => {
		try{
			let response = await fetch(`https://chayns1.tobit.com/TappApi/Site/SlitteApp?SearchString=${$text}&Skip=${amount}&Take=8`)
			let json = await response.json();
			return json.Data;
		} catch (error) {
			console.error(`readFile failed: ${error}`);
		}	
	}
	
	export default getJson;
	