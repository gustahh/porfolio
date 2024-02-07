$(document).ready(function () {
    /* carrega página bem vindo por padrão */
    $('.bg').load('pages/bemvindo.html');
    $('[tabindex="bemvindo"]').find('.closeTab').css('display', 'block');;
    /* função para carregar página */

    function loadPag(pag, nomePag, elemento) {
        console.log('Função carregada!');
        $('.nomePag').html(pag);
        if (nomePag === 'bemvindo') {
            $(elemento).find('img').attr('src', 'icons/house-fill.svg');
            $(elemento).next().find('img').attr('src', 'icons/msg-bubble-user.svg');
            $(elemento).next().next().find('img').attr('src', 'icons/layers.svg');
            $(elemento).next().next().next().find('img').attr('src', 'icons/at-sign.svg');
        } else if (nomePag === 'sobremim') {
            $(elemento).prev().find('img').attr('src', 'icons/house.svg');
            $(elemento).find('img').attr('src', 'icons/msg-bubble-user-fill.svg');
            $(elemento).next().find('img').attr('src', 'icons/layers.svg');
            $(elemento).next().next().find('img').attr('src', 'icons/at-sign.svg');
        } else if (nomePag === 'portfolio') {
            $(elemento).prev().prev().find('img').attr('src', 'icons/house.svg');
            $(elemento).prev().find('img').attr('src', 'icons/msg-bubble-user.svg');
            $(elemento).find('img').attr('src', 'icons/layers-fill.svg');
            $(elemento).next().find('img').attr('src', 'icons/at-sign.svg');
        } else if (nomePag === 'contato') {
            $(elemento).prev().prev().prev().find('img').attr('src', 'icons/house.svg');
            $(elemento).prev().prev().find('img').attr('src', 'icons/msg-bubble-user.svg');
            $(elemento).prev().find('img').attr('src', 'icons/layers.svg');
            $(elemento).find('img').attr('src', 'icons/at-sign-fill.svg');
        }
         /* 
            explicando código!
            .next() seleciona o elemento próximo a div clicada (elemento),
            cada .next() a mais é um elemento a mais. A lógica se inverte para
            o .prev(), buscando o elemento anterior.
        */
        $('.bg').load('pages/' + nomePag + '.html');
    }

    //troca guias ativas
    function removeId(tabindex) {
        //remove id e adiciona a guia atual
        $('#ativa').removeAttr('id');
        $('[tabindex="' + tabindex + '"]').attr('id', 'ativa');
        console.log(tabindex);
    }

    //exibe o botão de fechar da guia
    function showClose(guia) {
        //oculta todos os botões de fechar e exibe apenas na guia atual
        var allCloses = document.querySelectorAll('.closeTab');
        allCloses.forEach(close => {
            var className = close.className;
            $('.' + className).css('display', 'none');
        });
        var thisClose = $(guia).find('.closeTab');
        thisClose.css('display', 'block');
    }

    //declara se existe ou não as abas (1 para existe e 0 para não existe)
    var bemvindo = 1;
    var sobre = 0;
    var portfolio = 0;
    var contato = 0;
    $('li').click(function (event) {
        id = $(this).attr('id');
        console.log(id);
        if (id === 'bemvindo') {
            //carrega função
            loadPag('Bem vindo!', 'bemvindo', $(this));

            //verifica se a guia já existe, caso contrário a cria
            if (bemvindo > 0) {
                console.log('Guia existente');
                loadPag('Bem vindo!', 'bemvindo', $(this));
                showClose('[tabindex="bemvindo"]');
                removeId('bemvindo');
            } else {
                bemvindo++;
                console.log(bemvindo);
                var newTab = `
                <div class="tab" tabindex="bemvindo" name="Bem vindo!" id="ativa">
                    <img src="icons/house-fill.svg" alt="" srcset="" class="iconsTab">
                    <span class="tabName">Bem Vindo!</span>
                    <img src="icons/xmark.svg" alt="" srcset="" class="closeTab">
                </div>
                `;
                $('.bar').append(newTab);
                showClose('[tabindex="bemvindo"]');
                removeId('bemvindo');
            }
        } else if (id === 'sobremim') {
            //carrega função
            loadPag('Sobre mim', 'sobremim', $(this));

            //verifica se a guia já existe, caso contrário a cria
            if (sobre > 0) {
                console.log('Guia existente');
                loadPag('Sobre mim', 'sobremim', $(this));
                showClose('[tabindex="sobremim"]');
                removeId('sobremim');
            } else {
                sobre++;
                console.log(sobre);
                var newTab = `
                <div class="tab" tabindex="sobremim" name="Sobre mim">
                    <img src="icons/msg-bubble-user-fill.svg" alt="" srcset="" class="iconsTab">
                    <span class="tabName">Sobre mim</span>
                    <img src="icons/xmark.svg" alt="" srcset="" class="closeTab">
                </div>
                `;
                $('.bar').append(newTab);
                showClose('[tabindex="sobremim"]');
                removeId('sobremim');
            }
        } else if (id === 'portfolio') {
            //carrega função
            loadPag('Portfólio', 'portfolio', $(this));

            //verifica se a guia já existe, caso contrário a cria
            if (portfolio > 0) {
                console.log('Guia existente');
                loadPag('Portfólio', 'portfolio', $(this));
                showClose('[tabindex="portfolio"]');
                removeId('portfolio');
            } else {
                portfolio++;
                var newTab = `
                <div class="tab" tabindex="portfolio" name="Portfólio">
                    <img src="icons/layers-fill.svg" alt="" srcset="" class="iconsTab">
                    <span class="tabName">Portfólio</span>
                    <img src="icons/xmark.svg" alt="" srcset="" class="closeTab">
                </div>
                `;
                $('.bar').append(newTab);
                showClose('[tabindex="portfolio"]');
                removeId('portfolio');
            }
        } else if (id === 'contato') {
            //carrega função
            loadPag('Contato', 'contato', $(this));

            //verifica se a guia já existe, caso contrário a cria
            if (contato > 0) {
                console.log('Guia existente');
                loadPag('Contato', 'contato', $(this));
                showClose('[tabindex="contato"]');
                removeId('contato');
            } else {
                contato++;
                var newTab = `
                <div class="tab" tabindex="contato" name="Contato">
                    <img src="icons/at-sign-fill.svg" alt="" srcset="" class="iconsTab">
                    <span class="tabName">Contato</span>
                    <img src="icons/xmark.svg" alt="" srcset="" class="closeTab">
                </div>
                `;
                $('.bar').append(newTab);
                showClose('[tabindex="contato"]');
                removeId('contato');
            }
        }
    });
    //altera a aba clicando na mesma
    $('.bar').on('click', '.tab', function () { 
        var index = $(this).attr('tabindex');
        var nomePag = $(this).attr('name');
        showClose($(this));
        removeId(index);
        loadPag(nomePag, index, $('#' + index));
    });

    //fecha a aba
    $('.tab').on('click', '.closeTab', function () { 
        var index = $(this).attr('tabindex');
        
    });
});