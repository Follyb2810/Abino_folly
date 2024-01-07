const mongoose = require('mongoose');

const EmailSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Your name is required"],
        trim: true,
        unique: true,
        collation: { locale: 'en', strength: 2 } // Case-insensitive index
    },
    email: {
        type: String,
        required: [true, "Your email is required"],
        trim: true,
        unique: true,
        collation: { locale: 'en', strength: 2 } // Case-insensitive index
    },
    message: {
        type: String,
        required: [true, "You are required to input a message"],
        minlength: [6, 'Must be at least 6 characters'],
        trim: true
    }
});

const NewsletterSchema = mongoose.Schema({
    email: {
        type: String,
        required: [true, "Your email is required"],
        trim: true,
        unique: true,
        collation: { locale: 'en', strength: 2 } // Case-insensitive index
    }
});

const EmailModel = mongoose.model('Email', EmailSchema);
const NewsletterModel = mongoose.model('Newsletter', NewsletterSchema);

module.exports = { EmailModel, NewsletterModel };
