const express = require('express')
require('dotenv').config()
const app = express();


const port = process.env.PORT || 4000


// app.get('/', (req, res) => {
//     res.send('Server is ready!!');
// })


app.get('/api/value', (req, res) => {
    const value = [
        {
            id: 1,
            title: 'Bishakh',
            role: "Intern"
        },
        {
            id: 2,
            title: 'Irshit',
            role: "CEO"
        },
        {
            id: 3,
            title: 'Arnab',
            role: "CTO"
        }
    ]
    res.send(value);
})


app.listen(port, () => {

    console.log(`Server is running at http://localhost:${port}`);

})