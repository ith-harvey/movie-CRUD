





function makeRequest(method, url, data) {
  console.log('method', method);
  console.log('data',data);
  console.log('makerequest is firing');
  console.log('url',url);
  var options = {
    method,
    url,
    data
  }

  $.ajax(options).then( result => {
    if (typeof result === 'string'){
      window.location = result
    }
    console.log('post was successful!');
  }).catch( error => {
    console.log('there was an error!',error);
  })

}
