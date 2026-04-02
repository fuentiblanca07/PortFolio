export const delayImport = (importFn, ms = 1500) => {
  return new Promise(resolve => {
    setTimeout(() => {
      importFn().then(resolve);
    }, ms); // 1.5s delay
  });
};