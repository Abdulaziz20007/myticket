import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import * as request from "supertest";

describe("User e2e", () => {
  let app: INestApplication;
  let token: String;
  beforeAll(async () => {
    const moduleFixiture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();
    app = moduleFixiture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();
    const response = await request(app.getHttpServer())
      .post("/auth/signin")
      .send({ email: "none@none.com", password: "none", value: "admin" });
    token = response.body.token;
    console.log("token", token);
  });
  it("/users (GET) --> 200 OK", () => {
    return request(app.getHttpServer())
      .get("/users")
      .set("Authorization", `Bearer ${token}`)
      .expect("Content-Type", /json/)
      .expect(200);
  });

  it('/users (GET) --> 401 "Unauthorized" error', () => {
    return request(app.getHttpServer())
      .get("/users")
      .expect("Content-Type", /json/)
      .expect(401);
  });

  // it("/auth/signup (POST) --> 201", async () => {
  //   return request(app.getHttpServer())
  //     .post("/auth/signup")
  //     .send({ name: "None", email: "nonee@none.com", password: "none" })
  //     .expect("Content-Type", /json/)
  //     .expect(201)
  //     .then((response) => {
  //       expect(response.body).toMatchObject({
  //         token: expect.any(String),
  //       });
  //     });
  // });

  // it("/auth/signup (POST) --> 400", async () => {
  //   return request(app.getHttpServer())
  //     .post("/auth/signup")
  //     .send({ name: "None", email: "none@none.com", password: "none" })
  //     .expect("Content-Type", /json/)
  //     .expect(400)
  //     .expect({
  //       message: "Bunday foydalanuvchi mavjud",
  //       error: "Bad Request",
  //       statusCode: 400,
  //     });
  // });

  it("/auth/signup (POST) --> 400 on Validation error", async () => {
    return request(app.getHttpServer())
      .post("/auth/signup")
      .send({ name: "None", email: "none@none.com", password: "none" })
      .expect("Content-Type", /json/)
      .expect(400)
      .expect({
        message: ["password is not strong enough"],
        error: "Bad Request",
        statusCode: 400,
      });
  });

  afterAll(async () => {
    await app.close();
  });
});
