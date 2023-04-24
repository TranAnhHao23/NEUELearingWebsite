window.ladi_viewport = function () {
    var screen_width = window.ladi_screen_width || window.screen.width;
    var width = window.outerWidth > 0 ? window.outerWidth : screen_width;
    var widthDevice = width;
    var is_desktop = width >= 768;
    var content = "";
    if (typeof window.ladi_is_desktop == "undefined" || window.ladi_is_desktop == undefined) {
        window.ladi_is_desktop = is_desktop;
    }
    if (!is_desktop) {
        widthDevice = 420;
    } else {
        widthDevice = 960;
    }
    content = "width=" + widthDevice + ", user-scalable=no";
    var scale = 1;
    if (!is_desktop && widthDevice != screen_width && screen_width > 0) {
        scale = screen_width / widthDevice;
    }
    if (scale != 1) {
        content += ", initial-scale=" + scale + ", minimum-scale=" + scale + ", maximum-scale=" + scale;
    }
    var docViewport = document.getElementById("viewport");
    if (!docViewport) {
        docViewport = document.createElement("meta");
        docViewport.setAttribute("id", "viewport");
        docViewport.setAttribute("name", "viewport");
        document.head.appendChild(docViewport);
    }
    docViewport.setAttribute("content", content);
};
window.ladi_viewport();
window.ladi_fbq_data = [];
window.ladi_fbq = function (track_name, conversion_name, data, event_data) {
    window.ladi_fbq_data.push([track_name, conversion_name, data, event_data]);
};

window.dataLayer = window.dataLayer || [];

function gtag() {
    dataLayer.push(arguments);
}

gtag("js", new Date());
gtag("config", "UA-160639739-4", {allow_enhanced_conversions: true});
gtag("config", "AW-625785712", {allow_enhanced_conversions: true});

function gtm(w, d, s, l, i) {
    w[l] = w[l] || [];
    w[l].push({'gtm.start': new Date().getTime(), event: 'gtm.js'});
    var f = d.getElementsByTagName(s)[0], j = d.createElement(s), dl = l != 'dataLayer' ? '&l=' + l : '';
    j.async = true;
    j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
    f.parentNode.insertBefore(j, f);
}

gtm(window, document, 'script', 'dataLayer', 'GTM-N4T2733');

!function (w, d, t) {
    w.TiktokAnalyticsObject = t;
    var ttq = w[t] = w[t] || [];
    ttq.methods = ["page", "track", "identify", "instances", "debug", "on", "off", "once", "ready", "alias", "group", "enableCookie", "disableCookie"], ttq.setAndDefer = function (t, e) {
        t[e] = function () {
            t.push([e].concat(Array.prototype.slice.call(arguments, 0)))
        }
    };
    for (var i = 0; i < ttq.methods.length; i++) ttq.setAndDefer(ttq, ttq.methods[i]);
    ttq.instance = function (t) {
        for (var e = ttq._i[t] || [], n = 0; n < ttq.methods.length; n++) ttq.setAndDefer(e, ttq.methods[n]);
        return e
    }, ttq.load = function (e, n) {
        var i = "https://analytics.tiktok.com/i18n/pixel/events.js";
        ttq._i = ttq._i || {}, ttq._i[e] = [], ttq._i[e]._u = i, ttq._t = ttq._t || {}, ttq._t[e] = +new Date, ttq._o = ttq._o || {}, ttq._o[e] = n || {};
        var o = document.createElement("script");
        o.type = "text/javascript", o.async = !0, o.src = i + "?sdkid=" + e + "&lib=" + t;
        var a = document.getElementsByTagName("script")[0];
        a.parentNode.insertBefore(o, a)
    };

    ttq.load('CG78P9JC77U7T197JF10');
    ttq.page();
}(window, document, 'ttq');

<!--Start of Tawk.to Script-->
// Load Tawk.to script
var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
(function () {
    var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
    s1.async = true;
    s1.src = "https://embed.tawk.to/5f054b5c760b2b560e6ff158/default";
    s1.charset = "UTF-8";
    s1.setAttribute("crossorigin", "*");
    s0.parentNode.insertBefore(s1, s0);
})();

//Track chat starting event
Tawk_API.onChatStarted = function () {
    gtag('event', 'BatDauChat', {
        'event_category': 'tawkto', 'event_label': 'eneu.edu.vn',
    });
};

//Track chat ending event
Tawk_API.onChatEnded = function () {
    gtag('event', 'KetThucChat', {
        'event_category': 'tawkto', 'event_label': 'eneu.edu.vn',
    });
};

//Track offline message
Tawk_API.onOfflineSubmit = function (data) {
    gtag('event', 'TinNhanOffline', {
        'event_category': 'tawkto', 'event_label': 'eneu.edu.vn',
    });
};
//More tawk.to events triggered by the tawk.to API https://www.tawk.to/javascript-api/
//Google Analytics gtag.js send event documentation https://developers.google.com/analytics/devguides/collection/gtagjs/events
<!--End of Tawk.to Script-->

// this part is used to update -> ĐĂNG KÍ NGAY TRƯỚC KHI THỜI GIAN KẾT THÚC HOẶC SỐ LƯỢNG HỌC VIÊN ĐẠT GIỚI HẠN
(function () {
    var r = window.document.referrer != "" ? window.document.referrer : window.location.origin;
    var regex = /(https?:\/\/.*?)\//g;
    var furl = regex.exec(r);
    r = furl ? furl[0] : r;
    var f = document.createElement("iframe");
    const url_string = new URLSearchParams(window.location.search);
    var utm_source, utm_campaign, utm_medium, utm_content, utm_term, utm_user, utm_account;
    if ((!url_string.has('utm_source') || url_string.get('utm_source') == '') && document.cookie.match(new RegExp('utm_source' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_source' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_source') != null ? "&utm_source=" + url_string.get('utm_source') : "";
    }
    if ((!url_string.has('utm_campaign') || url_string.get('utm_campaign') == '') && document.cookie.match(new RegExp('utm_campaign' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_campaign' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_campaign') != null ? "&utm_campaign=" + url_string.get('utm_campaign') : "";
    }
    if ((!url_string.has('utm_medium') || url_string.get('utm_medium') == '') && document.cookie.match(new RegExp('utm_medium' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_medium' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_medium') != null ? "&utm_medium=" + url_string.get('utm_medium') : "";
    }
    if ((!url_string.has('utm_content') || url_string.get('utm_content') == '') && document.cookie.match(new RegExp('utm_content' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_content' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_content') != null ? "&utm_content=" + url_string.get('utm_content') : "";
    }
    if ((!url_string.has('utm_term') || url_string.get('utm_term') == '') && document.cookie.match(new RegExp('utm_term' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_term' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_term') != null ? "&utm_term=" + url_string.get('utm_term') : "";
    }
    if ((!url_string.has('utm_user') || url_string.get('utm_user') == '') && document.cookie.match(new RegExp('utm_user' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_user' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_user') != null ? "&utm_user=" + url_string.get('utm_user') : "";
    }
    if ((!url_string.has('utm_account') || url_string.get('utm_account') == '') && document.cookie.match(new RegExp('utm_account' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_account' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_account') != null ? "&utm_account=" + url_string.get('utm_account') : "";
    }
    r += "&full_url=" + encodeURIComponent(window.location.href);
    f.setAttribute("src", "...");
    f.style.width = "100%";
    f.style.height = "500px";
    f.setAttribute("frameborder", "0");
    f.setAttribute("marginheight", "0");
    f.setAttribute("marginwidth", "0");
    var s = document.getElementById("getfly-optin-form-iframe-1680151794712");
    s.appendChild(f);
})();

window.lazyload_run = function (dom, is_first, check_dom_rect) {
    if (check_dom_rect && (document.body.clientWidth <= 0 || document.body.clientheight <= 0)) {
        return setTimeout(function () {
            window.lazyload_run(dom, is_first, check_dom_rect);
        }, 1);
    }
    var style_lazyload = document.getElementById('style_lazyload');
    var list_element_lazyload = dom.querySelectorAll('.ladi-overlay, .ladi-box, .ladi-button-background, .ladi-collection-item, .ladi-countdown-background, .ladi-form-item-background, .ladi-form-label-container .ladi-form-label-item.image, .ladi-frame-background, .ladi-gallery-view-item, .ladi-gallery-control-item, .ladi-headline, .ladi-image-background, .ladi-list-paragraph ul li, .ladi-section-background, .ladi-survey-option-background, .ladi-survey-option-image, .ladi-tabs-background, .ladi-video-background, .ladi-banner, .ladi-spin-lucky-screen, .ladi-spin-lucky-start');
    var docEventScroll = window;
    for (var i = 0; i < list_element_lazyload.length; i++) {
        var rect = list_element_lazyload[i].getBoundingClientRect();
        if (rect.x == "undefined" || rect.x == undefined || rect.y == "undefined" || rect.y == undefined) {
            rect.x = rect.left;
            rect.y = rect.top;
        }
        var offset_top = rect.y + window.scrollY;
        if (offset_top >= window.scrollY + window.innerHeight || window.scrollY >= offset_top + list_element_lazyload[i].offsetHeight) {
            list_element_lazyload[i].classList.add('ladi-lazyload');
        }
    }
    if (typeof style_lazyload != "undefined" && style_lazyload != undefined) {
        style_lazyload.parentElement.removeChild(style_lazyload);
    }
    var currentScrollY = window.scrollY;
    var stopLazyload = function (event) {
        if (event.type == "scroll" && window.scrollY == currentScrollY) {
            currentScrollY = -1;
            return;
        }
        docEventScroll.removeEventListener('scroll', stopLazyload);
        list_element_lazyload = document.getElementsByClassName('ladi-lazyload');
        while (list_element_lazyload.length > 0) {
            list_element_lazyload[0].classList.remove('ladi-lazyload');
        }
    };
    if (is_first) {
        var scrollEventPassive = null;
        try {
            var opts = Object.defineProperty({}, 'passive', {
                get: function () {
                    scrollEventPassive = {passive: true};
                }
            });
            window.addEventListener('testPassive', null, opts);
            window.removeEventListener('testPassive', null, opts);
        } catch (e) {
        }
        docEventScroll.addEventListener('scroll', stopLazyload, scrollEventPassive);
    }
    return dom;
};
window.lazyload_run(document, true, true);

// this part is used to update -> CHƯƠNG TRÌNH ĐẠI HỌC TRỰC TUYẾN ĐẠI HỌC KINH TẾ QUỐC DÂN
(function () {
    var r = window.document.referrer != "" ? window.document.referrer : window.location.origin;
    var regex = /(https?:\/\/.*?)\//g;
    var furl = regex.exec(r);
    r = furl ? furl[0] : r;
    var f = document.createElement("iframe");
    const url_string = new URLSearchParams(window.location.search);
    var utm_source, utm_campaign, utm_medium, utm_content, utm_term, utm_user, utm_account;
    if ((!url_string.has('utm_source') || url_string.get('utm_source') == '') && document.cookie.match(new RegExp('utm_source' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_source' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_source') != null ? "&utm_source=" + url_string.get('utm_source') : "";
    }
    if ((!url_string.has('utm_campaign') || url_string.get('utm_campaign') == '') && document.cookie.match(new RegExp('utm_campaign' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_campaign' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_campaign') != null ? "&utm_campaign=" + url_string.get('utm_campaign') : "";
    }
    if ((!url_string.has('utm_medium') || url_string.get('utm_medium') == '') && document.cookie.match(new RegExp('utm_medium' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_medium' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_medium') != null ? "&utm_medium=" + url_string.get('utm_medium') : "";
    }
    if ((!url_string.has('utm_content') || url_string.get('utm_content') == '') && document.cookie.match(new RegExp('utm_content' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_content' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_content') != null ? "&utm_content=" + url_string.get('utm_content') : "";
    }
    if ((!url_string.has('utm_term') || url_string.get('utm_term') == '') && document.cookie.match(new RegExp('utm_term' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_term' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_term') != null ? "&utm_term=" + url_string.get('utm_term') : "";
    }
    if ((!url_string.has('utm_user') || url_string.get('utm_user') == '') && document.cookie.match(new RegExp('utm_user' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_user' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_user') != null ? "&utm_user=" + url_string.get('utm_user') : "";
    }
    if ((!url_string.has('utm_account') || url_string.get('utm_account') == '') && document.cookie.match(new RegExp('utm_account' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_account' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_account') != null ? "&utm_account=" + url_string.get('utm_account') : "";
    }
    r += "&full_url=" + encodeURIComponent(window.location.href);
    f.setAttribute("src", "https://crm.aumerp.com/api/forms/viewform/?key=GA43FhhEA13yPz8m7qhVHbTqPPS13e5T9S2SSTKKQGLyZIeDIO&referrer=" + r);
    f.style.width = "100%";
    f.style.height = "200px";
    f.setAttribute("frameborder", "0");
    f.setAttribute("marginheight", "0");
    f.setAttribute("marginwidth", "0");
    var s = document.getElementById("getfly-optin-form-iframe-1680151880379");
    s.appendChild(f);
})();

(function () {
    var r = window.document.referrer != "" ? window.document.referrer : window.location.origin;
    var regex = /(https?:\/\/.*?)\//g;
    var furl = regex.exec(r);
    r = furl ? furl[0] : r;
    var f = document.createElement("iframe");
    const url_string = new URLSearchParams(window.location.search);
    var utm_source, utm_campaign, utm_medium, utm_content, utm_term, utm_user, utm_account;
    if ((!url_string.has('utm_source') || url_string.get('utm_source') == '') && document.cookie.match(new RegExp('utm_source' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_source' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_source') != null ? "&utm_source=" + url_string.get('utm_source') : "";
    }
    if ((!url_string.has('utm_campaign') || url_string.get('utm_campaign') == '') && document.cookie.match(new RegExp('utm_campaign' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_campaign' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_campaign') != null ? "&utm_campaign=" + url_string.get('utm_campaign') : "";
    }
    if ((!url_string.has('utm_medium') || url_string.get('utm_medium') == '') && document.cookie.match(new RegExp('utm_medium' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_medium' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_medium') != null ? "&utm_medium=" + url_string.get('utm_medium') : "";
    }
    if ((!url_string.has('utm_content') || url_string.get('utm_content') == '') && document.cookie.match(new RegExp('utm_content' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_content' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_content') != null ? "&utm_content=" + url_string.get('utm_content') : "";
    }
    if ((!url_string.has('utm_term') || url_string.get('utm_term') == '') && document.cookie.match(new RegExp('utm_term' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_term' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_term') != null ? "&utm_term=" + url_string.get('utm_term') : "";
    }
    if ((!url_string.has('utm_user') || url_string.get('utm_user') == '') && document.cookie.match(new RegExp('utm_user' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_user' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_user') != null ? "&utm_user=" + url_string.get('utm_user') : "";
    }
    if ((!url_string.has('utm_account') || url_string.get('utm_account') == '') && document.cookie.match(new RegExp('utm_account' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_account' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_account') != null ? "&utm_account=" + url_string.get('utm_account') : "";
    }
    r += "&full_url=" + encodeURIComponent(window.location.href);
    f.setAttribute("src", "https://crm.aumerp.com/api/forms/viewform/?key=9lRBkwZ7vBBY7W6zBR9f2cdGUFC0riuKkoczTlmQLte3raET7E&referrer=" + r);
    f.style.width = "100%";
    f.style.height = "400px";
    f.setAttribute("frameborder", "0");
    f.setAttribute("marginheight", "0");
    f.setAttribute("marginwidth", "0");
    var s = document.getElementById("getfly-optin-form-iframe-1680151851488");
    s.appendChild(f);
})();

// Để lại lời nhắn cho chúng tôi
(function () {
    var r = window.document.referrer != "" ? window.document.referrer : window.location.origin;
    var regex = /(https?:\/\/.*?)\//g;
    var furl = regex.exec(r);
    r = furl ? furl[0] : r;
    var f = document.createElement("iframe");
    const url_string = new URLSearchParams(window.location.search);
    var utm_source, utm_campaign, utm_medium, utm_content, utm_term, utm_user, utm_account;
    if ((!url_string.has('utm_source') || url_string.get('utm_source') == '') && document.cookie.match(new RegExp('utm_source' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_source' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_source') != null ? "&utm_source=" + url_string.get('utm_source') : "";
    }
    if ((!url_string.has('utm_campaign') || url_string.get('utm_campaign') == '') && document.cookie.match(new RegExp('utm_campaign' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_campaign' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_campaign') != null ? "&utm_campaign=" + url_string.get('utm_campaign') : "";
    }
    if ((!url_string.has('utm_medium') || url_string.get('utm_medium') == '') && document.cookie.match(new RegExp('utm_medium' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_medium' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_medium') != null ? "&utm_medium=" + url_string.get('utm_medium') : "";
    }
    if ((!url_string.has('utm_content') || url_string.get('utm_content') == '') && document.cookie.match(new RegExp('utm_content' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_content' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_content') != null ? "&utm_content=" + url_string.get('utm_content') : "";
    }
    if ((!url_string.has('utm_term') || url_string.get('utm_term') == '') && document.cookie.match(new RegExp('utm_term' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_term' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_term') != null ? "&utm_term=" + url_string.get('utm_term') : "";
    }
    if ((!url_string.has('utm_user') || url_string.get('utm_user') == '') && document.cookie.match(new RegExp('utm_user' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_user' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_user') != null ? "&utm_user=" + url_string.get('utm_user') : "";
    }
    if ((!url_string.has('utm_account') || url_string.get('utm_account') == '') && document.cookie.match(new RegExp('utm_account' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_account' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_account') != null ? "&utm_account=" + url_string.get('utm_account') : "";
    }
    r += "&full_url=" + encodeURIComponent(window.location.href);
    f.setAttribute("src", "https://crm.aumerp.com/api/forms/viewform/?key=QtK3PNW5XrDjG6NqWQtzglOufUjIUgeEHUtEVDMXaTWUoQPbSQ&referrer=" + r);
    f.style.width = "100%";
    f.style.height = "300px";
    f.setAttribute("frameborder", "0");
    f.setAttribute("marginheight", "0");
    f.setAttribute("marginwidth", "0");
    var s = document.getElementById("getfly-optin-form-iframe-1660799582484");
    s.appendChild(f);
})();

// Lộ trình học trực tuyến ĐH KTQD
(function () {
    var r = window.document.referrer != "" ? window.document.referrer : window.location.origin;
    var regex = /(https?:\/\/.*?)\//g;
    var furl = regex.exec(r);
    r = furl ? furl[0] : r;
    var f = document.createElement("iframe");
    const url_string = new URLSearchParams(window.location.search);
    var utm_source, utm_campaign, utm_medium, utm_content, utm_term, utm_user, utm_account;
    if ((!url_string.has('utm_source') || url_string.get('utm_source') == '') && document.cookie.match(new RegExp('utm_source' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_source' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_source') != null ? "&utm_source=" + url_string.get('utm_source') : "";
    }
    if ((!url_string.has('utm_campaign') || url_string.get('utm_campaign') == '') && document.cookie.match(new RegExp('utm_campaign' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_campaign' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_campaign') != null ? "&utm_campaign=" + url_string.get('utm_campaign') : "";
    }
    if ((!url_string.has('utm_medium') || url_string.get('utm_medium') == '') && document.cookie.match(new RegExp('utm_medium' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_medium' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_medium') != null ? "&utm_medium=" + url_string.get('utm_medium') : "";
    }
    if ((!url_string.has('utm_content') || url_string.get('utm_content') == '') && document.cookie.match(new RegExp('utm_content' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_content' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_content') != null ? "&utm_content=" + url_string.get('utm_content') : "";
    }
    if ((!url_string.has('utm_term') || url_string.get('utm_term') == '') && document.cookie.match(new RegExp('utm_term' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_term' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_term') != null ? "&utm_term=" + url_string.get('utm_term') : "";
    }
    if ((!url_string.has('utm_user') || url_string.get('utm_user') == '') && document.cookie.match(new RegExp('utm_user' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_user' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_user') != null ? "&utm_user=" + url_string.get('utm_user') : "";
    }
    if ((!url_string.has('utm_account') || url_string.get('utm_account') == '') && document.cookie.match(new RegExp('utm_account' + '=([^;]+)')) != null) {
        r += "&" + document.cookie.match(new RegExp('utm_account' + '=([^;]+)'))[0];
    } else {
        r += url_string.get('utm_account') != null ? "&utm_account=" + url_string.get('utm_account') : "";
    }
    r += "&full_url=" + encodeURIComponent(window.location.href);
    f.setAttribute("src", "https://crm.aumerp.com/api/forms/viewform/?key=3DtSJO1RBCvzQ9Wo3DDMAniqrev8Lt1VRl2JjvS6gBTF7UHlRB&referrer=" + r);
    f.style.width = "100%";
    f.style.height = "300px";
    f.setAttribute("frameborder", "0");
    f.setAttribute("marginheight", "0");
    f.setAttribute("marginwidth", "0");
    var s = document.getElementById("getfly-optin-form-iframe-1660798876556");
    s.appendChild(f);
})();

// run video
const video = document.getElementById('myVideo');
video.addEventListener('click', () => {
    if (video.paused) {
        video.play();
    } else {
        video.pause();
    }
});
