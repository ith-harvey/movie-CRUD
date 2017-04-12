





function makeRequest(method, url, data) {
  console.log('method', method);
  console.log('data',data);
  console.log('makerequest is firing');
  url = `http://localhost:8000${url}`
  console.log('url',url);
  var options = {
    method,
    url,
    data
  }

  $.ajax(options).then( result => {
    console.log(result);
    console.log('post was successful!');
  }).catch( error => {
    console.log('there was an error!',error);
  })

}
