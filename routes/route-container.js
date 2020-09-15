const adminRoutes = require('../routes/admin_routes/admin')
const userRoutes =require('../routes/admin_routes/user')
const invalidRouter = require('../routes/invalid-routes/invalid-routes')
const shopRoutes = require('../routes/shop-routes/home')

const allRoutes = [adminRoutes,userRoutes,invalidRouter,shopRoutes]

module.exports = allRoutes