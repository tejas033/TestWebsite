function openChildPage(){
  alert('Hello from child page');
  window.opener.postMessage('asdf');
}
