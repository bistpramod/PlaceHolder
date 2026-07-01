import mongoose from "mongoose";

const users = [];

//! user schema
const userSchema = new  mongoose.Schema(
  {
    name: {
      type : String, 
      required : true , 
      minLength : 3 , 

    }, 
    email:{
      type: String , 
      required : true , 
      unique : true , 
    }, 
    password : {
      type : String , 
      required : true
    },
  },
   {timestamps:true})
//! creating user model 


const User = mongoose.model("user", userSchema);

export const getAll = (req, res, next) => {
 try{
   const query = req.query;
  console.log(query);

  //* database find all query 
  const users = await User.find({})
  res.status(200).json({
    message: "users fetched",
    success: true,
    data: user,
  });
 } 
 catch(error){
  next(error)
 }
};

// defining the getById

export const getById = (req, res, next) => {
  try {
  
  // const id = req.params.id;
  const { id } = req.params;

  // const user = users.find((user) => user._id === Number(id));

  const user = await User.findOne({_id:id});


  if (!user) {
    
    next({
      message: "user not found",
      status:404, 
    });
    return;
  }
  // shows the status
  res.status(200).json({
    message: `user by id ${id} fetched`,
    success: true,
    data: user,
  });}
  catch (error){
    next(error)
  }
};

//* create
export const create = (req, res) => {
  //   res.send("<h1>User created</h1>");
  // console.log(req.body);
  const { name, email, password } = req.body;

  users.push({
    name,
    email,
    password,
    createdAt: new Date(Date.now()),
    _id: users.length + 1,
  });

  res.status(201).json({
    message: "user created",
    success: true,
    data: users[users.length - 1],
  });
};

//* update
export const update = (req, res) => {
  const { id } = req.params;

  const { name, email, password } = req.body;

  const index = users.findIndex((user) => user._id === Number(id));
  // User.finByIdAndUpdate({_id:id}, {name,email,password}, {new:true})
  if (index === -1) {
    res.status(404).json({
      message: "user not found",
      success: false,
      data: null,
    });

    return;
  }

  users[index] = {
    ...users[index],
    name,
    email,
    password,
  };

  res.status(200).json({
    message: "user updated",
    success: true,
    data: users[index],
  });
};

//* delete
export const remove = (req, res) => {
  const { id } = req.params;

  const index = users.findIndex((user) => user._id === Number(id));

  if (index === -1) {
    res.status(404).json({
      message: "user not found",
      success: false,
      data: null,
    });

    return;
  }

  users.splice(index, 1);
  res.status(200).json({
    message: "user deleted",
    success: true,
    data: null,
  });
};
