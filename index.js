console.log("hello world");

function Circle(radius) {
  this.radius = radius;

  let defaultLocation = { x: 0, y: 0 };
 
  this.getDefaultLocation = function ()
  {
    return defaultLocation;
  };
  this.draw = function () {
    console.log("draw");
  };

  Object.defineProperties(this, "defaultLocation", {
    get: function ()
    {
      return defaultLocation;
    },
    set: function (value)
    {
      if (!value.x || !value.y)
        throw new Error("Invalid Location")
      defaultLocation = value
    }
  });
}

const circle = new Circle(10);
circle.getDefaultLocation;

for (let key in circle) {
  if (typeof circle[key] !== "Number") console.log(key, circle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

if ("radius" in circle) console.log("Circle has a radius.");

function Stopwatch()
{
  let x = 0
}

function Stopwatch() {
  this.startTime = null;
  this.isRunning = false;
  this.elapsedTime = 0;

  this.start = () => {
    if (this.isRunning) {
      throw new Error("Stopwatch is already running!");
    }
    this.isRunning = true;
    this.startTime = new Date(); // Capture start time
  };

  this.stop = () => {
    if (!this.isRunning) {
      throw new Error("Stopwatch is not running!");
    }
    this.isRunning = false;
    const endTime = new Date();
    this.elapsedTime += endTime.getTime() - this.startTime.getTime(); // Calculate elapsed time
    this.startTime = null;
  };

  this.reset = () => {
    this.isRunning = false;
    this.elapsedTime = 0;
    this.startTime = null;
  };

  this.duration = () => {
    if (this.isRunning) {
      // Calculate duration considering ongoing time
      return (
        this.elapsedTime + (new Date().getTime() - this.startTime.getTime())
      );
    } else {
      return this.elapsedTime;
    }
  };
}