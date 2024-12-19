class APIError extends Error{
    constructor(
        statusCode,
        message="Something went wrong!",
        errors=[],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false 
        this.errors = errors

        if(stack){
            this.stack = stack
        }
        else{
            Error.captureStackTrace(this,this.constructor)
        }
    }
}


export {APIError};







/*

const express = require('express'); 
const app = express(); 
const port = process.env.PORT || 3000; 

class APIError extends Error { 
    constructor( 
        statusCode, 
        message = "Something went wrong!", 
        errors = [], 
        stack = "" 
    ) { 
        super(message); 
        this.statusCode = statusCode; 
        this.data = null; 
        this.message = message; 
        this.success = false; 
        this.errors = errors; 
        
        if (stack) { 
            this.stack = stack; 
        } else { 
            Error.captureStackTrace(this, this.constructor); 
        } 
    } 
} 
app.get('/error', (req, res) => { 
    const error = new APIError(500, "Internal Server Error"); 
    res.status(error.statusCode).json(error); 
}); 
app.listen(port, () => { 
    console.log(`Server started on port ${port}`); 
});


*/