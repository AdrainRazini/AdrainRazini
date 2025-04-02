// Função para alternar o tema claro e escuro
function toggleTheme() {
    const currentTheme = document.body.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.body.setAttribute('data-theme', newTheme);
}

// Função para manipular o envio do formulário
function handleSubmit(event) {
    event.preventDefault(); // Impede o envio padrão do formulário

    // Aqui você pode implementar a lógica para enviar o formulário, como uma chamada AJAX ou API
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    alert(`Obrigado pela sua mensagem, ${name}!`);
    
    // Limpa o formulário
    document.getElementById('contact-form').reset();
}

// Animações de entrada ao rolar
const sections = document.querySelectorAll('section');
const options = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px 0px -100px 0px"
};

const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, options);

sections.forEach(section => {
    observer.observe(section);
});


