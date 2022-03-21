const app=require("./index")
const connect = require("./configs/db");

app.listen(2900, async function(){
        try{
                await connect()
                }
                catch(err){
                    console.log(err)
                }
                console.log("listening at 2900")
                
})