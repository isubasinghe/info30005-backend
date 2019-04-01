const express = require('express');
const router = express.Router();


router.post("/search", require('./search'));


module.exports = router;
