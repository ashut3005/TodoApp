const Todo = require('../model/todo');

const createTodo = async (req, res)=>{
    try{
        //extract tittle and description
        const {title, description} = req.body;
        const response = await Todo.create({title,description});
        //send json with the sucees flag
        res.status(200).json({
            success:true,
            data:response,
            message:"Entry Created Suceesfully"
        })
    }

    catch(err) {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success:false,
            data:"internal server error",
            message:"data is not created"
        })
    }
}

module.exports = {
    createTodo
}