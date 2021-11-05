var jwt = require('jsonwebtoken');
const JWT_SECRET = "MESHV@231";
let d  = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjE4MGU0YjQyNGMyNWJlODJkZWEwOGRlIn0sImlhdCI6MTYzNTgzNzEyMn0.LIu2wZQWpQAshM3UWI_rDjT6cSHDOF3eGCASBvRT-Ik';
const fetchuser = (req, res, next) => {
    // Get the user from the jwt token and add id to req object
    const token = req.header('auth-token');
    if (!token) {
        res.status(401).send({ error: "Please add token in  if" })
    }
    try {
        // console.log("here before verify");
        if(token === d) { console.log(true) }
        else{
            console.log(false) 
        }
        // console.log(token , JWT_SECRET);
        const data = jwt.verify(token, JWT_SECRET);
        console.log(data);
        console.log("here after verify");

        req.user = data.user;
        next();
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using a valid token c" })
    }
}


module.exports = fetchuser;