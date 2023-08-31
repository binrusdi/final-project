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


// Fungsi untuk mengambil konten dari file HTML
async function getContentFromHTML(filename, containerId) {
    const response = await fetch(filename);
    const html = await response.text();
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');
    const elements = doc.getElementsByTagName('p');
    if (elements.length > 1) {
        return elements[1].innerHTML;
    } else {
        return '';
    }
    
}

// Memanggil fungsi untuk setiap container dan file HTML yang sesuai
console.log(getContentFromHTML('about.html', 'p'[1]));
getContentFromHTML('skills.html', 'p'[1]);
getContentFromHTML('award.html', 'p'[1]);
getContentFromHTML('experiences.html', 'p'[1]);
getContentFromHTML('interests.html', 'p'[1]);
getContentFromHTML('education.html', 'p'[1]);

// Fungsi untuk memasukkan konten ke dalam container
async function populateContainer(containerId, filename) {
    const container = document.querySelector(containerId);
    console.log(container);
    const content = await getContentFromHTML(filename, "p");
    container.innerHTML = content;
}

// Memanggil fungsi untuk mengisi container dengan content
// populateContainer('p''[1]', 'index.html');
// populateContainer('about', 'about.html');
// populateContainer('award', 'award.html');
// populateContainer('interests', 'interests.html');
// populateContainer('experiences', 'experiences.html');
// populateContainer('education', 'education.html');

