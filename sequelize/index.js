const { allow } = require("joi");
const Sequelize=require("sequelize");
const sequelize = new Sequelize("mm","root","",{
    host:"localhost",
    dialect:"mysql",
});
sequelize
.authenticate()
.then(()=>{
    console.log("connect")
})
.catch((err)=>{
    console.log("error",error)
});

const song=sequelize.define("song",{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
    },
    title:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    category:{
        type:Sequelize.STRING,
        allowNull:false,
    },
    url:{
        type:Sequelize.STRING,
        allowNull:false,
    },
});

sequelize
.sync()
.then(()=>{
    console.log("create successfully");
})
.catch((err)=>{
    console.log("not created",err);
});

song.create({
    title:"vandematram",
    category:"patrotic",
    url:"https://example.com/new-song.mp3",
});

song.findAll()
.then((allsongs)=>{
    console.log("retrieved all song",allsongs);
})
.catch((err)=>{
    console.log("error",err);
});

song.update({title:"meri maa"},
    {where:{id:1}}
)
.then(()=>{
    console.log("updeted record");
})
.catch((err)=>{
    console.log("not updeted record");
});

song.findByPk(1)
.then((song)=>{
    console.log("retrieved all song",song);
})
.catch((err)=>{
    console.log("error",err);
});

song.destroy({where:{id:1}})
.then(()=>{
    console.log("song deleted");
})
.catch((err)=>{
    console.log("not delete record");
});