const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const birthdaySchema = new mongoose.Schema(
    {
        username: { type: String, require: true, trim: true},
        cohort_number: { type: String, require: true},
        month: { type: String, require: true}
    }
);

const 