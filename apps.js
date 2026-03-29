        function EnviarZap(event) {
            event.preventDefault();

            const Nome = document.getElementById('Nome').value;
            const mensagem = document.getElementById('mensagem').value;
            const telefone = '5511949374684';

            const texto = `Olá! Me chamo ${Nome}, ${mensagem}`;
            const msgformatada = encodeURIComponent(texto);

            const url = `https://wa.me/${telefone}?text=${msgformatada}`;

            console.log(url);
            window.open(url, '_blank');
        }


function toggleMenu() {
    const menu = document.querySelector('.menu');
    const links = document.querySelectorAll('.menu li');

    menu.classList.toggle('active');

    links.forEach((link, index) => {
        if (link.classList.contains('active')) {
            link.classList.remove('active');
        } else {
            link.style.animationDelay = `${index * 0.1}s`;
            link.classList.add('active');
        }
    });

    document.body.style.overflow = 
        menu.classList.contains('active') ? 'hidden' : 'auto';
}
