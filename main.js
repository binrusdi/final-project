// Membuat efek scroll navbar supaya tetap diam di tempat
const nav = document.getElementsByTagName("nav")[0];
const defaultNavStyles = {
    top: null,
    zIndex: null,
    padding: null,
    position: null,
    backgroundColor: null,
    backdropFilter: null,
    borderRadius: null,
    boxShadow: null
};
document.addEventListener("scroll", () => {
    const bodyScrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    
    if (bodyScrollTop === 0) {
        for (const style in defaultNavStyles) {
            nav.style[style] = defaultNavStyles[style];
        }
    } else {
        nav.style.top = 0;
        nav.style.zIndex = 100;
        nav.style.padding = "20px";
        nav.style.position = "sticky";
        nav.style.backgroundColor = "rgba(255, 255, 255, 0.7)";
        nav.style.backdropFilter = "blur(10px)";
        nav.style.borderRadius = "10px";
        nav.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
    }
});

// Menambahkan navigasi kembali ke root/index.html
let backToHome = document.getElementById("image"); //klik photo profile
backToHome.addEventListener("click", function backToHome() {
    window.location.href = "index.html"
});

// let host = window.location.host;
// let path = window.location.pathname;
// let halamanSekarang = `${host}+${path}`;

// if (path === "/index.html") {
//     alert("Jika anda tersesat, klik photo profile");
//   }