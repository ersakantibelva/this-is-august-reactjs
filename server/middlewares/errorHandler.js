const errorHandler = (err, req, res, next) => {
  let code = 500
  let message = 'Internal server error'
  console.log(err);
  if(err.message == "Email is required" || err.message == "Password is required" ) {
    code = 400
    message = err.message
  } else if( ["Invalid token", "Invalid email/password"].includes(err.message) ) {
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