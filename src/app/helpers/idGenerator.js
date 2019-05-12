export const getID = (()=> {
  let count = 0;
  return () => ++count
})();
