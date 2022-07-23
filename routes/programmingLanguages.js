const express = require('express');

const router = express.Router();

const programmingLanguages = require('../services/programmingLanguages');

/*GET programming language. */
router.get('/', async function(req, res, next){
    try {

        res.json(await programmingLanguages.getMultiple(req.query.page));
       
    } catch (err){
        console.error(`error while getting programming languages`, err.mensage);
        next(err);
    }
});

module.exports = router;
