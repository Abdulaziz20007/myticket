import { INestApplication, ValidationPipe } from "@nestjs/common";
import { Test, TestingModule } from "@nestjs/testing";
import { AppModule } from "../src/app.module";
import * as request from "supertest";
import { customerStub } from "../src/customer/test/stubs/customer.stub";
import { JwtService } from "@nestjs/jwt";

jest.mock("../src/auth/auth.service");
jest.mock("../src/customer/customer.service");

describe("Mijoz e2e", () => {
  let app: INestApplication;
  let token: string;
  let customerId: number;
  let jwtService: JwtService;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(JwtService)
      .useValue({
        sign: () => "test_token_123",
        verify: () => ({
          id: 1,
          email: "testadmin@example.com",
          roles: ["ADMIN"],
          is_active: true,
        }),
      })
      .compile();

    app = moduleFixture.createNestApplication();
    app.useGlobalPipes(new ValidationPipe());
    await app.init();

    await request(app.getHttpServer()).post("/auth/signup").send({
      name: "Test Admin",
      email: "testadmin@example.com",
      password: "StrongPass123!",
      value: "admin",
    });

    const signInResponse = await request(app.getHttpServer())
      .post("/auth/signin")
      .send({
        email: "testadmin@example.com",
        password: "StrongPass123!",
        value: "admin",
      });

    token = "test_token_123";
    customerId = 1;
  });

  describe("Create Customer", () => {
    it("/customer (POST) --> 201 Created", async () => {
      const createCustomerDto = {
        first_name: customerStub().first_name,
        last_name: customerStub().last_name,
        phone: customerStub().phone,
        email: "newcustomer@mail.uz",
        password: "StrongPass123!",
        birth_date: new Date().toISOString(),
        gender: customerStub().gender,
        lang_id: 1,
      };

      const response = await request(app.getHttpServer())
        .post("/customer")
        .send(createCustomerDto)
        .expect("Content-Type", /json/)
        .expect(201);

      expect(response.body).toMatchObject({
        id: 1,
        first_name: createCustomerDto.first_name,
        last_name: createCustomerDto.last_name,
        phone: createCustomerDto.phone,
        email: createCustomerDto.email,
        gender: createCustomerDto.gender,
        birth_date: expect.any(String),
      });
    });

    it("/customer (POST) --> 400 on Duplicate Email", async () => {
      const duplicateCustomerDto = {
        first_name: "Another",
        last_name: "Customer",
        phone: "123456789",
        email: "newcustomer@mail.uz",
        password: "StrongPass123!",
        birth_date: new Date().toISOString(),
        gender: "erkak",
        lang_id: 1,
      };

      const response = await request(app.getHttpServer())
        .post("/customer")
        .send(duplicateCustomerDto)
        .expect("Content-Type", /json/)
        .expect(400);

      expect(response.body).toMatchObject({
        statusCode: 400,
        message: "Bunday foydalanuvchi mavjud",
      });
    });
  });

  describe("Get Customers", () => {
    it("/customer (GET) --> 200 OK", async () => {
      const response = await request(app.getHttpServer())
        .get("/customer")
        .set("Authorization", `Bearer ${token}`)
        .expect("Content-Type", /json/)
        .expect(200);

      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body).toEqual([customerStub()]);
    });

    it("/customer (GET) --> 401 Unauthorized", () => {
      return request(app.getHttpServer())
        .get("/customer")
        .expect("Content-Type", /json/)
        .expect(401);
    });
  });

  describe("Get Single Customer", () => {
    it("/customer/:id (GET) --> 200 OK", () => {
      return request(app.getHttpServer())
        .get(`/customer/${customerId}`)
        .set("Authorization", `Bearer ${token}`)
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
          expect(response.body).toMatchObject({
            id: customerId,
            email: expect.any(String),
          });
        });
    });

    it("/customer/:id (GET) --> 401 Unauthorized", () => {
      return request(app.getHttpServer())
        .get(`/customer/${customerId}`)
        .expect("Content-Type", /json/)
        .expect(401);
    });
  });

  describe("Update Customer", () => {
    it("/customer/:id (PATCH) --> 200 OK", () => {
      const updateCustomerDto = {
        first_name: "Updated Name",
      };

      return request(app.getHttpServer())
        .patch(`/customer/${customerId}`)
        .set("Authorization", `Bearer ${token}`)
        .send(updateCustomerDto)
        .expect("Content-Type", /json/)
        .expect(200)
        .then((response) => {
          expect(response.body).toMatchObject({
            id: customerId,
            first_name: updateCustomerDto.first_name,
          });
        });
    });

    it("/customer/:id (PATCH) --> 401 Unauthorized", () => {
      return request(app.getHttpServer())
        .patch(`/customer/${customerId}`)
        .send({ first_name: "Updated Name" })
        .expect("Content-Type", /json/)
        .expect(401);
    });
  });

  describe("Delete Customer", () => {
    it("/customer/:id (DELETE) --> 200 OK", () => {
      return request(app.getHttpServer())
        .delete(`/customer/${customerId}`)
        .set("Authorization", `Bearer ${token}`)
        .expect(200);
    });

    it("/customer/:id (DELETE) --> 401 Unauthorized", () => {
      return request(app.getHttpServer())
        .delete(`/customer/${customerId}`)
        .expect("Content-Type", /json/)
        .expect(401);
    });
  });

  afterAll(async () => {
    await app.close();
  });
});
