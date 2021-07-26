const {Router} = require('express');


const {vehiculosGet,
        vehiculosQuery,
        vehiculosId, 
       vehiculosPost, 
       vehiculosPut, 
       vehiculosPatch, 
       vehiculosDelete} = require('../controllers/vehiculosControllers');





const router = Router();

router.get('/', vehiculosGet)

router.get('/find', vehiculosQuery );

router.get('/:id', vehiculosId)

router.put('/:id', vehiculosPut );

router.post('/', vehiculosPost);

router.patch('/:id', vehiculosPatch);
  
router.delete('/:id', vehiculosDelete);
  








module.exports = router;