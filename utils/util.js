// pages/utils/util.js
var app = getApp();

function gettoken() {

  if (app.globalData.token) {
    var token = app.globalData.token;
    return token;
  } else {
    try {
      var value = wx.getStorageSync('token');
      if (value) {
        console.log("utils=" + value);
        app.globalData.token = value;
        return token;
      }
      
    } catch (e) {
      
    }
   
  }


  return false;
}


function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime,
  gettoken: gettoken
}

function checkStringEmpty(data) {
  if (null == data || "" == data) {
    return false;
  }
  return true;
}
