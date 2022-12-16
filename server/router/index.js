const Controller = require('../controllers')
const router = require('express').Router()

router.post('/login', Controller.login)

router.post('/register', Controller.showTask)

router.get('/products', Controller.showTask)
router.post('/products', Controller.showTask)
router.get('/products/:productId', Controller.showTask)
router.put('/products/:productId', Controller.showTask)
router.delete('/products/:productId', Controller.showTask)

router.get('/categories', Controller.showTask)
router.post('/categories', Controller.showTask)
router.get('/categories/:categoryId', Controller.showTask)
router.put('/categories/:categoryId', Controller.showTask)
router.delete('/categories/:categoryId', Controller.showTask)

router.get('/pub/products', Controller.showTask)

module.exports = router