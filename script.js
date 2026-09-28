// 1. HIỂN THỊ POPUP KHI VÀO TRANG
window.onload = function() {
    // Đợi 1 giây sau khi load web mới hiện popup cho tự nhiên
    setTimeout(function() {
        document.getElementById("promoPopup").style.display = "flex";
    }, 1000);
};

// Đóng Popup
function closePopup() {
    document.getElementById("promoPopup").style.display = "none";
}

// 2. THANH MENU DÍNH & HIỆN NÚT BACK TO TOP KHI CUỘN TRANG
window.onscroll = function() {
    handleScroll();
};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;
var topButton = document.getElementById("backToTop");

function handleScroll() {
    // Menu dính
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }

    // Nút cuộn lên đầu trang (hiện khi cuộn xuống 300px)
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        topButton.style.display = "block";
    } else {
        topButton.style.display = "none";
    }
}

// 3. HÀM CUỘN LÊN ĐẦU TRANG
function scrollToTop() {
    document.body.scrollTop = 0; // Dành cho Safari
    document.documentElement.scrollTop = 0; // Dành cho Chrome, Firefox, IE và Opera
}
