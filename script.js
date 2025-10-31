document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.getElementById('envelope');
    const seal = document.getElementById('seal');
    const letter = document.getElementById('letter');
    const overlay = document.getElementById('overlay');
    const closeBtn = document.getElementById('closeBtn');

    let isOpen = false;

    function openLetter() {
        if (!isOpen) {
            envelope.classList.add('open');
            letter.classList.add('open');
            overlay.classList.add('open');
            isOpen = true;
            document.querySelector('.instruction').textContent = 'Clique fora da carta para fechar';
        }
    }

    function closeLetter() {
        if (isOpen) {
            envelope.classList.remove('open');
            letter.classList.remove('open');
            overlay.classList.remove('open');
            isOpen = false;
            document.querySelector('.instruction').textContent = 'Clique no envelope para abrir';
        }
    }

    envelope.addEventListener('click', () => { if (!isOpen) openLetter(); });
    seal.addEventListener('click', e => { e.stopPropagation(); if (!isOpen) openLetter(); });
    closeBtn.addEventListener('click', closeLetter);
    overlay.addEventListener('click', closeLetter);
    document.addEventListener('keydown', e => { if (e.code === 'Escape' && isOpen) closeLetter(); });

    console.log('Website de carta de amor carregado com sucesso!');
    console.log('Para personalizar a mensagem, edite o texto na div letter-content neste arquivo HTML');
});
