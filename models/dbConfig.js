const mongoose = require('mongoose');

mongoose.connect(
    "mongodb+srv://root:root@cluster0.a7leu.mongodb.net/test",
    {useUnifiedTopology: true, useNewUrlParser: true},
    (err) => {
        if(!err) console.log("Mongodb connected");
        else console.log("Connection error :" + err);
    }
)

