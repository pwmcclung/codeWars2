function balancedNum(number)
{
 const n = number.toString();
  const length = Math.round(n.length / 2);
  const reduce = arg => arg.split("").reduce((a, b) => a + parseFloat(b), 0);
  if (n.length < 3) return "Balanced";
  if (n.length % 2 == 0)
    return reduce(n.slice(0, length - 1)) === reduce(n.slice(length + 1))
      ? "Balanced"
      : "Not Balanced";
  return eval(n.slice(0, length - 1) + "===" + n.slice(length))
    ? "Balanced"
    : "Not Balanced";
}