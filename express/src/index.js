import http from "http";
import express from "express";
import userRoutes from "./routes/user.routes.js";
import productRoutes from "./routes/product.routes.js";

//* creating express app instance
const app = express();

//* creating http server
const server = http.createServer(app);

const middleware = (req,res,next) => {
  console.log('middleware 1 ');
  next();           
}

//! using middleware
app.use((req,res,next)=>{
  console.log("middleware 2")
  req.user ={
    name:"David Bowie"
  }
  next()
})
 app.use ((req,res,next)=>{
  console.log("midd3")
  console.log(req.user)
  // res.status(200).json({
  //   message: "Response from mid 3",
  // });

  if(req.user){
    next();
  }
  else{
    res.status(401).json({
      message: "unauthorized access denied"
    });
  }
  // next()
 })


app.use(middleware);

app.use(express.json()); 



// app.get(path, handler);
app.get("/", (req, res) => {
  res.status(200).json({
    message: "Server is up & running",
  });
});

//! using routes
app.use("/users", userRoutes);
app.use("/products", productRoutes);

//! brand , order ,

server.listen(8080, () => {
  console.log(`Server is running at http://localhost:8080`);
  console.log("press ctrl+c to close the server");
});

app.use((err,reqres,next)=>{
  // console.log("error handler");
  console.log(err)
  res.status(er?.statusCode ?? 500).json({
    message: err?.message ?? "something went wrong",
    success :false,
    data : null,
  })
});

//? expressJs  / nestjs ->
// get /users -> handler
// post /users -> handler

//http://localhost:8080/users?name=john&page=1&limit=10

// req.url
// req.params  -> {}
// req.query  -> {name:"john",page:'1',limit:'10'}
// req.body    -> {}

// post /users   => req.body  => {}

//
//* REST api
//? REST -> Representational state transfer
//? api  -> application programming interface

//? constraints
//* stateless
//* client-server
//* layered arch.
// client - cdn , proxy server, loadbalancer ... -server
//* cacheable response
// Cache-Control

//* uniform interface
//? route naming
// use noun
//  get  /users
// post  /users
// use  meaningful http methods   => GET , POST ,PUT ,PATCH ,DELETE
// use meaningful response status code  ->
//? 100 -199  -> informational
//? 200-299  -> success
//  200 -> ok   , 201  -> created
//? 300-399   -> redirection
//? 400-499   -> client side error ,, 404
// 400  -> bad request
// 401  -> unauthorized
// 403    -> forbidden
// 404   -> not found
//? 500-599   -> sever side error  ,
//  500  -> Internal server error
//  502  -> bad gateway

//! endpoint
//* get  /users
//* get  /users/1

//! resource
//  /dashboard  =>  {}
// users  => json , html , xml

//* middleware

// is sa dunciton execute btween req-res cycle 
// has the access to req obj ,and next function 
// can execute on own logic 
// can modify req and res object 
// cna endreq-res cycle 


//*types of middleware 
//! custom middlewares 
//? 1 application level 
// ? 2 route level middleware
//? 3 error handler middleware : (err,req,res,next)=>{}

//*third party middleware  



// mongodb tomorrow


//* mongodb