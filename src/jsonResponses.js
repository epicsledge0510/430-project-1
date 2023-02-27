const text = require(`${__dirname}/../client/exercises.json`);
const fs = require('fs');
const { JSON_SCHEMA } = require('js-yaml');

const getExercises = (request, response) => {
    let rawdata = fs.readFileSync(`${__dirname}/../client/exercises.json`);
    const JSONStr = JSON.parse(rawdata);
    let exerciseArr = [];
    for(let i = 0; i < JSONStr.exercises.length; i++){
        exerciseArr.push(`an example exercize is ${JSONStr.exercises[i].exercise} created by ${JSONStr.exercises[i].name}`)
    }
    exerciseList=exerciseArr.toString();
    //console.log(exerciseArr)
    response.writeHead(200, { 'Content-Type': 'text/html'});
    response.write(exerciseList);
    response.end();
};
module.exports.getExercises = getExercises;