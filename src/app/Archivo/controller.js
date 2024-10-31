const multer = require("multer");
const path = require('path');
const crypto = require("crypto");

const controller = {};

function multerConf(inputName, tipes, tipo) {
    var storage = multer.diskStorage({
        destination: path.join(__dirname, '../../public'),
        filename: (req, file, cb) => {
            var name = encriptfile(file.originalname);
            cb(null, name);
        },
    });
    return multerConfStorage(inputName, tipes, storage);
}

function multerConfStorage(inputName, tipes, storage) {
    return multer({
        storage: storage,
        fileFilter: function (req, file, callback) {
            var ext = path.extname(Date.now().toString()+file.originalname);
            if (tipes.indexOf(ext) < 0) {
                return callback(new Error(`Only ${tipes.join(", ")} are allowed`));
            }
            callback(null, true);
        },
    }).single(inputName);
}

function encriptfile(filename) {
    return (
      crypto.createHash("sha1").update(filename).digest("hex") +
      "." +
      filename.split(".")[1]
    );
  }



controller.load = async (req, res, next) => {
    try {
        multerConf("miniatura", [".png", ".jpeg", ".jpg"], "minuatura")(
          req,
          res,
          async (err) => {
            if (err) {
              console.log(err);
            }
            console.log(Date.now().toString());
            res.status(200).send(req.file);
          }
        );
    } catch (err) {
      res.status(401).send(err);
    }
}

module.exports = controller;