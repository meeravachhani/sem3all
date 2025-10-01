const Song = require('../models/song');

exports.index =(req, res) => {
  Song.findAll()
  .then((mall)=>{
    console.log("display all",mall);
    res.send({message:"display",data:mall});
  })
  .catch((error)=>{
    console.log("error",error);
    res.send({message:"error",data:error});
  })
};

exports.store =(req, res) => {
  Song.create(req.body)
   .then((ms)=>{
     console.log("new new",ms);
    res.send({message:"added",data:ms});   
  })
  .catch((error)=>{
    console.log("error",error);
    res.send({message:"error",data:error});
});
};

exports.update =(req, res) => {
  Song.update(req.body,{where:{id: req.params.id}})
  .then((mu)=>{
    console.log("update",mu);
    res.send({message:"update",data:mu});   
  })
  .catch((error)=>{
    console.log("error",error);
    res.send({message:"error",data:error});
  });
};



exports.delete =(req, res) => {
  Song.destroy({where:{id: req.params.id}})
  .then((md)=>{
    console.log("deleted");
    res.send({message:"delete"})
  })
  .catch((error)=>{
    console.log("error");
    res.send({message:"delete"})
  })
};