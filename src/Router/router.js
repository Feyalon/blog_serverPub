import Router from 'express';
import PostController from '../Controllers/PostController.js';
const router = new Router();

router.post('/create', PostController.create);
router.get('/posts', PostController.getall);
router.get('/post/:id', PostController.getOne);
router.get('/posts/:name', PostController.getOneByName);
router.put('/post/:id', PostController.update);
router.delete('/posts/:id', PostController.delete);

export default router;
