// /post/:id/:name
function compilePath(path) {
  let regStr = `^${path}$`;
  const params = [];
  regStr = regStr.replace(/:(\w+)/g, function (_, name) {
    params.push(name);
    return "([^\\/]+)";
  });
  const matcher = new RegExp(regStr);

  return [matcher, params];
}

const [matcher, params] = compilePath("/post/:id/:name");

console.log(matcher);
console.log(params);
