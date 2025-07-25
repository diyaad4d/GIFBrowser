import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';

const app = express();
const port = 3000;
const API_URL='https://api.giphy.com/v1/gifs';
dotenv.config();
const myapikey=process.env.API_KEY;


app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/',async (req,res)=>{
    try {
        const result=await axios.get(API_URL+'/trending',
            {
                params:{api_key:myapikey}
            });

        res.render('index.ejs',{gifs:result.data.data,head:"Trending GIFs"});
    }
    catch (error) {
        res.status(404).send(error.message);
    }

});

app.post('/search', async (req,res)=>{
    try{
        const query=req.body.query;
        const result =await axios.get(API_URL+'/search',
            {
                params:{
                    api_key:myapikey,
                    q:query
                }
            });
        res.render('index.ejs',{gifs:result.data.data,head:""});
    }
    catch (error) {
        res.status(404).send(error.message);
    }
})



app.listen(port, () => {
    console.log(`server is running on port ${port}`);
})