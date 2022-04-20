export const asyncMethod = (resolved: boolean) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (resolved) resolve("Hello World");
      reject("Error");
    }, 1000);
  });
};
