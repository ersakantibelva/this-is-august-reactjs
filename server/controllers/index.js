const { User, Category, Product, Image, sequelize } = require('../models')
const { compareHash, hashPass } = require('../helpers/bcrypt')
const { createToken } = require('../helpers/jwt')

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

  static showTask(req, res, next) {
    res.send('Hello World!')
  }
}

module.exports = Controller