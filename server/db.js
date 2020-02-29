const mongoose = require('mongoose');

const dbUrl = process.env.DB_URL || 'mongodb+srv://mishloha_mda:mishloha1234@dwcluster-l4ts5.mongodb.net/test?retryWrites=true&w=majority';

async function setDb() {
    await mongoose.connect(dbUrl, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = {
    setDb
}; 