const fs = require('fs');
const pather = require('path');
let fileReader = {
    setResponse(path,res){
        fs.readFile(path,'utf8',(err,data) => {
            if(err){
                if(err.code == 'ENOENT'){
                    res.statusCode = 404;
                    fs.readFile(pather.join(__dirname,'..','public','404.html'),(err,data)=>{
                        res.write(data);
                        res.end();
                    })
                }
                console.log(err);
            }else{
                res.write(data);
                res.end();
            }
        });
    }
};

module.exports = fileReader;