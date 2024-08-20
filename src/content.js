function removeBlur() {
    document.querySelectorAll('*').forEach((element) => {
        element.style.filter = 'none';
    });
}

function checkAndRemoveBlur() {
    removeBlur();
}
setInterval(checkAndRemoveBlur, 5000);
