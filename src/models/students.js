const mongoose = require('mongoose');
const validator = require('validator');

const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    dept: {
        type: String,
        required: true,
        enum: ['CE', 'EE', 'ME', 'CSE', 'ECE', 'IT']
    },
    roll: {
        type: Number,
        required: true,
        minlength: 11,
        maxlength: 11
    },
    phone: {
        type: Number,
        required: true,
        minlength: 10,
        maxlength: 10,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: [true, "This email is already registered"],
        validate(value) {
            if (!validator.isEmail(value)) {
                throw new Error("Enter valid email id");
            }
        }
    },
    address: {
        type: String
    }
});

const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;