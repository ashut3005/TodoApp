const Todo = require('../model/todo');

const getTodo = async (req, res)=>{
    try{
        //fetch all todo items form the database
        const todos = await Todo.find({});
        res.status(200).json({
            success:true,
            data:todos,
            message:"Entire TODO data is feteched"
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"server Error"
        })
    }
}  

const getTOdoByID = async (req, res)=>{
    try{
//search the todo by id 
        const id = req.params.id;

        const todo = await Todo.findById({_id: id});
        
        //data for the given id not found
        if(!todo){
            return res.status(404).json({
                success:false,
                message:"Data not found with given id"
            })
        }
        res.status(200).json({
            success:true,
            data:todo,
            message:`data is found with the id ${id}`
        })
    }
    catch(err){
        console.error(err);
        res.status(500).json({
            success:false,
            error:err.message,
            message:"server Error"
        })
    }
}

module.exports = {
    getTodo,
    getTOdoByID
};