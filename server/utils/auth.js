const authMiddleware = (req, res, next) => {
  // Later:
  // 1. Get token from request
  // 2. Verify JWT
  // 3. Find user
  // 4. Attach user to req.user

  // Temporary user for learning CRUD

  next();
};

export default authMiddleware;
