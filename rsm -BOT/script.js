document.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('robot-video');
    
    // Tenta reproduzir o vídeo logo após o carregamento (alguns navegadores exigem interação do usuário)
    const playVideo = () => {
        if (video.paused) {
            video.play().catch(error => {
                console.log("A reprodução automática pode estar bloqueada no navegador até que ocorra uma interação do usuário.", error);
            });
        }
    };

    // Tentar tocar o vídeo
    playVideo();

    // Se a reprodução automática falhou, tentar quando o usuário interagir com a página
    document.addEventListener('click', () => {
        playVideo();
    }, { once: true });
    
    // Adiciona efeito parallax sutil ao rolar a página para a logo e fundo
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        // Pega elemento scenery se quiser mexer verticalmente
        const heroSection = document.querySelector('.hero-section h1');
        if (heroSection) {
            heroSection.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroSection.style.opacity = 1 - (scrolled * 0.003);
        }
    });
});
