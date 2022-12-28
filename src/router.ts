import {Router} from 'express'
import {body, oneOf, validationResult} from 'express-validator'
import {errorsHandler} from './modules/middlewares'
import { deleteProduct } from './handlers/product';
import {createProduct, getOneProduct, getProducts }from './handlers/product'
const router = Router() //our API

/**
 * Prodcut
 */
router.get('/product', getProducts)

router.get('/product/:id',body('id').exists(),errorsHandler,getOneProduct)

router.put('/product/:id', body('name').isString(),errorsHandler, (req,res) => {
    const errors = validationResult(req);

})

router.post('/product',body('name').isString(),errorsHandler, createProduct)

router.delete('/product:id',body('id').exists(),errorsHandler,deleteProduct)

/**
 * id
 */
router.get('/update',() => {
    
})


router.get('/update:id',() => {
    
})

router.put('/update:id',
    body('title').optional(),
    body('body').optional(),
    body('status').isIn(['IN_PROGRESS','SHIPPED','DEPRECATED']),
    body('version').optional(),
    errorsHandler,
    () => {
    
})

router.post('/update',
body('title'),
body('body').exists().isString(),
body('productId').exists().isString(),
errorsHandler,
() => {
    
})

router.delete('/update:id',() => {
    
})

/**
 * id
 */
router.get('/updatepoint',() => {
    
})


router.get('/updatepoint:id',() => {
    
})

router.put('/updatepoint:id',
body('name').optional().isString(),
body('description').optional().isString(),
errorsHandler,
() => {
    
})

router.post('/updatepoint',
body('name').isString(),
body('description').isString(),
body('updateId').exists().isString(),
errorsHandler,
() => {
    
})

router.delete('/updatepoint:id',() => {
    
})


export default router