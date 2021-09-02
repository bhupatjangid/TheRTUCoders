const mongoose = require('mongoose')

mongoose.connect("mongodb+srv://coders:3WBjgzKgSNjy3KqW@cluster0.4pb73.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex:true,
    useFindAndModify:false
}).then(() => {
    console.log('connection successfully');
}).catch((err) => {
    console.log(err);
})