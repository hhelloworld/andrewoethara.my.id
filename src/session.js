function checkSession() {
    $.ajax({
        url: 'check_session.php',
        method: 'GET',
        dataType: 'json',
        success: function (response) {
            if (!response.valid) {
                // Session has expired, log the user out
                alert('Your session has expired. You are now logged out.');
                // Redirect to the logout page
                window.location.href = 'http://andrewoethara.my.id/Login'
            }
        }
    });
}

// Check the session every 5 minutes (adjust as needed)
setInterval(checkSession, 60 * 1000);
