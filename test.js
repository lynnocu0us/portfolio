function validateForm(){
    var x = document.forms['googform']['field'].value;
    if(x == null || x == "")
    {
        alert("please fill complete the form before submitting");
        return false;
    }
}