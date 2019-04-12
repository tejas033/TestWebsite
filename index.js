function openChildPage(){
  window.opener.postMessage('Message to the parent' + window.location.href, "*");
}
