// document.getElementById('button').addEventListener('click', function(){
//   alert("It's me");
// })

var remote = require('remote');
var dialog = remote.require('dialog');
var fs = require('fs');

window.$ = window.jQuery = require('./bower_components/jquery/dist/jquery.min.js')

$(function() {
  $('#button').click(function() {
    alert("It's me")
  })

  $('#chooseFile').click(function() {
    dialog.showOpenDialog({
      title: '选择文件',
      properties: ['openFile'],
      filters: [{
        name: 'Text',
        extensions: ['txt']
      }],
    }, function(fileNames) {
      if(fileNames) {
        var text = fs.readFileSync(fileNames[0]);
        $('#output').text(text);
      }
    })
  })
})

angular.module('your-app', [])
.controller('DemoCtrl', function($scope) {
})
