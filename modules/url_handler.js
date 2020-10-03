const path = require('path');
let url_handler = {
    handle(url){
       if(path.extname(url) == ''){
            if(url[url.length - 1] == '/'){
                url = url.concat('index.html');
            }else{
                url = url.concat('/index.html');
            }
       }
        return {
            path: path.join(__dirname,'..','public',url),
            file_name: path.basename(url),
        };
    },
    
};

module.exports=url_handler;