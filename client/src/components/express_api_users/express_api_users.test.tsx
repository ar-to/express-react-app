import Users from './express_api_users';


it('fetches express api sample api', () => {
  let data: string = '';
  const users: any = new Users({ userId: 1, default: 1 });
  users.callBackendAPI()
    .then((res: { express: string; }) => {
      data = res.express
      expect(data).toBe("respond with a resource");
    })
    .catch((err: any) => console.log(err));
});
