console.log("hello world");

function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };
  this.getDefaultLocation = function () {
    return defaultLocation;
  };
  this.draw = function () {
    console.log("draw");
  };

  Object.defineProperties(this, "defaultLocation", {
    get: function ()
    {
      return defaultLocation;
  } });
}

const circle = new Circle(10);
circle.getDefaultLocation;

for (let key in circle) {
  if (typeof circle[key] !== "Number") console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

if ("radius" in circle) console.log("Circle has a radius.");
