export const AuthService = jest.fn().mockReturnValue({
  signUp: jest.fn().mockResolvedValue({
    token: "test_token_123",
    user: {
      id: 1,
      name: "Test Admin",
      email: "testadmin@example.com",
      value: "admin"
    }
  }),
  signIn: jest.fn().mockResolvedValue({
    token: "test_token_123"
  })
}); 