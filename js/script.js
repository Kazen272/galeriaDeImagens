// "$" Chama o jquery
$(document).ready(function () {
    $('header button').click(function () {
        $('form').slideDown();
    })

    $('#btn-rmv').click(function () {
        $('form').slideUp();
    })

    $('form').on('submit', function (e) {
        e.preventDefault();

        const urlImagem = $(`#url-imagem`).val();
        const novoItem = $(`<li style="display:none" ></li>`);
        $(`<img src="${urlImagem}" />`).appendTo(novoItem);
        $(`<div class="overlay-imagem-link">
                <a href="${urlImagem}" target="_blank" title="Ver imagem em tamnho Real"> 
                    ver Imagem em tamanho Real
                </a>
            </div>`).appendTo(novoItem);
        console.log(novoItem);
        
            $(novoItem).appendTo('ul');
            $(novoItem).fadeIn();
            $("#url-imagem").val('');
    })
});