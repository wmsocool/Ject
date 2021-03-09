var json = {
  '/api/getData get 1': {
    result: true
  }
}
import Mock from 'mockjs'
for (const key in json) {
  var keys = key.split(' ')
  var k = new RegExp(keys[0])
  if (keys[2] == 1) {
    Mock.mock(k, keys[1], function(option) {
      // console.log(option, json[key]);
      return json[key]
    })
  }
}
exports.name = json
