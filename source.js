
    var locator = new TGOS.TGLocateService(); //宣告定位物件
    var addressInput;

    function locate() {
        locator.locateWGS84({ //指定回傳結果為TWD97坐標系統
        address: addressInput.value //要求地址定位
      }, function(e, status) {
        if (status != TGOS.TGLocatorStatus.OK) {
          return;
        }	
        document.getElementById("addrXY").innerHTML = "X坐標：" + e[0].geometry.location.x + "，Y坐標：" + e[0].geometry.location.y; //在addrXY Div中顯示地址坐標
      });
    }

    function main() {
      addressInput = document.getElementById('address');
    }
