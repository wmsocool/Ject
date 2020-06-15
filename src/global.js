export function isNotEmpty(data){
    var isNotEmpty = false
      if (typeof data == "string" && data != "" ) {
        isNotEmpty = true;
      } else if (typeof data == "number" && data != "") {
        isNotEmpty = true;
      } else if (typeof data == "array" && data.length > 0) {
        isNotEmpty = true;
      } else if (typeof data == "object") {
        var o = new RegExp(/^\{.*\}$/)
        var a = new RegExp(/^\[.*\]$/)
        if (JSON.stringify(data).match(a) && data.length > 0) {
            isNotEmpty = true;
        }
        if (JSON.stringify(data).match(o) && JSON.stringify(data) != "{}") {
            isNotEmpty = true;
        }
    }
    return isNotEmpty
}

//解析数据
export function parseData(res){
    if(typeof(res.data)=="string"&&res.data.indexOf("<")==0){
        document.write(res.data)
    }
    if(!res||res.data=="[]"){
        return false
    }
    if(res.data.retCode == "000000"){
        var data = res.data.element || []
        if(typeof(data)=="string"){
            try {
                data = JSON.parse(data)
            }
            catch(e) {
                console.log(e)
            }
        }
        return data
    }else{
    	this.$message({
            dangerouslyUseHTMLString:true,
        	message: res.data.retMsg,
        	type: 'error'
        });
        return false
    }
}
//比较删除
export function compareArrRemove(arr = [], arr2 = [], key){
  let arr2Keys = arr2.map(item => item[key]);
  let newArr = arr.filter(item => {
    return arr2Keys.indexOf(item[key]) < 0;
  });
  return newArr;
}

//数组去重
export function uniqueArr(arr = [], key){
  if(key == null){
    return arr;
  }
  let tem = [], newArr = [];
  arr.forEach(item => {
    if(tem.indexOf(item[key]) < 0){
      newArr.push(item);
      tem.push(item[key]);
    }
  });
  return newArr;
}

export function uniqueUser(arr){
	let newArr = [];
	let idArr = [];
  arr.forEach(item => {
    if(idArr.indexOf(item.userId) == -1){
      newArr.push(item);
      idArr.push(item.userId);
    }
  });
  return newArr;
}

// debounce 函数
export function debounce(fn, delay) {
    // 维护一个 timer
    let timer = null;

    return function () {
        // 通过 ‘this’ 和 ‘arguments’ 获取函数的作用域和变量
        let context = this;
        let args = arguments;

        clearTimeout(timer);
        timer = setTimeout(function () {
            fn.apply(context, args);
        }, delay);
    }
}
//判断当前数据是否在数组中
export function indexOfArr(str,arr,key){
  let temp = arr.map(item => item[key]);
  return temp.indexOf(str) > -1;
}
//copyJson
export function copyJson(jsonObject){
  return JSON.parse(JSON.stringify(jsonObject))
}
//排序
export function keysort(propertyName){
    return function(obj1, obj2){
        var val1 = obj1[propertyName];
        var val2 = obj2[propertyName];
        if (val1 < val2){
            return -1;
        } else if (val1 > val2) {
            return 1;
        } else {
            return 0;
        }
    };
}