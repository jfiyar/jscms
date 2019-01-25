const router = new (require('koa-router'))();

const controller = require('./controller');

router.prefix('/api/admin');
router.post("/login", controller.login);
router.post("/getSelfInfo", controller.getSelfInfo);

module.exports = router;