$(function () {
    console.log(' --- Nav ---');
    $('.dropdown .dropdown-toggle').on('click', function () {
        console.log(' --- Clicked ---');
        var $this = $(this);
        $('.dropdown .dropdown-list').css('display', 'none');
        var $list = $this.next('.dropdown-list');
        console.log($list);
        $list.css('display', 'block');
    });
});