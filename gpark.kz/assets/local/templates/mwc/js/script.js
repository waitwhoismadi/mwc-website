$(document).ready(function () {
    $('.zhk-choose-item .room-filter input').click(function () {
        $.get(
            '/local/ajax/zhk-choose-item.php',
            $('.zhk-choose-item .room-filter').serialize(),
            function (data) {
                console.log($(data).find('.zhk-choose-inner').html())
                $('.zhk-choose-inner').html($(data).find('.zhk-choose-inner').html())

            }
        )
    })
    $('.main-products-filter-two-el').click(function () {
        $(this).toggleClass('checked')
    })
    $('.main-products-filter-three label').click(function () {
        $(this).toggleClass('checked')
    })


    var value = $('.price_filter_range_value');
    var range = $('.price_filter_range');

    range.on('change', function () {
        $('.price_filter').text(digits_float(this.value));
        $(value).val(this.value);
        $('.filter-project').submit();
    });

    $( ".filter-project" ).on( "submit", function( event ) {
        event.preventDefault();
        $.post(
            '/local/ajax/project.php',
            $('.filter-project').serialize(),
            function (data) {
                console.log($(data).find('.main-products-filter-four').html())
                $('.main-products-filter-four').html($(data).find('.main-products-filter-four').html())
                $('.main-products-last').html($(data).find('.main-products-last').html())
                $('.main-products-filter-result').html($(data).find('.main-products-filter-result').html())

            }
        )
    });
    $('.filter-project input').click(function () {
        $('.filter-project').submit();
    })
    $(document).on('click', '.filter-project .reset', function () {
        $(".filter-project").trigger("reset");
        $('.filter-project').submit();
    })
    $('.filter-project select').change(function () {
        $('.filter-project').submit();
    })
})



function numberWithSpaces(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}

function digits_float(val) {
    val = val.toString().replace(/[^0-9.]/g, '');
    if (val.indexOf(".") != '-1') {
        val = val.substring(0, val.indexOf(".") + 3);
    }
    val = val.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    //console.log(val)
    return val;
}