import { customerStub } from "../test/stubs/customer.stub";
import { BadRequestException } from "@nestjs/common";

const customers = new Map();

export const CustomerService = jest.fn().mockReturnValue({
  create: jest.fn().mockImplementation((dto) => {
    if (customers.has(dto.email)) {
      throw new BadRequestException("Bunday foydalanuvchi mavjud");
    }
    const customer = { id: 1, ...dto };
    customers.set(dto.email, customer);
    return customer;
  }),
  findAll: jest.fn().mockResolvedValue([customerStub()]),
  findOne: jest.fn().mockResolvedValue(customerStub()),
  update: jest.fn().mockImplementation((id, dto) => {
    const updated = { ...customerStub(), ...dto };
    return [1, [updated]];
  }),
  remove: jest.fn().mockResolvedValue({ message: "Foydalanuvchi o'chirildi" }),
  findCustomerByEmail: jest.fn().mockImplementation((email) => {
    return customers.get(email);
  }),
});
