function reloadPage(){
    if (confirm("Are you sure you want to reload the page? All completed data will be deleted.")) {
        location.reload();
    } else {
        alert("You pressed the cancel button.")ж
    }
}
