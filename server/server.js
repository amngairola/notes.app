import app from "./app.js";
import connectDB from "./db/db.js";

const PORT = process.env.PORT | 3000;

async function startServer() {
  //await connectDB();

  app.listen(PORT, () => {
    console.log(`server is running on PORT ${PORT}`);
  });

  app.on("error", () => {
    console.error("unable to start server");
  });
}

startServer();
