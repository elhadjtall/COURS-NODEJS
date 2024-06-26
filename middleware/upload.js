const aws = require('aws-sdk');
const multer = require('multer');
const multerS3 = require('multer-s3');

aws.config.update({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION
});

const s3 = new aws.S3();

// Middleware pour uploader des images vers S3
const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: 'cours-pokemon-nodejs',
        acl: 'public-read',
        metadata: function (req, file, cb) {
            cb(null, {fieldName: file.fieldname});
        },
        key: function (req, file, cb) {
            cb(null, Date.now().toString())
        }
    }),
    // Gestionnaire d'erreur pour multer
    onError: function(err, next) {
        console.error('Erreur lors de l\'upload :', err);
        next(err);
    }
});

// Exporte le middleware upload
module.exports = { upload };
