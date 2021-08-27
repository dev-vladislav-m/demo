function AddNotification(text, type) { 
    $str = '<div class="notification '
    if (type === 1)
        $str += 'info"><div class="icon-exclamation-circle'
    else if (type === 2)
        $str += 'true"><div class="icon-check-circle'
    else
        $str += 'false"><div class="icon-exclamation-circle'
    $str +=  ' notification__message">' + text + '</div></div>';

    $new = $($str).slideUp(function () {
        $(this)
        .prependTo('.notifications')
        .slideDown()
        .delay(5000)
        .slideUp()
    })
}