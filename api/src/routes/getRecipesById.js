const { Router } = require('express');
const { getDetail } = require('../controllers/getDetail');

const router = Router();

router.get('/:id', async (req, res) => {
    let { id } = req.params; 
    let data = await getDetail(id);
    res.json(data)
})

module.exports = router;