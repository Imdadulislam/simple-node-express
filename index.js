const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json())

const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello My first noe!');
});

const users = [
    { id: 1, name: 'imdadul', email: 'Inmdaduyl islmasotan', phone: '9082387' },
    { id: 2, name: 'koeim', email: 'Inmdaduyl islmasotan', phone: '9082387' },
    { id: 3, name: 'Lorinm', email: 'Inmdaduyl islmasotan', phone: '9082387' },
    { id: 4, name: 'Noruim', email: 'Inmdaduyl islmasotan', phone: '9082387' },
    { id: 5, name: 'Morim', email: 'Inmdaduyl islmasotan', phone: '9082387' },
]

app.get('/users', (req, res) => {
    const search = req.query.search;
    // use query parameter
    if(search){
        const searchResult = users.filter(user => user.name.toLowerCase().includes(search));
        res.send(searchResult);
    }
    else {
        res.send(users);
    }
    
});

app.post('/users', (req, res) => {
    const newUser = req.body;
    newUser.id = users.length;
    users.push(newUser);
    console.log('hitting the poist', req.body);
    // res.send(JSON.stringify(newUser));
    res.json(newUser);
})

// Dynamic Api
app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    const user = users[id];
    res.send(user);
});

// Hudai banaisi
app.get('/friuts', (req, res) => {
    res.send(['mango', 'orange', 'banana', 'apple']);
})

app.get('/frouts/mangoes/fazli',(req, res) => {
    res.send('yemmy tok markA FAZLI')
})

app.listen(port, () => {
    console.log('listening to port', port);
});