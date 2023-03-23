const secret = "test";

const obj = {
  p1: 10,
  p2: 20,
  f1() {},
  f2: () => {},
  [secret]: '#$%^&&**',
};

console.log(obj.test)