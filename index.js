const testVar = {}

function testFunc() {
  return "hi"
}

function superbowlWin(record){
  let year 
  record.find(function(recordObj){
    if(recordObj["result"] === "W"){
      year = recordObj.year
    }
  })
  return year
} 