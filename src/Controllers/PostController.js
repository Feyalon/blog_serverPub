import Post from '../Actions/Post.js';
import { htmlToText } from 'html-to-text';
class PostController {
  async create(req, res) {
    try {
      const { title, content, day, month, year, image, tag } = req.body;

      const createPost = await Post.create({
        title,
        content,
        day,
        month,
        year,
        image,
        tag
      });
      res.status(200).json(createPost);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getall(req, res) {
    try {
      const sorted = {
        day: -1
      };
      const posts = await Post.find().sort(sorted);

      return res.json(posts);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async getOne(req, res) {
    const id = req.params.id;

    const post = await Post.findById({
      _id: id
    }).exec();
    return res.json(post);
  }
  async getOneByName(req, res) {
    const name =req.params.name
    const post = await Post.find(
      {
        tag: name
      }
    )
    return res.json(post)
  }

  async update(req, res) {
    try {
      const post = req.params.id;
      const updatedPost = await Post.updateOne(
        {
          _id: post
        },
        {
          title: req.body.title,
          content: req.body.content,
          image: req.body.image,
          tag: req.body.tag,
          date: req.body.date
        }
      );
      return res.json(updatedPost);
    } catch (e) {
      res.status(500).json(e);
    }
  }
  async delete(req, res) {
    try {
      const id = req.params.id;
      if (!post._id) {
        res.status(400).json({ message: 'id не указан' });
      }
      const post = await Post.findByIdAndDelete({
        _id: id
      });
      return res.json(post);
    } catch (e) {
      res.status(500).json(e);
    }
  }
}
export default new PostController();
