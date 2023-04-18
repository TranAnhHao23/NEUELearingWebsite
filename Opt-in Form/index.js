function sendEmail() {
    let name = document.getElementById("account_name").value;
    let phone = document.getElementById("account_phone").value;
    let regisBranch = document.getElementById("nganh_dang_ky").value;
    let subject = "New registration from" + name;
    let body = "Họ và tên: " + name + "\n" +
                "Số điện thoại: " + phone + "\n" +
                "Ngành đăng ký: " + regisBranch
        window.open("mailto:trananhhaonuce@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body))
}
