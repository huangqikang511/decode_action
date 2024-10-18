//Fri Oct 18 2024 13:20:20 GMT+0000 (Coordinated Universal Time)
//Base:https://github.com/echo094/decode-js
//Modify:https://github.com/smallfawn/decode_action
(function () {})();
$(document).ready(function () {
  var _0x252fa7 = "token",
    _0x3c4083 = "PrivatKey",
    _0x4cae61 = "str",
    _0x3d4cdc = "hostUrl",
    _0x15d79e = "abc",
    _0x448901 = "endNum",
    _0x16a86e = "reUrl",
    _0x285ff2 = "uvkey",
    _0x2d589d = "SllNTDIwMjQwOTMw",
    _0xf5474f = "1AE9F575F4CA622AC081CC530B0F3FD4",
    _0x5f5240 = false,
    _0x206d2c = false,
    _0x26d8a4 = false,
    _0x26ca68 = "阅读文章正在进行中，请继续！",
    _0x4458a6 = "https://jylmapi.plsvcrthcs.top",
    _0x4d1331 = _0x533528("priv"),
    _0x483502 = _0x533528(_0x3d4cdc),
    _0xc8bb1f = _0x533528(_0x285ff2),
    _0x386b9d = _0x30aef7(_0x4d1331);
  if (null !== _0x483502 && undefined !== _0x483502 && false !== _0x483502 && "" !== _0x483502 && _0x483502 !== "localhost") {
    _0x4458a6 = decodeURIComponent(_0x483502);
  }
  if (null !== _0x386b9d && undefined !== _0x386b9d.hostUrl && false !== _0x386b9d.hostUrl && "" !== _0x386b9d.hostUrl && _0x386b9d.hostUrl !== "localhost") {
    _0x4458a6 = _0x386b9d.hostUrl;
  }
  null !== _0xc8bb1f && undefined !== _0xc8bb1f && false !== _0xc8bb1f && "" !== _0xc8bb1f && (_0xf5474f = _0xc8bb1f);
  null !== _0x386b9d && undefined !== _0x386b9d && undefined !== _0x386b9d.privateData && "" !== _0x386b9d.privateData && (_0x26d8a4 = _0x386b9d.privateData, sessionStorage.setItem(_0x3c4083, _0x26d8a4));
  null !== _0x386b9d && undefined !== _0x386b9d && undefined !== _0x386b9d.token && null !== _0x386b9d.token && "" !== _0x386b9d.token && sessionStorage.setItem(_0x252fa7, _0x386b9d.token);
  console.log("[初始化所使用接口] Priv;解密出来的数据=>", _0x386b9d);
  sessionStorage.setItem(_0x3d4cdc, _0x4458a6);
  console.log("[初始化所使用接口] APIURL=" + _0x4458a6 + ";外部传入的接口地址APIURL=" + _0x483502);
  var _0x1289f2 = $("#titleText2"),
    _0x2490f6 = $("#timer"),
    _0x57231f = $("#timer2");
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
    _0x5f5240 = true;
    $("#myModal").hide();
    _0xcc60f7();
  });
  $("#svgBtn").click(function () {
    _0x5f5240 = true;
    $("#myModal").hide();
    _0xcc60f7();
  });
  $("#svgBtn2").click(function () {
    _0x206d2c = true;
    $("#myModal2").hide();
    _0xcc60f7();
  });
  function _0x30aef7(_0x6d2aee) {
    var _0x497f6d = atob(_0x6d2aee),
      _0x2bd0fe = eval("(" + _0x497f6d + ")");
    if (null !== _0x497f6d && null !== _0x2bd0fe && undefined !== _0x2bd0fe) return _0x2bd0fe;
    return null;
  }
  var _0x3e4c39 = atob(_0x2d589d);
  function _0x28027c() {
    var _0xdbf364 = 0,
      _0xe94052 = 0,
      _0x30d6b4 = sessionStorage.getItem(_0x285ff2);
    (!_0x30d6b4 || undefined === _0x30d6b4) && (_0x30d6b4 = _0xf5474f);
    var _0x28190e = parseInt(sessionStorage.getItem("ffb")),
      _0x7f3f83 = sessionStorage.getItem("str");
    if (_0x28190e == 2 || _0x28190e == 5 || _0x28190e == 7 || _0x28190e == 9 || _0x28190e == 11) _0xdbf364 = _0x28190e * 12, _0xe94052 = _0x28190e % 5;else {
      if (_0x28190e == 3 || _0x28190e == 6 || _0x28190e == 12 || _0x28190e == 15 || _0x28190e == 18) _0xdbf364 = _0x28190e * 15, _0xe94052 = _0x28190e % 8;else {
        _0xdbf364 = _0x28190e * 88;
        _0xe94052 = _0x28190e % 10;
      }
    }
    var _0x4c0ef9 = md5("_" + _0xdbf364 + "_" + _0x7f3f83 + "&MYCODE=" + _0x3e4c39),
      _0x4d5114 = md5(_0x4c0ef9 + "_RAND_" + _0xe94052 + "&PRIKEY=" + _0x30d6b4);
    return _0x4d5114;
  }
  function _0xcc60f7() {
    typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function" && WeixinJSBridge.call("closeWindow");
  }
  function _0x4071ec(_0x5de6c8, _0x5beef7, _0x14343a) {
    $("#finishNum").text(_0x5de6c8);
    $("#taskText").text(_0x5beef7);
    _0x1289f2.text(_0x14343a);
    $("#myModal2").show();
    _0x494921();
  }
  function _0x533528(_0x490481) {
    var _0x48f343 = new RegExp("(^|&)" + _0x490481 + "=([^&]*)(&|$)"),
      _0x1ecafc = window.location.search.substr(1).match(_0x48f343);
    if (_0x1ecafc != null) return unescape(_0x1ecafc[2]);
    return null;
  }
  function _0x276ea6() {
    var _0x33b2d1 = 5,
      _0x5b074a = setInterval(function () {
        _0x2490f6.text(_0x33b2d1);
        --_0x33b2d1 < 0 && (clearInterval(_0x5b074a), $("#finishNum").text("获取中"), _0x5f5240 == false && ($("#myModal").hide(), _0xcc60f7()));
      }, 1000);
  }
  function _0x494921() {
    var _0x13f0f4 = 3,
      _0x38bf58 = setInterval(function () {
        var _0x4ac938 = parseInt(_0x13f0f4 % 60, 10);
        _0x4ac938 = _0x4ac938 < 3 ? _0x4ac938 : _0x4ac938;
        _0x57231f.text(_0x4ac938);
        --_0x13f0f4 < 0 && (clearInterval(_0x38bf58), $("#finishNum").text("获取中"), _0x206d2c == false && ($("#myModal2").hide(), _0xcc60f7()));
      }, 1000);
  }
  function _0x523068(_0x2815eb) {
    var _0x148ab3 = 2000;
    var _0x1caaa6 = parseInt(_0x2815eb);
    var _0x506ca3 = _0x1caaa6 % 5;
    _0x506ca3 > 0 && (_0x148ab3 = 2000 + _0x506ca3);
    var _0x7b939d = parseInt(_0x148ab3) + _0x1caaa6;
    return _0x7b939d;
  }
  function _0x10c564() {
    console.info("pushHistory");
    var _0x1a2495 = "#" + new Date().getTime();
    history.pushState(history.length + 1, "title", _0x1a2495);
  }
  function _0x334acd() {
    var _0x376401 = sessionStorage.getItem(_0x252fa7);
    var _0x4ae376 = sessionStorage.getItem(_0x15d79e);
    var _0xfc886 = sessionStorage.getItem(_0x4cae61);
    var _0x3badf4 = _0x28027c();
    var _0x5c0838 = sessionStorage.getItem("jump02");
    var _0x381f89 = _0x376401 + "&startNumber=" + _0x4ae376 + "&str=" + _0xfc886 + "&keys=" + _0x3badf4;
    var _0x14b3a8 = atob(_0x5c0838) + "?token=" + _0x381f89;
    return _0x14b3a8;
  }
  function _0x2ade8f() {
    var _0x4b1577 = _0x334acd(),
      _0x473acc = sessionStorage.getItem("ffb"),
      _0x3cdd5c = _0x523068(_0x473acc),
      _0x5f422c = _0x4b1577 + "&unionId=" + _0x3cdd5c;
    $.ajax({
      "type": "GET",
      "dataType": "jsonp",
      "url": _0x4458a6 + _0x5f422c,
      "timeout": 10000,
      "success": function (_0x1fc190) {
        console.log("【getTask】获取文章链接结果返回：");
        console.log(_0x1fc190);
        _0x486a6f(_0x1fc190);
      },
      "error": function (_0x2fe670, _0x209f5b) {
        _0x1289f2.text("请求超时了！返回重试");
        $("#myModal2").show();
        _0x494921();
      }
    });
  }
  function _0x486a6f(_0x1ee067) {
    if (_0x1ee067.code == 200) {
      if (_0x1ee067.data.code == 130) {
        _0x1289f2.text("账号冻结！");
        $("#myModal2").show();
        _0x494921();
        return;
      }
      if (_0x1ee067.data.code == 113) {
        _0x1289f2.text("文章准备失败！请返回重试");
        $("#myModal2").show();
        _0x494921();
        return;
      }
      if (_0x1ee067.data.code == 112) {
        _0x1289f2.text("任务失效了！请返回");
        $("#myModal2").show();
        _0x494921();
        return;
      }
      if (_0x1ee067.data.code == 111) {
        _0x1289f2.text("登录失效了！请返回");
        $("#myModal2").show();
        _0x494921();
        return;
      }
      if (_0x1ee067.data.code == 110) {
        _0x1289f2.text("暂无任务可做了！请返回,整点再来");
        $("#myModal2").show();
        _0x494921();
        return;
      }
      if (_0x1ee067.data.code == 0) {
        _0x1289f2.text("获取数据失败！请返回重试");
        $("#myModal2").show();
        _0x494921();
        return;
      }
      console.log("[数据验证通过]");
      console.log(_0x1ee067);
      _0x1e5077(_0x1ee067);
    } else _0x1289f2.text("访问出错了，请返回重试。"), $("#myModal2").show(), _0x494921();
  }
  function _0x1e5077(_0x195614) {
    if (_0x195614.data.code == 501) {
      _0x1289f2.text("非法请求！请返回");
      $("#myModal2").show();
      _0x494921();
      return;
    }
    if (_0x195614.data.code == 150) {
      $("#myModal").show();
      _0x276ea6();
      return;
    }
    if (_0x195614.data.code == 300) {
      _0x4071ec("已完成", "任务已完成，请返回。", "任务经完成！请返回");
      return;
    }
    if (_0x195614.data.code == 200) {
      sessionStorage.setItem(_0x15d79e, _0x195614.data.startNum);
      sessionStorage.setItem(_0x448901, _0x195614.data.endNum);
      sessionStorage.setItem("ffb", _0x195614.data.ffb);
      null !== _0x195614.data.startNum && _0x195614.data.startNum > 0 && $("#finishNum").text("成功阅读" + _0x195614.data.startNum + "篇,继续阅读...");
      _0x4210d3(_0x195614.data.url);
    }
  }
  function _0x4210d3(_0x3d1b00) {
    sessionStorage.setItem(_0x16a86e, _0x3d1b00);
    console.log("调试代码：", _0x3d1b00);
    setTimeout(function () {
      var _0x1a2c19 = document.createElement("a");
      _0x1a2c19.href = _0x3d1b00;
      _0x1a2c19.click();
      sessionStorage.setItem("clickTime", new Date().getTime());
    }, 500);
  }
  function _0x2733c3() {
    var _0x1a1bbb = sessionStorage.getItem(_0x252fa7);
    var _0x57e397 = sessionStorage.getItem("jump01");
    var _0x1f425d = atob(_0x57e397) + "?token=" + _0x1a1bbb;
    return _0x1f425d;
  }
  function _0x5a2cc5() {
    var _0x2c1805 = _0x2733c3();
    console.log("【PageShow】Abc请求接口Api:" + _0x2c1805);
    $.ajax({
      "type": "GET",
      "dataType": "jsonp",
      "url": _0x4458a6 + _0x2c1805,
      "timeout": 10000,
      "success": function (_0x271546) {
        console.log("初始化页面：", _0x271546);
        if (_0x271546.code == 200) {
          if (_0x271546.data.code == 200) {
            var _0xb1302b = _0x271546.data.ffb || 0,
              _0x2b1eca = _0x271546.data.rov || "",
              _0x167144 = _0x271546.data.bskey || "";
            null !== _0xb1302b && undefined !== _0xb1302b && sessionStorage.setItem("ffb", _0xb1302b);
            null !== _0x2b1eca && undefined !== _0x2b1eca && "" !== _0x2b1eca && sessionStorage.setItem(_0x4cae61, atob(_0x2b1eca));
            null !== _0x167144 && undefined !== _0x167144 && "" !== _0x167144 && sessionStorage.setItem(_0x285ff2, atob(_0x167144));
            setTimeout(() => {
              _0x2ade8f();
            }, 200);
          } else $("#finishNum").html("<font color=red>获取数据失败!</font>");
        } else _0x1289f2.text("访问出错了，请返回重试。"), $("#myModal2").show(), _0x494921();
      },
      "error": function (_0x3421ad, _0x3a6de2) {
        _0x1289f2.text("请求超时了！返回重试");
        $("#myModal2").show();
        _0x494921();
      }
    });
  }
  function _0x242227(_0x29c6f4) {
    console.log(_0x29c6f4);
  }
  window.onpopstate = function () {
    console.info("onpopstate");
  };
  function _0x297767() {
    WeixinJSBridge.call("hideOptionMenu");
  }
  function _0x3249c2() {
    if (typeof WeixinJSBridge == "undefined") {
      if (document.addEventListener) {
        document.addEventListener("WeixinJSBridgeReady", _0x297767, false);
      } else document.attachEvent && (document.attachEvent("WeixinJSBridgeReady", _0x297767), document.attachEvent("onWeixinJSBridgeReady", _0x297767));
    } else _0x297767();
  }
  function _0x27be20() {
    var _0x3cf18d = 761760;
    var _0x15c637 = sessionStorage.getItem("person");
    var _0x5b44b3 = sessionStorage.getItem(_0x252fa7);
    var _0x3a2972 = _0x533528(_0x4cae61);
    var _0x4f565c = _0x533528(_0x252fa7);
    !_0x5b44b3 && null !== _0x4f565c && undefined !== _0x4f565c && sessionStorage.setItem(_0x252fa7, _0x4f565c);
    null !== _0x3a2972 && undefined !== _0x3a2972 && sessionStorage.setItem(_0x4cae61, _0x3a2972);
    sessionStorage.setItem(_0x15d79e, "0");
    sessionStorage.setItem("jump01", "L2luZGV4L2dldE1vZGVJbmZv");
    sessionStorage.setItem("jump02", "L2luZGV4L2RvUmVhZEluZm8=");
    sessionStorage.setItem(_0x285ff2, _0xf5474f);
    null !== _0x15c637 && undefined !== _0x15c637 && parseInt(_0x15c637) > 0 && (_0x3cf18d = parseInt(_0x15c637) + _0x1bc8fe);
    sessionStorage.setItem("person", _0x3cf18d);
    $("#person").text(_0x3cf18d);
    _0x5a2cc5();
  }
  var _0x1bc8fe = Math.floor(Math.random() * 10) + 1;
  function _0x147c89() {
    _0x3249c2();
    var _0x282ad8 = navigator.userAgent.toLowerCase(),
      _0x55b65a = _0x282ad8.indexOf("micromessenger") != -1;
    if (!_0x55b65a) {
      var _0x560ad2 = location.href.replace("article.html", "wx.html");
      window.location.href = _0x560ad2;
      return;
    }
    var _0x387baa = !!navigator.userAgent.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    if (!_0x387baa) try {
      tbsJs.onReady("{useCachedApi : \"true\"}", function () {});
    } catch (_0x369e9e) {}
    window.onpageshow = function () {
      if (event.persisted || window.performance && window.performance.navigation.type === 2) {
        var _0x4256cc = sessionStorage.getItem(_0x15d79e),
          _0x3d15a2 = parseInt(0 + sessionStorage.getItem("person")) + 1;
        sessionStorage.setItem("person", _0x3d15a2);
        $("#person").text(_0x3d15a2);
        console.log("【PageShow】初始化领取用户数：" + _0x3d15a2);
        if (_0x4256cc == 0) $("#finishNum").text("获取中，耐心等待...");else {
          $("#finishNum").text("成功阅读" + _0x4256cc + "篇,继续阅读下一篇");
        }
        var _0xcdbec8 = sessionStorage.getItem("clickTime");
        _0xcdbec8 && new Date().getTime() - _0xcdbec8 < 5000 ? (_0x26ca68 = "阅读未满5秒无效！请继续阅读", toastr.info(_0x26ca68), setTimeout(function () {
          var _0x5e3565 = sessionStorage.getItem(_0x16a86e);
          _0x4210d3(_0x5e3565);
        }, 800)) : (_0x26ca68 = "阅读文章正在进行中，请继续！", _0x2ade8f());
      } else console.log("【PageShow】initDate--[Begin]"), _0x27be20();
    };
  }
  _0x147c89();
});