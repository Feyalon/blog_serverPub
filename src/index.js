import Post from './Actions/Post.js';
import express from 'express';
import mongoose from 'mongoose';
import router from './Router/router.js';
import cors from 'cors';

const uri = '';
const PORT = process.env.PORT || 4000;

const app = express();
app.use(express.json());
app.use('/api', cors(), router);
app.use(cors({ credentials: true }));

app.get('/', (req, res) => {
  res.send('Hello world');
});

async function startApp() {
  try {
    await mongoose.connect(uri, {
      useUnifiedTopology: true,
      useNewUrlParser: true
    });
    app.listen(PORT, () => {
      console.log('server started on port: localhost:4000');
    });
  } catch (e) {
    console.log(e);
  }
}
startApp();
