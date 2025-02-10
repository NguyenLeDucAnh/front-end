document.getElementById("postForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Ngăn form gửi dữ liệu để xử lý tại đây

    // Lấy dữ liệu từ form
    const title = document.getElementById("title").value;
    const content = document.getElementById("content").value;
    const imageInput = document.getElementById("image");
    const imageFile = imageInput.files[0];

    if (!imageFile) {
        alert("Vui lòng chọn một hình ảnh.");
        return;
    }

    // Tạo URL cho ảnh
    const imageUrl = URL.createObjectURL(imageFile);

    // Tạo bài viết mới
    const article = document.createElement("div");
    article.classList.add("article");
    article.innerHTML = `
        <h4>${title}</h4>
        <img src="${imageUrl}" alt="Ảnh minh họa" class="article-image">
        <p>${content}</p>
    `;

    // Thêm bài viết vào danh sách
    document.getElementById("postedArticles").appendChild(article);

    // Reset form
    document.getElementById("postForm").reset();
});

let currentIndex = 0; // Chỉ số tin đang hiển thị
const itemsPerPage = 4; // Hiển thị 4 tin một lần
const tinContainer = document.querySelector('.danh-sach-tin');
const totalItems = document.querySelectorAll('.tin').length;

function moveLeft() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - itemsPerPage;
    }
    updateView();
}

function moveRight() {
    if (currentIndex < totalItems - itemsPerPage) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateView();
}

function updateView() {
    tinContainer.style.transform = `translateX(-${currentIndex * 270}px)`; // 270px = 250px (width) + 15px (gap)
}

document.querySelector('.move-left').addEventListener('click', moveLeft);
document.querySelector('.move-right').addEventListener('click', moveRight);
