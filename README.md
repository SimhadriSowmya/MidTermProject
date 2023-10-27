# MidTermProject
MidTerm Project
CS548 - Web Services Techniques and REST Technologies
19905 | Mid-Term Project

https://github.com/SimhadriSowmya/MidTermProject 

Creating the Node.js project 
-	Add a new folder for nodejs project.
-	Execute “npm init” for initializing the project – which creates the package.json file
-	Add “type”:”module” in the package.json file
-	Execute below for installing all the node modules.
“npm install’
-	Execute below which would add for the modules to the dependency list in package.json file
“npm express”
-	Execute below for sending the async http requests and handling responses.
“npm axios”
-	Execute below for installing nodemon for automatically restarting the app. for any change.
“npm install nodemon –save-dev
-	Add “start”:”nodemon index.js” in package.json
-	Execute below for using the env variabless
“npm install dotenv –upstream api
Creating the .env variables 
-	Proceed to Tracking more and fetch the API Key from the platform
-	Create the “.env” file in the project and add the API_KEY
ORDER_API_KEY=dhtbxknb-b9lb-yd0w-d60i-4fwpipcingpf

-	Fetching the details from the Upstream API 
import axios from 'axios' // lib to make async external requests
import dotenv from "dotenv" // whatever we keep in the .env file to laod 

dotenv.config();

//.env is never upload  

const API_KEY = process.env.ORDER_API_KEY;
const API_URL = "https://api.trackingmore.com/v4/trackings/get?tracking_numbers=";


Error Handling
Error when the OrderNumber is less than 10 digits throw the error.

    const orderNum = req.body?.orderNum; 
    console.log (orderNum);
    if (orderNum.length < 10) {
        res.status(400).send({error : "OrderNum less than 10 characters"});
    }

Validate that `orderNumber` is provided, returning a 400 response if not.
 

Using axios library to make API requests
-	Adding the headers for the API to fetch the endpoint details

const API_URL = "https://api.trackingmore.com/v4/trackings/get?tracking_numbers=";
const headers = {
    'Tracking-Api-Key': API_KEY,
    'content-type' : 'application/json'
}

export const getOrderStatusUpstream = async(orderNum) => {        
        try{
            let res = await axios.get(API_URL+orderNum,{headers:headers});
            return res.data;
        }
        catch(err){
            throw err;
            console.log(err);
            return err;
        }
}




Successful response – Status = 200 
-	Create a new tracking 
https://api.trackingmore.com/v4/trackings/create 
-	Add the tracking-api-key in the headers of the request for authorization. 
 

-	Get the Details of the tracking with the upstreamAPI
 


-	Modify the details of the Tracking Created
 

Searching of  the tracking id which is not present which throws the error  - Status - 400

export const createOrderStatusUpstream = async(orderNum) => {        
        try{
            let res = await axios.get(API_URL+orderNum,{headers:headers});
            return res.data;
        }
        catch(err){
            throw err;
            console.log(err);
            return err;
        }
}


 

 
