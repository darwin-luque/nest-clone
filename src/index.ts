import express from 'express';
import { AppRouter } from './app-router';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(AppRouter.getInstance());

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
