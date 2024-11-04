import jsonServer from "json-server";

const server = jsonServer.create();
const router = jsonServer.router("data/cities.json");
const middlewares = jsonServer.defaults();

// Apply middlewares and delay
server.use(middlewares);
server.use((req, res, next) => {
  setTimeout(next, 500); // 500 ms delay
});
server.use(router);

server.listen(9000, () => {
  console.log("JSON Server is running on port 9000");
});
