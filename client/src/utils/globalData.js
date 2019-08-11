import Taro from '@tarojs/taro'


// SDKVersion: "2.0.4",
// batteryLevel:100,
// benchmarkLevel:1,
// brand:"devtools",
// errMsg:"getSystemInfo:ok",
// fontSizeSetting:16,
// language:"zh_CN",
// model:"iPhone 5",
// pixelRatio:2,
// platform:"devtools",
// screenHeight:568,
// screenWidth:320,
// statusBarHeight:20,
// system:"iOS 10.0.1",
// version:"6.6.3",
// windowHeight:568,
// windowWidth:320,

// object 转 string
// function obj2string(o){
//     var r=[];
//     if(typeof o=="string"){
//      return"\""+o.replace(/([\'\"\\])/g,"\\$1").replace(/(\n)/g,"\\n").replace(/(\r)/g,"\\r").replace(/(\t)/g,"\\t")+"\"";
//     }
//     if(typeof o=="object"){
//      if(!o.sort){
//       for(var i in o){
//        r.push(i+":"+obj2string(o[i]));
//       }
//       if(!!document.all&&!/^\n?function\s*toString\(\)\s*\{\n?\s*\[native code\]\n?\s*\}\n?\s*$/.test(o.toString)){
//        r.push("toString:"+o.toString.toString());
//       }
//       r="{"+r.join()+"}";
//      }else{
//       for(var i=0;i<o.length;i++){
//        r.push(obj2string(o[i]))
//       }
//       r="["+r.join()+"]";
//      }
//      return r;
//     }
//     return o.toString();
//    }



let appSystem = Taro.getSystemInfoSync()
let screenHeight = appSystem.screenHeight
let screenWidth = appSystem.screenWidth
let platform = appSystem.platform

// 通过原生胶囊的位置判断navbar的高度
let menuButtonBoundingRect = Taro.getMenuButtonBoundingClientRect()
let navBarHeight = menuButtonBoundingRect.bottom + 8


export default {
    appSystem: appSystem,
    screenHeight: screenHeight,
    screenWidth: screenWidth,
    H: screenHeight,
    W: screenWidth,
    navBarHeight: navBarHeight,
    platform: platform,
    menuButtonBoundingRect,
}