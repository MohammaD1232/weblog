// isAuth.js
const isAuth = (req, res, next) => {
  // Passport sets the isAuthenticated method on the request object
  if (req.isAuthenticated()) {
    return next(); // User is authenticated, continue with the next middleware
  }
  // If not authenticated, you may choose to redirect or handle it in some way
  // Adjust the redirect path as needed
  return res.redirect("/users/signin");

};

module.exports = isAuth;
