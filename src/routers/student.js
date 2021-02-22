const express = require('express');
const router = new express.Router();
const student = require('../models/students');

router.get('/', (req, res) => {
    res.send('Hello World');
});

// router.get('/', (req, res) => {
//     res.send('Hi, its rohan');
// });

// router.post('/students', (req, res) => {
//     console.log(req.body);
//     const user = new student(req.body);
//     user.save().then(() => {
//         res.status(201).send(user);
//     }).catch((err) => {
//         res.status(400).send(user);
//         console.log(err);
//     });
//     res.send('Hi,');
// });

router.post('/students', async (req, res) => {

    try {
        const user = new student(req.body);
        const createUser = await user.save();
        res.status(201).send(createUser);
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }

});

router.get('/students', async (req, res) => {
    try {
        const data = await student.find();
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send(err);
        console.log(err);
    }
});

router.get('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const data = await student.find({ _id }); // student.findById(_id);
        if (!data) {
            res.status(404).send('Page not found');
        } else {
            res.status(200).send(data);
        }
    } catch (err) {
        res.status(500).send(err);
    }
});

// router.get('/students/:name', async (req, res) => {
//     try {
//         const name = req.params.name;
//         const data = await student.find({ name }); // student.findById(_id);
//         if (!data) {
//             res.status(404).send('Page not found');
//         } else {
//             res.status(200).send(data);
//         } 
//     } catch (err) {
//         res.status(500).send(err);
//     }
// });

router.patch('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const data = await student.findByIdAndUpdate(_id, req.body, {
            new: true
        });
        res.status(200).send(data);
    } catch (err) {
        res.status(400).send(err);
    }
});

router.delete('/students/:id', async (req, res) => {
    try {
        const _id = req.params.id;
        const data = await student.findByIdAndDelete(_id);
        if (!data) {
            res.status(404).send('Page not found');
        } else {
            res.status(200).send(data);
        }
    } catch (err) {
        res.status(400).send(err);
    }
});


module.exports = router;