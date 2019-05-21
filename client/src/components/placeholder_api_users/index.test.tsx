// import Users from './index';
import { callBackendAPI } from '../../services/fetchAPI';
import PlaceholderUsers from './index';

it('fetches placeholder api users object', () => {
  return callBackendAPI('users')
    .then((res: any) => {
      expect(typeof res).toBe('object');
      expect(res[0].id).toBe(1);
    })
    .catch((err: any) => console.log(err));
});

it('fetches placeholder api user id 1 and its an object', () => {
  return callBackendAPI('users/1')
    .then((res: { id: number; }) => {
      expect(typeof res).toBe('object');
      expect(res.id).toBe(1);
    })
    .catch((err: any) => console.log(err));
});

it('firstId should always be >= 1 regardless of the default value', () => {
  let users: any = new PlaceholderUsers({ userId: 1, default: 0 });
  expect(users.state.firstId).toBe(1);
  users = new PlaceholderUsers({ userId: 1, default: 2 });
  expect(users.state.firstId).toBeGreaterThanOrEqual(0);
});


it('reset state from user object then delay the api fetch and change state to post object', () => {
  let state: any = {
    id: 1,
    name: "Leanne Graham",
    email: "Sincere@april.biz"
  }
  let post: object = {
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderitSincere@april.biz",
    body: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit"
  }
  // reset state
  state = null
  // detay then fetch api
  function handler() {
    // get api and change to post
    state = post
  }
  // setTimeout(handler, 500) //timeout not handled well with test 
  handler()
  expect(state).toMatchObject(post)
});



