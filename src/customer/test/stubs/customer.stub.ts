export const customerStub = () => {
  return {
    id: 1,
    first_name: "user1",
    last_name: "user1",
    phone: "user1",
    email: "user@mail.uz",
    hashed_password: "12345678",
    birth_date: `${new Date()}`,
    gender: "erkak",
    langId: 1,
  };
};
