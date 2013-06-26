jQuery('document').ready(function ($) {
	var xhr = new XMLHttpRequest();
	xhr.onreadystatechange = handleStateChange; // Implemented elsewhere.
	xhr.open("GET", 'https://www.google.com', true);
	xhr.send();
})

function handleStateChange() {
  if(this.readyState == this.DONE) {
    if(this.status == 200) {
      // success!
      jQuery('div.test').html(this.responseText);
      console.log(this.responseText);
      return;
    }
    // something went wrong
    console.log(this.status);
  }
}
