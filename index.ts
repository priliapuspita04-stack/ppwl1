import { Elysia } from "elysia";
const app = new Elysia().listen(3000);


app.get("/", () => "Hello Prilia");


console.log(
  `🦊 Elysia running at http://localhost:${app.server?.port}`
);
app.get("/hello/:name", ({ params }) => {
  return {
    message: `Hallo ${params.name}!`
  };
});



app.post("/login", ({ body }) => {
  const { email, password } = body as {
    email: string;
    password: string;
  };


  return {
    success: true,
    email
  };
});



