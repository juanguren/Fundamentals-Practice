import { enumerable } from "./decorators";

const delay = <T>(time: number, data: T): Promise<T> =>
  new Promise((resolve) =>
    setTimeout(() => {
      resolve(data);
    }, time)
  );

class Users {
  @enumerable()
  async getUsers() {
    return await delay(1000, []);
  }
  @enumerable()
  async getUser(id: number) {
    return await delay(50, {
      id: `user:${id}`,
    });
  }
}

export async function decoratorTest() {
  const users = new Users();

  const user = await users.getUser(22);
  console.log(`Got ${JSON.stringify(user)}`);

  await users.getUser(42);

  await users.getUsers();
}
