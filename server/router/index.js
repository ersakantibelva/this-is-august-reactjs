const Controller = require('../controllers')
const authentication = require('../middlewares/authentication')
const router = require('express').Router()

router.post('/login', Controller.login)
router.get('/pub/products', Controller.showTask)

router.use(authentication)

router.post('/register', Controller.register)

router.get('/products', Controller.showProducts)
router.post('/products', Controller.addProduct)
router.get('/products/:productId', Controller.showTask)
router.put('/products/:productId', Controller.showTask)
router.delete('/products/:productId', Controller.showTask)

router.get('/categories', Controller.showTask)
router.post('/categories', Controller.showTask)
router.get('/categories/:categoryId', Controller.showTask)
router.put('/categories/:categoryId', Controller.showTask)
router.delete('/categories/:categoryId', Controller.showTask)


module.exports = router