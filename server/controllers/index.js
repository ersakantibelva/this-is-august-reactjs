const { User, Category, Product, Image, sequelize } = require('../models')
const { compareHash, hashPass } = require('../helpers/bcrypt')
const { createToken } = require('../helpers/jwt')
const { Op } = require('sequelize')

class Controller {
  static async login(req, res, next) {
    try {
      const { email, password } = req.body
      if (!email) throw { message: "Email is required" }
      if (!password) throw { message: "Password is required" }

      const user = await User.findOne({
        where: { email }
      })
      if (!user) throw { message: "Invalid email/password" }

      const valid = compareHash(password, user.password)
      if(!valid) throw { message: "Invalid email/password" }

      const access_token = createToken({ id: user.id })

      res.status(200).json({ access_token })
    } catch (error) {
      next(error)
    }
  }

  static async register(req, res, next) {
    const t = await sequelize.transaction()

    try {
      const { username, email, password, phoneNumber, address } = req.body
      if (!email) throw { message: "Email is required" }
      if (!password) throw { message: "Password is required" }

      const hashed = hashPass(password)

      const user = await User.create({
        username,
        email,
        password: hashed,
        role: 'Admin',
        phoneNumber,
        address
      }, {
        transaction: t
      })

      t.commit()

      res.status(201).json({ message: `User with email ${user.email} has been registered` })
    } catch (error) {
      await t.rollback()
      next(error)
    }
  }

  static async showProducts(req, res, next) {
    try {
      const { search } = req.query

      const options = {
        order: [["id", "ASC"]],
        include: [ User, Category, Image ]
      }

      if(search) {
        options.where = {
          name: {
            [Op.iLike]: `%${search}%`
          }
        }
      }

      const products = await Product.findAll(options)

      res.status(200).json(products)
    } catch (error) {
      next(error)
    }
  }

  static async addProduct(req, res, next) {
    const t = await sequelize.transaction()

    try {
      const { name, description, price, mainImg, categoryId, images } = req.body
      if(!name) throw { message: "Name is required" }
      if(!description) throw { message: "Description is required" }
      if(!price) throw { message: "Price is required" }
      if(!mainImg) throw { message: "Main image URL is required" }

      const slug = name.toLowerCase().replaceAll(" ", "-").replace("---", "-")
      
      const product = await Product.create({
        name,
        slug,
        description,
        price,
        mainImg,
        categoryId,
        authorId: req.user.id
      }, {
        transaction: t
      })

      images.map(el => {
        el.productId = product.id
        return el
      })

      const image = await Image.bulkCreate(images, {
        validate: true,
        transaction: t
      })

      t.commit()
      res.status(200).json({ message: `Product ${name} has been added with id ${product.id}` })
    } catch (error) {
      t.rollback()
      next(error)
    }
  }

  static async showProduct(req, res, next) {
    try {
      const { productId } = req.params

      const product = await Product.findByPk(productId, {
        include: [ User, Category, Image ]
      })
      
      res.status(200).json(product)
    } catch (error) {
      next(error)
    }
  }

  static async editProduct(req, res, next) {
    const t = await sequelize.transaction()

    try {
      const { productId } = req.params
      const { name, description, price, mainImg, categoryId, images } = req.body
      if(!name) throw { message: "Name is required" }
      if(!description) throw { message: "Description is required" }
      if(!price) throw { message: "Price is required" }
      if(!mainImg) throw { message: "Main image URL is required" }

      let product = await Product.findByPk(productId)
      if(!product) throw { message: 'Data is not found' }

      const slug = name.toLowerCase().replaceAll(" ", "-").replace("---", "-")
      
      product = await Product.update({
        name,
        slug,
        description,
        price,
        mainImg,
        categoryId
      }, {
        where: { id: productId },
        transaction: t
      })

      images.map(el => {
        el.productId = productId
        return el
      })

      await Image.bulkCreate(images, {
        updateOnDuplicate: ["imgUrl"],
        transaction: t
      })

      const imagesDb = await Image.findAll({
        where: {
          productId
        },
        attributes: ["imgUrl"],
        transaction: t
      })

      const imgUrlDb = imagesDb.map(el => {
        return el.get("imgUrl")
      })

      const imgUrlReq = images.map(el => {
        return el.imgUrl
      })

      const deleteImg = imgUrlDb.filter(el => !imgUrlReq.includes(el))

      if(deleteImg.length) {
        await Image.destroy({
          where: {
            imgUrl: {
              [Op.in]: deleteImg
            }
          },
          transaction: t
        })
      }

      t.commit()
      res.status(200).json({ message: `Product ${product.name} has been updated` })
    } catch (error) {
      t.rollback()
      next(error)
    }
  }

  static async deleteProduct(req, res, next) {
    const t = await sequelize.transaction()
    
    try {
      const { productId } = req.params
      
      const product = await Product.findByPk(productId)
      if(!product) throw { message: 'Data is not found' }

      await Product.destroy({
        where: {
          id: productId
        },
        transaction: t
      })

      t.commit()
      res.status(200).json({ message: `Product ${product.name} has been deleted` })
    } catch (error) {
      t.rollback()
      next(error)
    }
  }

  static async showCategories(req, res, next) {
    try {
      const categories = await Category.findAll()
      
      res.status(200).json(categories)
    } catch (error) {
      next(error)
    }
  }

  // static async showProducts(req, res, next) {
  //   try {
      
  //     res.status(200).json("ok")
  //   } catch (error) {
  //     next(error)
  //   }
  // }

  static showTask(req, res, next) {
    res.send('Hello World!')
  }
}

module.exports = Controller