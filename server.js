// Importing packages
import minimist from 'minimist';
import express from 'express';
import {rps, rpsls} from './lib/rpsls.js';

// setting up variables
let args = minimist(process.argv.slice(2));
let app = express();
let port = args.port || 5000;

// Setting up the basic express commands
app.use(express.json());
app.use(express.urlencoded({extended: true}))

// Send a request to know app is running 
app.get('/app', (req, res) => {
    res.status(200).send('200 OK');
})

// If wrong port is found, 404 not found


// Run rps 4 queries
app.get('/app/rps', (req, res) => {
    res.status(200).send(rps());
});
// rpsls 4 queries

app.get('/app/rpsls/', (req, res) => {
    res.status(200).json(rpsls());
});

app.get('/app/rps/play', (req, res) => {
    res.status(200).send(rps(req.query.shot));
})

app.get('/app/rpsls/play', (req, res) => {
    res.status(200).send(rpsls(req.query.shot));
})


app.post('/app/rps/play', (req, res) => {
    res.status(200).send(rps(req.body.shot));
})

app.post('/app/rpsls/play', (req, res) => {
    res.status(200).send(rpsls(req.body.shot));
})

app.get('/app/rps/play/:shot', (req, res) => {
    res.status(200).send(rps(req.params.shot));
})

app.get('/app/rpsls/play/:shot', (req, res) => {
    res.status(200).send(rpsls(req.params.shot));
})

// Start the server

app.get('*', (req, res) => {
    res.status(404).send('404 NOT FOUND');
  });

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
  })
