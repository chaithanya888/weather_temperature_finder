let container=document.getElementById("container");
async function dataPassing(){
    let input=document.getElementById("input").value;
    let city=input.toUpperCase();


const url = `https://weather-api138.p.rapidapi.com/weather?city_name=${city}`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'f90751c347msh5947b22ecc3db4ep15c0f9jsn62d7d13a8c38',
		'x-rapidapi-host': 'weather-api138.p.rapidapi.com',
		'Content-Type': 'application/json'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	
    useData(result,city);
} catch (error) {
	console.error(error);
    funError(error);
}


}

function useData(data,city){
container.innerHTML=`
<p>Wether in ${city}</p>
<p>Temperature :${data.main.temp}</p>
<p>Humidityv:${data.main.humidity}</p>
`
}

function funError(er){
container.innerHTML=`
<p>${er}</p>
`
}


