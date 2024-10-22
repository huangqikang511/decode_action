//Tue Oct 22 2024 12:26:00 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {})();
$(document).ready(function () {
  var _0x40a0db = "token",
    _0x377fab = "PrivatKey",
    _0x4a69bc = "str",
    _0x5683a0 = "hostUrl",
    _0x390c8e = "abc",
    _0x3f064b = "endNum",
    _0x12344a = "reUrl",
    _0x56cca8 = "uvkey",
    _0x40ccfa = "SllNTDIwMjQwOTMw",
    _0x3c7bff = "1AE9F575F4CA622AC081CC530B0F3FD4",
    _0x31dd4d = false,
    _0x4e27af = false,
    _0x4da52c = false,
    _0x1bc47a = "阅读文章正在进行中，请继续！",
    _0x5bb1bb = "https://jylmapi.plsvcrthcs.top",
    _0x4f7947 = _0x389403("priv"),
    _0x4b5444 = _0x389403(_0x5683a0),
    _0x1c7b89 = _0x389403(_0x56cca8),
    _0x3418e7 = _0x5c52b6(_0x4f7947);
  null !== _0x4b5444 && undefined !== _0x4b5444 && false !== _0x4b5444 && "" !== _0x4b5444 && _0x4b5444 !== "localhost" && (_0x5bb1bb = decodeURIComponent(_0x4b5444));
  null !== _0x3418e7 && undefined !== _0x3418e7.hostUrl && false !== _0x3418e7.hostUrl && "" !== _0x3418e7.hostUrl && _0x3418e7.hostUrl !== "localhost" && (console.log("[初始化所使用接口] APIURL=" + _0x5bb1bb + ";外部传入的接口地址APIURL=" + _0x3418e7.hostUrl), _0x5bb1bb = _0x3418e7.hostUrl);
  null !== _0x1c7b89 && undefined !== _0x1c7b89 && false !== _0x1c7b89 && "" !== _0x1c7b89 && (_0x3c7bff = _0x1c7b89);
  null !== _0x3418e7 && undefined !== _0x3418e7 && undefined !== _0x3418e7.privateData && "" !== _0x3418e7.privateData && (_0x4da52c = _0x3418e7.privateData, sessionStorage.setItem(_0x377fab, _0x4da52c));
  null !== _0x3418e7 && undefined !== _0x3418e7 && undefined !== _0x3418e7.token && null !== _0x3418e7.token && "" !== _0x3418e7.token && sessionStorage.setItem(_0x40a0db, _0x3418e7.token);
  console.log("[初始化所使用接口] Priv;解密出来的数据=>", _0x3418e7);
  sessionStorage.setItem(_0x5683a0, _0x5bb1bb);
  var _0x1a9de9 = $("#titleText2"),
    _0x43f076 = $("#timer"),
    _0x36f5a0 = $("#timer2");
  toastr.options = {
    "closeButton": false,
    "debug": false,
    "positionClass": "toast-center-center",
    "onclick": null,
    "showDuration": "300",
    "hideDuration": "1000",
    "timeOut": "1000",
    "extendedTimeOut": "1000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
  };
  $("#mainBtn").click(function () {
    _0x31dd4d = true;
    $("#myModal").hide();
    _0x4f62b1();
  });
  $("#svgBtn").click(function () {
    _0x31dd4d = true;
    $("#myModal").hide();
    _0x4f62b1();
  });
  $("#svgBtn2").click(function () {
    _0x4e27af = true;
    $("#myModal2").hide();
    _0x4f62b1();
  });
  function _0x5c52b6(_0x53c1d8) {
    var _0x30a8ce = atob(_0x53c1d8),
      _0x17db20 = eval("(" + _0x30a8ce + ")");
    if (null !== _0x30a8ce && null !== _0x17db20 && undefined !== _0x17db20) {
      return _0x17db20;
    }
    return null;
  }
  var _0x24c51b = function () {
      var _0x6b1979 = 0,
        _0x255bfa = 0,
        _0x30245a = sessionStorage.getItem(_0x56cca8);
      (!_0x30245a || undefined === _0x30245a) && (_0x30245a = _0x3c7bff);
      var _0x58da1e = parseInt(sessionStorage.getItem("ffb")),
        _0x36fe12 = sessionStorage.getItem("str");
      if (_0x58da1e == 2 || _0x58da1e == 5 || _0x58da1e == 7 || _0x58da1e == 9 || _0x58da1e == 11) {
        _0x6b1979 = _0x58da1e * 12;
        _0x255bfa = _0x58da1e % 5;
      } else {
        if (_0x58da1e == 3 || _0x58da1e == 6 || _0x58da1e == 12 || _0x58da1e == 15 || _0x58da1e == 18) {
          _0x6b1979 = _0x58da1e * 15;
          _0x255bfa = _0x58da1e % 8;
        } else {
          _0x6b1979 = _0x58da1e * 88;
          _0x255bfa = _0x58da1e % 10;
        }
      }
      var _0x1520a2 = md5("_" + _0x6b1979 + "_" + _0x36fe12 + "&MYCODE=" + _0xd85de3),
        _0x3fe8ba = md5(_0x1520a2 + "_RAND_" + _0x255bfa + "&PRIKEY=" + _0x30245a);
      return _0x3fe8ba;
    },
    _0xd85de3 = atob(_0x40ccfa);
  function _0x4f62b1() {
    typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function" && WeixinJSBridge.call("closeWindow");
  }
  function _0x178435(_0x3f8a7c, _0x35174e, _0x16a035) {
    $("#finishNum").text(_0x3f8a7c);
    $("#taskText").text(_0x35174e);
    _0x1a9de9.text(_0x16a035);
    $("#myModal2").show();
    _0x5aa658();
  }
  function _0x389403(_0x48e254) {
    var _0x256dc6 = new RegExp("(^|&)" + _0x48e254 + "=([^&]*)(&|$)"),
      _0x39fa0d = window.location.search.substr(1).match(_0x256dc6);
    if (_0x39fa0d != null) return unescape(_0x39fa0d[2]);
    return null;
  }
  function _0x575916() {
    var _0x11ea23 = 5,
      _0x3e6bf7 = setInterval(function () {
        _0x43f076.text(_0x11ea23);
        --_0x11ea23 < 0 && (clearInterval(_0x3e6bf7), $("#finishNum").text("获取中"), _0x31dd4d == false && ($("#myModal").hide(), _0x4f62b1()));
      }, 1000);
  }
  function _0x5aa658() {
    var _0x3cf628 = 3,
      _0x4a2686 = setInterval(function () {
        var _0x4a5fc8 = parseInt(_0x3cf628 % 60, 10);
        _0x4a5fc8 = _0x4a5fc8 < 3 ? _0x4a5fc8 : _0x4a5fc8;
        _0x36f5a0.text(_0x4a5fc8);
        --_0x3cf628 < 0 && (clearInterval(_0x4a2686), $("#finishNum").text("获取中"), _0x4e27af == false && ($("#myModal2").hide(), _0x4f62b1()));
      }, 1000);
  }
  function _0x294623(_0xd31cf) {
    var _0x57714d = 2000;
    var _0x1e9f5c = parseInt(_0xd31cf);
    var _0x4190ed = _0x1e9f5c % 5;
    _0x4190ed > 0 && (_0x57714d = 2000 + _0x4190ed);
    var _0x3ea99d = parseInt(_0x57714d) + _0x1e9f5c;
    return _0x3ea99d;
  }
  function _0x46864d() {
    console.info("pushHistory");
    var _0x1ded06 = "#" + new Date().getTime();
    history.pushState(history.length + 1, "title", _0x1ded06);
  }
  function _0x54a068() {
    var _0x38fad2 = sessionStorage.getItem(_0x40a0db);
    var _0x55821b = sessionStorage.getItem(_0x390c8e);
    var _0x2d8bbd = sessionStorage.getItem(_0x4a69bc);
    var _0x148e62 = _0x24c51b();
    var _0x18fd4b = sessionStorage.getItem("jump02");
    var _0x3e0a2a = _0x38fad2 + "&startNumber=" + _0x55821b + "&str=" + _0x2d8bbd + "&keys=" + _0x148e62;
    var _0x453b24 = atob(_0x18fd4b) + "?token=" + _0x3e0a2a;
    return _0x453b24;
  }
  function _0x352d95() {
    var _0x44be10 = _0x54a068(),
      _0x234d84 = sessionStorage.getItem("ffb"),
      _0x25316e = _0x294623(_0x234d84),
      _0x349c20 = _0x44be10 + "&unionId=" + _0x25316e;
    $.ajax({
      "type": "GET",
      "dataType": "jsonp",
      "url": _0x5bb1bb + _0x349c20,
      "timeout": 10000,
      "success": function (_0x3dccd2) {
        console.log("【getTask】获取文章链接结果返回：");
        console.log(_0x3dccd2);
        _0x300828(_0x3dccd2);
      },
      "error": function (_0x134655, _0x212f8d) {
        _0x1a9de9.text("请求超时了！返回重试");
        $("#myModal2").show();
        _0x5aa658();
      }
    });
  }
  function _0x300828(_0x29c653) {
    if (_0x29c653.code == 200) {
      if (_0x29c653.data.code == 130) {
        _0x1a9de9.text("账号冻结！");
        $("#myModal2").show();
        _0x5aa658();
        return;
      }
      if (_0x29c653.data.code == 113) {
        _0x1a9de9.text("文章准备失败！请返回重试");
        $("#myModal2").show();
        _0x5aa658();
        return;
      }
      if (_0x29c653.data.code == 112) {
        _0x1a9de9.text("任务失效了！请返回");
        $("#myModal2").show();
        _0x5aa658();
        return;
      }
      if (_0x29c653.data.code == 111) {
        _0x1a9de9.text("登录失效了！请返回");
        $("#myModal2").show();
        _0x5aa658();
        return;
      }
      if (_0x29c653.data.code == 110) {
        _0x1a9de9.text("暂无任务可做了！请返回,整点再来");
        $("#myModal2").show();
        _0x5aa658();
        return;
      }
      if (_0x29c653.data.code == 0) {
        _0x1a9de9.text("获取数据失败！请返回重试");
        $("#myModal2").show();
        _0x5aa658();
        return;
      }
      console.log("[数据验证通过]");
      console.log(_0x29c653);
      _0x206bdd(_0x29c653);
    } else {
      _0x1a9de9.text("访问出错了，请返回重试。");
      $("#myModal2").show();
      _0x5aa658();
    }
  }
  function _0x206bdd(_0x7e3c3d) {
    if (_0x7e3c3d.data.code == 501) {
      _0x1a9de9.text("非法请求！请返回");
      $("#myModal2").show();
      _0x5aa658();
      return;
    }
    if (_0x7e3c3d.data.code == 150) {
      $("#myModal").show();
      _0x575916();
      return;
    }
    if (_0x7e3c3d.data.code == 300) {
      _0x178435("已完成", "任务已完成，请返回。", "任务经完成！请返回");
      return;
    }
    if (_0x7e3c3d.data.code == 200) {
      sessionStorage.setItem(_0x390c8e, _0x7e3c3d.data.startNum);
      sessionStorage.setItem(_0x3f064b, _0x7e3c3d.data.endNum);
      sessionStorage.setItem("ffb", _0x7e3c3d.data.ffb);
      if (null !== _0x7e3c3d.data.startNum && _0x7e3c3d.data.startNum > 0) {
        $("#finishNum").text("成功阅读" + _0x7e3c3d.data.startNum + "篇,继续阅读...");
      }
      _0x47c04a(_0x7e3c3d.data.url);
    }
  }
  function _0x47c04a(_0x4ed09d) {
    sessionStorage.setItem(_0x12344a, _0x4ed09d);
    console.log("调试代码：", _0x4ed09d);
    setTimeout(function () {
      var _0x35ebe3 = document.createElement("a");
      _0x35ebe3.href = _0x4ed09d;
      _0x35ebe3.click();
      sessionStorage.setItem("clickTime", new Date().getTime());
    }, 500);
  }
  function _0x5938ef() {
    var _0x1722b8 = sessionStorage.getItem(_0x40a0db);
    var _0x3643e0 = sessionStorage.getItem("jump01");
    var _0x4fc166 = atob(_0x3643e0) + "?token=" + _0x1722b8;
    return _0x4fc166;
  }
  function _0x2bbb05() {
    var _0x488766 = _0x5938ef();
    console.log("【PageShow】Abc请求接口Api:" + _0x488766);
    $.ajax({
      "type": "GET",
      "dataType": "jsonp",
      "url": _0x5bb1bb + _0x488766,
      "timeout": 10000,
      "success": function (_0x152f52) {
        console.log("初始化页面：", _0x152f52);
        if (_0x152f52.code == 200) {
          if (_0x152f52.data.code == 200) {
            var _0x3a6bb5 = _0x152f52.data.ffb || 0,
              _0x4a6abf = _0x152f52.data.rov || "";
            if (null !== _0x3a6bb5 && undefined !== _0x3a6bb5) {
              var _0x2f9db9 = 39084 + _0x3a6bb5;
              let _0x1ea51b = _0x2f9db9.toString(16);
              sessionStorage.setItem("ffb", _0x3a6bb5);
              sessionStorage.setItem("aabdd", "jk" + _0x1ea51b);
              console.log("转化为16进制方案{tempNum}===>", _0x2f9db9, _0x1ea51b);
            }
            null !== _0x4a6abf && undefined !== _0x4a6abf && "" !== _0x4a6abf && sessionStorage.setItem(_0x4a69bc, atob(_0x4a6abf));
            var _0x4a2f46 = _0x152f52.data.bmkey || "",
              _0x447e60 = _0x152f52.data.bckey || "",
              _0x1a139b = _0x152f52.data.bdkey || "",
              _0x3e1021 = _0x152f52.data.bnkey || "",
              _0x137c12 = _0x152f52.data.bfkey || "",
              _0x103b86 = _0x152f52.data.bakey || "",
              _0x432ee4 = _0x152f52.data.bskey || "";
            if (null !== _0x4a2f46 && undefined !== _0x4a2f46 && "" !== _0x4a2f46) {
              sessionStorage.setItem(_0x56cca8, atob(_0x4a2f46));
              sessionStorage.setItem("uvkey1", atob(_0x447e60));
              sessionStorage.setItem("uvkey2", atob(_0x1a139b));
              sessionStorage.setItem("uvkey3", atob(_0x3e1021));
              sessionStorage.setItem("uvkey4", atob(_0x137c12));
              sessionStorage.setItem("uvkey5", atob(_0x103b86));
              sessionStorage.setItem("uvkey6", atob(_0x432ee4));
            }
            setTimeout(() => {
              _0x352d95();
            }, 200);
          } else $("#finishNum").html("<font color=red>获取数据失败!</font>");
        } else _0x1a9de9.text("访问出错了，请返回重试。"), $("#myModal2").show(), _0x5aa658();
      },
      "error": function (_0x41d7ea, _0x27a4c2) {
        _0x1a9de9.text("请求超时了！返回重试");
        $("#myModal2").show();
        _0x5aa658();
      }
    });
  }
  function _0x92b5e4(_0x5efee3) {
    console.log(_0x5efee3);
  }
  window.onpopstate = function () {
    console.info("onpopstate");
  };
  function _0x26b05c(_0x1e5d1c) {
    console.log("[初始化验证] 禁止微信菜单onBridgeReady=>isWxFlag:", _0x1e5d1c);
    WeixinJSBridge.call("hideOptionMenu");
  }
  function _0x31261d() {
    if (typeof WeixinJSBridge == "undefined" || typeof WeixinJsBridge == null) {
      console.log("[初始化验证] 检测到不是微信浏览器=> 换种方案调用");
      if (document.addEventListener) document.addEventListener("WeixinJSBridgeReady", _0x26b05c, false);else document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", _0x26b05c), document.attachEvent("onWeixinJSBridgeReady", _0x26b05c));
    } else {
      console.log("[初始化验证] 检测到->是微信浏览器=> 直接调用>");
      _0x26b05c(true);
    }
  }
  function _0x2a8933() {
    var _0x39b337 = 761760,
      _0x140858 = sessionStorage.getItem("person"),
      _0x11f0e7 = sessionStorage.getItem(_0x40a0db),
      _0x26d019 = _0x389403(_0x4a69bc),
      _0x24440d = _0x389403(_0x40a0db);
    if (!_0x11f0e7 && null !== _0x24440d && undefined !== _0x24440d) {
      sessionStorage.setItem(_0x40a0db, _0x24440d);
    }
    null !== _0x26d019 && undefined !== _0x26d019 && sessionStorage.setItem(_0x4a69bc, _0x26d019);
    sessionStorage.setItem(_0x390c8e, "0");
    sessionStorage.setItem("jump01", "L2luZGV4L2dldE1vZGVJbmZv");
    sessionStorage.setItem("jump02", "L2luZGV4L2RvUmVhZEluZm8=");
    sessionStorage.setItem(_0x56cca8, _0x3c7bff);
    null !== _0x140858 && undefined !== _0x140858 && parseInt(_0x140858) > 0 && (_0x39b337 = parseInt(_0x140858) + _0x26e6cc);
    sessionStorage.setItem("person", _0x39b337);
    $("#person").text(_0x39b337);
    _0x2bbb05();
  }
  var _0x26e6cc = Math.floor(Math.random() * 10) + 1;
  function _0x28274e() {
    _0x31261d();
    var _0x116f0b = navigator.userAgent.toLowerCase(),
      _0x154b8c = _0x116f0b.indexOf("micromessenger") != -1;
    if (!_0x154b8c) {}
    var _0x7a11a = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (!_0x7a11a) try {
      tbsJs.onReady("{useCachedApi : \"true\"}", function () {});
    } catch (_0x592e77) {}
    window.onpageshow = function () {
      if (event.persisted || window.performance && window.performance.navigation.type === 2) {
        var _0x126d97 = sessionStorage.getItem(_0x390c8e),
          _0x4a87e0 = parseInt(0 + sessionStorage.getItem("person")) + 1;
        sessionStorage.setItem("person", _0x4a87e0);
        $("#person").text(_0x4a87e0);
        console.log("【PageShow】初始化领取用户数：" + _0x4a87e0);
        _0x126d97 == 0 ? $("#finishNum").text("获取中，耐心等待...") : $("#finishNum").text("成功阅读" + _0x126d97 + "篇,继续阅读下一篇");
        var _0x80e024 = sessionStorage.getItem("clickTime");
        if (_0x80e024 && new Date().getTime() - _0x80e024 < 5000) {
          _0x1bc47a = "阅读未满5秒无效！请继续阅读";
          toastr.info(_0x1bc47a);
          setTimeout(function () {
            var _0x20af9f = sessionStorage.getItem(_0x12344a);
            _0x47c04a(_0x20af9f);
          }, 800);
        } else _0x1bc47a = "阅读文章正在进行中，请继续！", _0x352d95();
      } else {
        console.log("【PageShow】initDate--[Begin]");
        _0x2a8933();
      }
    };
  }
  _0x28274e();
});