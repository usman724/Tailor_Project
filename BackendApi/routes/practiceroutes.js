// this is first practice api and we will use it for GET request

const express = require('express')
const router = express.Router()
const multer = require('multer');
const {
    uploadDesign,
   
} = require('../controllers/practicecontroller')



const upload = multer({
    storage: multer.memoryStorage(), // Use multer's memory storage for uploading files
  });

router.route('/').post(upload.single('image'),uploadDesign)
        



router.route('/:id')
      .get(getDesign)
      .delete(deleteDesign)
      .put(updateDesign)
      



      
module.exports = router
