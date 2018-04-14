const router = require('express').Router();
const multer = require('multer');
const path = require('path');

const IPFS = require('ipfs');
const node = new IPFS({ repo: '$/ipfs_data/data' });

var fs = require('fs');

// const app = express();   


const multerConf = {
    storage: multer.diskStorage({
        destination: function(req, file, next){
            next(null, './uploads/');
        },
        filename: function (req, file, next) {
            console.log(path.extname(file.originalname))
            next(null, Date.now() + path.extname(file.originalname)) //Appending extension
        }
    })
}

router.post('/upload',multer(multerConf).single('file'), function(req, res) {
    // var fileName = 
    
    // var data = fs.readFileSync('../uploads' + );
    
    // node.add()
    
});

module.exports = router;
