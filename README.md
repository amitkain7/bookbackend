# bookbackend

today i learn how to deploy a mern stack app on a vercel it is quite easy and fast 
use just need to add some more line in your index.js file 
and add one more vercel.json file 
and that it your app is deployed

insert this code on index.js file
// for deploying purpose
app.use(cors(
    {
        origin : [" paste your frontend app deploy url"],
        methods : ["GET", "POST", "PUT", "DELETE", "PATCH" , "pasete all the methods you make in your API call"],
        credentials : true
    }
    ));

