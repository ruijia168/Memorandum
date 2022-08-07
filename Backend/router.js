let express = require('express')
let router = express.Router()
let Message = require('./message')
router.post('/home/add',async(req,res)=>{
    let newMessage = await Message.findOne({
        title: req.body.title
    })
    if(newMessage){
        return res.send({
            status:0,
            message:'该主题已存在'
        })
    }else{
        new Message(req.body).save(function(err){
            if(err){
                res.send({
                    status:3
                })
            }
            return res.send({
                status: 1 ,
            })
        })
    }
    return;
})
router.post('/home/getall',async(req,res)=>{
 let newMessage = await Message.find()
 res.send(newMessage)
})
router.post('/home/changemsg',async(req,res)=>{
    Message.findByIdAndUpdate(`${req.body.id}`,{
        title:req.body.title,
        content:req.body.content
    },function(err,ret){
        if(err){
            console.log('失败');
        }else{
            res.send({
                status:1
            })
        }
        
    })
})
router.post('/home/delete',async(req,res)=>{
    Message.deleteOne({
        title:req.body.title
    },function(err,ret){
        if(err){
            console.log('删除失败');
        }else{
            res.send({
                status:0
            })
        }
    })
})
module.exports = router;