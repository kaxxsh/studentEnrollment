import Demo from "../model/Demo.js";

const handlegetDemo = async (req, res) => {
    try {
        const Data = await Demo.find();
        res.status(200).json({Data})
    } catch (error) {
        res.status(500).send({error:error.message})
    }
};

const handlepostDemo = async (req, res) => {
    try {
        const data =await Demo.create(req.body);
        res.json({data});
        
    } catch (error) {
        res.status(500).send({error:error.message});    
    }
};


const handlepatchDemo = async (req, res) => {
    try {
        findId(req,res);
        if(!req.body.name){
            res.status(400).send({message:"Name is required"});
        }
        try {
            const updateDemo = await Demo.updateOne({_id:req.params.id},{$set:{name:req.body.name}});
            res.status(200).json({updateDemo})
        } catch (error) {
            res.status(500).send({error:error.message}); 
            console.log(error);
        }
    } catch (error) {
        res.status(500).send({error:error.message});
    }
};

const findId =(req,res)=>{
    const user = new Promise((resolve,reject)=>{
            Demo.findById(req.params.id).then((data)=>{
                resolve(data);
            }).catch((err)=>{
                reject(err);
            })
        })

    
}



const handledeleteDemo = async (req, res) => {
    try {
        findId();
        if(!req.body.name){
            res.status(400).send({message:"Name is required"});
        }
        try {
            const updateDemo = await res.Demo.deleteOne(req.params.id);
            res.status(200).send("deleted successfully");
        } catch (error) {
            res.status(500).send({error:error.message}); 
        }
    } catch (error) {
        res.status(500).send({error:error.message});
    }
};




export { handlegetDemo, handlepostDemo, handlepatchDemo, handledeleteDemo };