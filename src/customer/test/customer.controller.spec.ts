import { JwtService } from "@nestjs/jwt";
import { CustomerController } from "../customer.controller";
import { CustomerService } from "../customer.service";
import { Test } from "@nestjs/testing";
import { CreateCustomerDto } from "../dto/create-customer.dto";
import { customerStub } from "./stubs/customer.stub";
import { Customer } from "../model/customer.model";

jest.mock("../customer.service");

describe("CustomerController", () => {
  let customerController: CustomerController;
  let customerService: CustomerService;

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      controllers: [CustomerController],
      providers: [CustomerService, JwtService],
    }).compile();
    customerController = moduleRef.get(CustomerController);
    customerService = moduleRef.get(CustomerService);
    jest.clearAllMocks();
  });
  it("Customer controller should be defined", () => {
    expect(customerController).toBeDefined();
  });
  it("Customer service should be defined", () => {
    expect(customerService).toBeDefined();
  });

  describe("create customer", () => {
    describe("when create customer is called", () => {
      let customer: Customer;
      let createCustomerDto: CreateCustomerDto;
      beforeAll(async () => {
        createCustomerDto = {
          first_name: customerStub().first_name,
          last_name: customerStub().last_name,
          email: customerStub().email,
          phone: customerStub().phone,
          hashed_password: customerStub().hashed_password,
          birth_date: customerStub().birth_date,
          gender: customerStub().gender,
          langId: customerStub().langId,
        };

        customer = await customerController.create(createCustomerDto);
        console.log(customer);
      });
      test("then it should call customerService", () => {
        expect(customerService.create).toHaveBeenCalledWith(createCustomerDto);
      });
      it("then it should return customer", () => {
        expect(customer).toEqual(customerStub());
      });
    });
  });

  describe("find all customer", () => {
    describe("when find all customer is called", () => {
      let customer: Customer[];
      beforeAll(async () => {
        customer = await customerController.findAll();
      });
      test("then it should call customerServices findAll method", () => {
        expect(customerService.findAll).toHaveBeenCalled();
      });

      test("then it should return customer", () => {
        expect(customer).toEqual([customerStub()]);
      });
    });
  });

  describe("find one customer", () => {
    describe("when find one customer is called", () => {
      let customer: Customer | null;
      beforeAll(async () => {
        customer = await customerController.findOne("1");
      });
      test("then it should call customerServices findOne method", () => {
        expect(customerService.findAll).toHaveBeenCalledWith();
      });

      test("then it should return a customer", () => {
        expect(customer).toEqual(customerStub());
      });
    });
  });
});
