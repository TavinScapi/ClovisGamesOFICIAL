function filterGames() {
    var input = document.getElementById('searchInput').value.toLowerCase();
    var cards = document.getElementsByClassName('game-card');
    var noResults = true;

    for (var i = 0; i < cards.length; i++) {
        var title = cards[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        if (title.includes(input)) {
            cards[i].style.display = '';
            noResults = false;
        } else {
            cards[i].style.display = 'none';
        }
    }

    document.getElementById('noResultsMessage').style.display = noResults ? 'block' : 'none';
}

function filterByCategory(category) {
    var cards = document.getElementsByClassName('game-card');
    var noResults = true;

    for (var i = 0; i < cards.length; i++) {
        var cardCategory = cards[i].getAttribute('data-category').toLowerCase();

        if (category === 'all' || cardCategory.includes(category.toLowerCase())) {
            cards[i].style.display = '';
            noResults = false;
        } else {
            cards[i].style.display = 'none';
        }
    }

    document.getElementById('noResultsMessage').style.display = noResults ? 'block' : 'none';
}

function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

// surpreenda-me

let jogos = Array.from(document.querySelectorAll('.game-card'));
let jogosExibidos = [];

function surpreendaMe() {
    if (jogos.length === 0) {
        alert("Você já viu todos os jogos! Tente novamente mais tarde.");
        return;
    }

    // Ocultar todos os jogos
    document.querySelectorAll('.game-card').forEach(jogo => jogo.style.display = 'none');

    // Selecionar um jogo aleatório
    let randomIndex = Math.floor(Math.random() * jogos.length);
    let jogoSelecionado = jogos[randomIndex];

    // Exibir o jogo selecionado e centralizá-lo
    let gamesGrid = document.getElementById('gamesGrid');
    gamesGrid.classList.add('center-card');
    jogoSelecionado.style.display = 'block';

    // Mostrar o botão de reset
    document.getElementById('resetButton').style.display = 'block';

    // Remover o jogo exibido da lista
    jogosExibidos.push(jogos.splice(randomIndex, 1)[0]);
}

function resetView() {
    // Remover a classe de centralização
    document.getElementById('gamesGrid').classList.remove('center-card');

    // Exibir todos os jogos novamente
    document.querySelectorAll('.game-card').forEach(jogo => jogo.style.display = 'block');

    // Ocultar o botão de reset
    document.getElementById('resetButton').style.display = 'none';

    // Restaurar o array de jogos
    jogos = jogos.concat(jogosExibidos);
    jogosExibidos = [];
}
