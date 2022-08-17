let receivesAFunction = (nfunction) => console.log(nfunction());
receivesAFunction(function () {
  "This was a good one to learn";
});
const returnsANamedFunction = () => {
  let naming = function () {};
  return naming;
};
const returnsAnAnonymousFunction = () => {
  return function () {};
};
