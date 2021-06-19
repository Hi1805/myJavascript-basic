var fetch = require('node-fetch');
var axios = require('axios');
fetch("api.openweathermap.org/data/2.5/weather?q=London")
.then(res=>res.json()).then(data=>console.log(data));
axios.get('https://www.facebook.com/ripker1805')
.then(res=>console.log(res));

var unirest = require("unirest");

var req = unirest("POST", "https://accuweatherstefan-skliarovv1.p.rapidapi.com/getWeatherAlarmByLocationKey");

req.headers({
	"x-rapidapi-host": "AccuWeatherstefan-skliarovV1.p.rapidapi.com",
	"x-rapidapi-key": "c8fc75d375mshc730dd9023ed5aep16c237jsnb682ffdcb1dc",
	"content-type": "application/x-www-form-urlencoded",
	"useQueryString": true
});

req.form({});

req.end(function (res) {
	if (res.error) throw new Error(res.error);

	console.log(res.body);
});