import app from "./app";

const port = 9000;

const startServer = async () => {
  try {
    app.listen(port, () => {});
    console.log("Server is running on port", port);
  } catch (error) {
    console.error("Error al iniciar el servidor", error);
  }
};

startServer();
