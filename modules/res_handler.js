let resHandler = {
    header_handler(filename,res){
        let ext = filename.split('.')[1];
        switch (ext){
            case 'html':
                res.setHeader('Content-Type','text/html');
                break;
            case '.jpg':
                res.setHeader('Content-Type','image/jpeg');
                break;
            case '.png':
                res.setHeader('Content-Type','image/png');
                break;
            case '.css':
                res.setHeader('Content-Type','text/css');
                break;
            case '.js':
                res.setHeader('Content-Type','text/javascript');
                break;
            case '.ico':
                res.setHeader('Content-Type','image/vnd.microsoft.icon');
                break;
        }
    },
};
module.exports = resHandler;