function openChildPage(){
  alert(window.location.href);
  window.opener.postMessage('Message to the parent' + window.location.href, "*");
}
