import {Router} from 'express'
import {body, oneOf, validationResult} from 'express-validator'
import {errorsHandler} from './modules/middlewares'

const router = Router() //our API

/**
 * Prodcut
 */
router.get('/product',(req,res) => {
    res.json({message:req.secret})
})

router.get('/product/:id',body('id').exists(),errorsHandler,(req,res) => {

})

router.put('/product/:id', body('name').isString(),errorsHandler, (req,res) => {
    const errors = validationResult(req);

})

router.post('/product',body('name').isString(),errorsHandler,(req,res) => {
    
})

router.delete('/product:id',body('id').exists(),errorsHandler,(req,res) => {

})

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