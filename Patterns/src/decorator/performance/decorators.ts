import dayjs from "dayjs";

/**
 * Method decorator
 *  - Decorator factory
 * @param value
 * @returns function
 */
export function enumerable() {
  return function (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
  ) {
    const value = descriptor.value;
    // descriptor.value is an async function. we replace this with our own custom method
    descriptor.value = async function (...data: any[]) {
      /*  remember, *this* references the local object, in this case the function
          the .apply method calls a function with a given this value and an array or list of arguments
      */
      const start = dayjs().millisecond();

      const out = await value.apply(this, data);

      const end = dayjs().millisecond();

      const diff = end - start;
      console.log({ propertyKey, diff });
      return out;
    };
  };
}
