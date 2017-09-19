// @flow

export function cloneObject<T: { [key: string]: mixed }>(obj: T): $Shape<T> {
  const clone = {};

  Object.keys(obj).forEach((key) => {
    clone[key] = obj[key];
  });

  return ((clone: any): typeof obj);
}
