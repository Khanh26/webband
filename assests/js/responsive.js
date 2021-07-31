//  Đóng mở menu
var header = document.getElementById('header');
var mobileMenu = document.getElementById('mobile-menu');
var headerHeight = header.clientHeight;

mobileMenu.onclick = function() {
    var isOpen = header.clientHeight === headerHeight;
    if(isOpen) {
        header.style.height = 'auto';
    } else {
        header.style.height = null;
    }
}

// tự tắt menu

var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];
    menuItem.onclick = function(event) {
        //  check sub nav
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu) {
            event.preventDefault();
        } else {
            header.style.height = null;
        }
    }
}