const router = require('express').Router();
const multer = require('multer');
// const app = express();   


const multerConf = {
    storage: multer.diskStorage({
        destination: function(req, file, next){
            next(null, './uploads/');
        },
        filename: function(req, file, next){
            console.log(file);
        }
    })
}

router.post('/upload',multer(multerConf).single('file'), function(req, res) {
    res.send('this is upload route');

});

module.exports = router;
