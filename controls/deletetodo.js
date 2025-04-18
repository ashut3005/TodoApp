const Todo = require('../model/todo');

const deleteTodo = async (req, res)=>{
    try{
        const id = req.params.id;
        const todo = await Todo.findByIdAndDelete(id);
        res.json({
            success:true,
            message:"Todo is deleted"
        })
    }
    catch(err){
        res.status(500).json({
            success:false,
            error:err.message,
            message:"Data is not found"
        })
    }
}

module.exports = deleteTodo;