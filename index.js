const testVar = {}

function testFunc() {
  return "hi"
}

const superbowlWin = (arr) => {
  let year;
  arr.find(obj => {
    if (obj["result"] === "W") {
      year = obj.year;
    }
  })
  return year;
}