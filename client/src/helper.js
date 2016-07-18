const $ = require('jquery');

export const apiGet = function apiGet(path, callback) {
  var jqXHR = $.get(path);
  jqXHR.done( (data) => callback(data) );
};

export const apiPost = function apiPost(path, postObj) {
  return $.ajax({
    method: 'POST',
    url: path,
    data: JSON.stringify(postObj),
    contentType: 'application/json'
  });
};
