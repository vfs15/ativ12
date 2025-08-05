console.log('Olá mundo!');
// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);

novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';

// Variáveis de controle
let ovosContados = 0;
const limiteOvos = 100; // Limite de ovos antes de sumirem.

// Função para criar a galinha
const galinha = document.createElement('div');
galinha.textContent = '🐔'; // Galinha representada por emoji
Object.assign(galinha.style, {
    position: 'fixed',
    bottom: '10px',
    left: '50%',
    transform: 'translateX(-50%)',
    fontSize: '80px',  // Tamanho da galinha
    zIndex: '10',
    transition: 'transform 0.2s ease'
});
document.body.appendChild(galinha);

// Função para criar o ovo
function criarOvo(x, y) {
    // Cria o ovo
    const ovo = document.createElement('div');
    Object.assign(ovo.style, {
        width: '40px',
        height: '50px',
        backgroundColor: '#FFEB3B',  // Cor amarela suave
        borderRadius: '50%',  // Forma arredondada
        position: 'absolute',
        left: `${x - 20}px`,  // Ajusta a posição do ovo
        top: `${y - 30}px`,   // Ajusta a posição vertical do ovo
        zIndex: '5',
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.2)',  // Sombra para dar destaque
        transition: 'top 1s ease-in-out',  // Efeito de queda suave
    });
    document.body.appendChild(ovo);

    // Animação de queda do ovo
    setTimeout(() => {
        ovo.style.top = `${y + 100}px`;  // O ovo cai até a parte inferior
    }, 10);

    // Remove o ovo após o tempo da animação
    setTimeout(() => {
        ovo.remove();
    }, 2000);

    // Incrementa a contagem de ovos
    ovosContados++;

    // Verifica se chegou ao limite de ovos
    if (ovosContados >= limiteOvos) {
        resetarOvos();
    }
}

// Função para resetar os ovos quando atingirem 100
function resetarOvos() {
    // Mensagem indicando que os ovos sumiram
    alert('Você pegou 100 ovos! Todos os ovos desaparecerão agora.');

    // Reinicia o contador
    ovosContados = 0;

    // Remove todos os ovos visíveis na tela
    const ovos = document.querySelectorAll('div');
    ovos.forEach((ovo) => {
        if (ovo.style.backgroundColor === 'rgb(255, 235, 59)') {
            ovo.remove();
        }
    });
}

// Evento de clique para criar ovos na tela
document.addEventListener('click', (event) => {
    // Cria um ovo na posição do clique
    criarOvo(event.clientX, event.clientY);
});

// Movimento da galinha (segue o mouse)
document.addEventListener('mousemove', (event) => {
    galinha.style.left = `${event.clientX - 40}px`;  // Ajusta a posição da galinha
});
