const express = require('express');
const router = express.Router();

router.get("/Chat/:projectId" , (req, res) => {
    res.write(req.params.projectId)
    res.end()
})

module.exports = router;