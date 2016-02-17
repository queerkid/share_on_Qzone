chrome.browserAction.onClicked.addListener(function(tab) {
  var postUrl = "http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url="+encodeURIComponent(tab.url)+"&showcount=1&desc=&summary=&title=&site=&pics=&style=203&width=98&height=22&otype=share"
  chrome.windows.create({"url":postUrl, "type":"popup", "height":450,"width":600, "top": 100, "left":100, incognito: tab.incognito});
});
