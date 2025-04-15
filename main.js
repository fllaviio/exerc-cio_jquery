
$(document).ready(function () {
    $('#botao-cancelar').click(function () {
        $('form').slideUp();
    });

    $('header button').click(function () {
        $('form').slideDown();
    });

    $('form').submit(function (event) {
        event.preventDefault();
        
        const novaTarefa = $('form input').val();

        if (novaTarefa.trim() !== '') {
            const novoItem = $('<li></li>').text(novaTarefa);
            
            novoItem.click(function () {
                $(this).toggleClass('concluida');
            });
            
            $('ul').append(novoItem);
            $('form input').val(''); 
        }
    });
});
