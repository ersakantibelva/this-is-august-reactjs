const errorHandler = (err, req, res, next) => {
  let code = 500
  let message = 'Internal server error'

  const badReq = [
    "Email is required",
    "Password is required",
    "Description is required",
    "Price is required",
    "Main image URL is required"
  ]

  const notAuth = ["Invalid token", "Invalid email/password"]
  console.log(err);
  if(badReq.includes(err.message)) {
    code = 400
    message = err.message
  } else if( notAuth.includes(err.message) ) {
    code = 401
    message = err.message
  } else if(['SequelizeValidationError', "SequelizeUniqueConstraintError"].includes(err.name)) {
    code = 400
    message = err.errors[0].message
  } else if (err.name == "JsonWebTokenError") {
    code = 401
    message = "Invalid token"
  }

  res.status(code).json({ message })
}

module.exports = errorHandler