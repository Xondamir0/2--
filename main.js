function orderSet(set) {
    let message;

    switch (set) {
        case 'Qiyqiriq сет':
            message = `Nechta ${set} zakaz qilmoqchisiz?`;
            break;
        default:
            message = 'Nomaʼlum mahsulot.';
    }

    const miqdor = prompt(message);

    if (miqdor > 0) {
        alert(`Siz ${miqdor} ta ${set} zakaz qildingiz.`);
    } else {
        alert('Iltimos, toʻgʻri son kiriting.');
    }
}

document.querySelectorAll('.hero__btn').forEach(function(button) {
    button.onclick = function() {
        orderSet('Qiyqiriq сет');
    };
});