const express = require('express')
const app = express()
const port = 3001
const fs = require("fs");

const newPet = {
  "pet3" : {
    "name": "mirringo",
    "type": "cat",
    "owner": "joel",
    "color": "white",
    "id": 3
  }
}

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/api', (req, res) => {
  res.send('Hello World!')
})

app.get('/pets', (req, res) => {
  fs.readFile(__dirname + "/" + "pets.json", "utf8", (err, data) => {
    console.log(data);
    res.end(data);
  });
});

app.post('/pet/new', (req, res) => {
  fs.readFile(__dirname + "/" + "pets.json", "utf8", (err, data) => {
    data = JSON.parse(data);
    data["pet4"] = newPet["pet4"];
    fs.writeFile(__dirname + "/" + 'pets.json', JSON.stringify(data), function(err, result) {
      if (err) console.log('error', err);
    });
    console.log(data);
    res.end(JSON.stringify(data));
  });
});

app.delete('/pet/delete', (req, res) => {
  fs.readFile( __dirname + "/" + "pets.json", 'utf8', (err, data) => {
    data = JSON.parse(data);
    delete data["pet4"];
    fs.writeFile(__dirname + "/" + 'pets.json', JSON.stringify(data), function(err, result) {
      if (err) console.log('error', err);
    });
    console.log(data);
    res.end(JSON.stringify(data));
  });
});

app.put('/pet/put', (req, res) => {
  fs.readFile(__dirname + "/" + "pets.json", "utf8", (err, data) => {
    data = JSON.parse(data);
    data["pet4"] = newPet["pet4"];
    fs.writeFile(__dirname + "/" + 'pets.json', JSON.stringify(data), function(err, result) {
      if (err) console.log('error', err);
    });
    console.log(data);
    res.end(JSON.stringify(data));
  });
});