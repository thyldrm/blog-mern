const router = require("express").Router();


const User = require("../models/User")
const Post = require("../models/Post")

//--CREATE POST

router.post("/", async (req,res)=>{
   const newPost = new Post(req.body);
   try{
       const savedPost = await newPost.save();
       res.status(200).json(savedPost)
   } catch(err) {
       res.status(500).json(err)
   }
});

//--UPDATE POST

router.put("/:id", async (req,res)=>{
    try {
        const post = await Post.findById(req.params.id);
        if(post.username === req.body.username){
            try {
                const updatedPost = await Post.findByIdAndUpdate(req.params.id, {
                    $set:req.body
                },{new:true});
            res.status(200).json(updatedPost);
            }catch(err){
                res.status(500).json(err)
            }
        } else{
            res.status(404).json("Sadece gönderinizi güncelleyebilirsiniz.")
        }
    } catch (err) {
        res.status(500).json(err)
    }
});



//--DELETE POST

//--GET POST




module.exports=router;