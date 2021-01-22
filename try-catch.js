try {
  var a = null;
  if (!a) {
    throw "A is null";
  }
} catch (err) {
  console.log(err);
}
