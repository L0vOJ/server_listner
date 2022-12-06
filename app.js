const express = require('express');
const path = require('path');
const fs = require('fs');
const bodyParser = require('body-parser');
const request = require('request');

request('http://211.212.120.32:3001/submit',(error,response,body)=>{
	//callback
	//console.log("h e l l o")
	//console.log(JSON.parse(body).data);
	console.log(JSON.parse(body));
})