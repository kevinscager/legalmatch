$(document).ready(function () {
    
    $('#categorySelect').change(function () {
        if($(this).val() != "" && $('#autocomplete').val() != "") {
            $('#categoryModal').modal('show');
        } else {
            $('#categorySelect').selectpicker('val', '');
            alert('Enter Zip Code or City first!');
        }
    });
    
});