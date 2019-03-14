export function flushPromise() {
  return new Promise(resolve => {
    setTimeout(resolve, 0);
  });
}
