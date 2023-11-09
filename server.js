
import app from "./app.js";
const port = 5000;

async function bootstrap() {
  app.listen(port, () => {
    console.log(`Server running on port `);
  });
}

bootstrap();
