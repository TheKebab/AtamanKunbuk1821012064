$('#yorumEkle').submit(function (e) {
    $('.alert.alert-danger').hide();
    if (!$('input#name').val() || !$('select#rating').val() ||
        !$('textarea#review').vall()) {
        if ($('.alert.alert-danger').show();
    } else {
        $(this).prepend('<div role = "alert" class="alert alert-danger">Tüm Alanlar Gereklidir!</div>');
    }
    return false;
}
});