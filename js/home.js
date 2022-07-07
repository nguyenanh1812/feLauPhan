const posts = [
    {
        id: 1,
        idRestaurant: 1,
        imgLink: "https://cdn.lauphan.com/photo-storage/myFile-1656917855697.png",
        title: "TEAM NƯỚNG LÊN ĐỒ - NHẬN BUFFET 299K",
        description: "☀️ Thời tiết nắng nóng như này mà có kèo nướng tụ tập cạ cứng để “tắm mát” thì thích phải biết...",
    },
    {
        id: 2,
        idRestaurant: 1,
        imgLink: "https://cdn.lauphan.com/photo-storage/myFile-1655364821636.jpeg",
        title: "DUY NHẤT CẢ NGÀY THỨ 3 BUFFET NƯỚNG CHỈ CÒN 33K",
        description: "Làu chiêu đãi đại tiệc nướng vô cùng hoành tráng chỉ với 33k mỗi tuần vào cả ngày thứ 3 để anh em...",
    },
    {
        id: 3,
        idRestaurant: 1,
        imgLink: "https://cdn.lauphan.com/photo-storage/myFile-1655364968972.png",
        title: "🥊 DEAL HẠ NHIỆT GIẢM 50% 🥊",
        description: "Đến Phan tránh nắng, tận hưởng không khí điều hòa mát lạnh và nhận ngay DEAL GIẢM 50% tha hồ...",
    },
    {
        id: 4,
        idRestaurant: 1,
        imgLink: "https://cdn.lauphan.com/photo-storage/myFile-1650338052715.jpeg",
        title: "BẬT CHẾ ĐỘ BAY LÊN - DUY NHẤT THỨ 3 BUFFET 33K",
        description: "Anh em tranh thủ ghé Lẩu Phan vào mỗi thứ 3 hàng tuần để nhận ngay buffet 33k nhá 📌 Set kèo ăn...",
    },
    {
        id: 5,
        idRestaurant: 2,
        imgLink: "https://cdn.lauphan.com/photo-storage/myFile-1651807723252.png",
        title: "PHAN UPDATE MENU SHIP - GIẢM 40% COMBO LẨU CHỈ 97K/ NGƯỜI 🎉🎉",
        description: "Dành cho các tín đồ đang vã lẩu đây, giải tỏa cơn thèm thịt với hẳn 𝟏 𝐤𝐠 𝐭𝐡𝐢̣𝐭 𝐛𝐨̀ 𝐔́𝐜 trong mỗi...",
    },
    {
        id: 6,
        idRestaurant: 3,
        imgLink: "https://cdn.lauphan.com/photo-storage/myFile-1641441790289.jpeg",
        title: "FREE 'NÂNG CẤP' LẨU 2 NGĂN - THỎA SỨC NHÚNG KHÔNG GIỚI HẠN MENU MỚI",
        description: "Cả tuần mix đủ loại nước lẩu siêu ghiền với giá 0Đ, nhúng gắp thả ga với : 🔸 5 vị nước lẩu thích...",
    },
    {
        id: 7,
        idRestaurant: 3,
        imgLink: "https://cdn.lauphan.com/photo-storage/myFile-1651807723252.png",
        title: "TEAM NƯỚNG LÊN ĐỒ - NHẬN BUFFET 299K - Lẩu 2 ngăn",
        description: "☀️ Thời tiết thoải mái mát mẻ như này mà có kèo nướng tụ tập cạ cứng để “tắm mát” thì thích phải biết...",
    },
]

// tạo 6 thẻ Uu đãi 
function showShortPosts() {
    const row = document.querySelector(`#posts`)
    for (let i in posts) {
        if(i<6){
            const postDiv = document.createElement('div')
            postDiv.classList.add('col-xl-4')
            postDiv.classList.add('mb-4')
            postDiv.innerHTML = ` 
            <div class="card" style="width: 100%;">
              <img src="${posts[i].imgLink}" class="card-img-top" alt="Banner">
              <div class="card-body">
              <div style ="height: 70px">
                <h5 class="card-title fw-bold">${posts[i].title.slice(0,50)}</h5> 
              </div>
                <p class="card-text fw-normal">${posts[i].description.slice(0,50)}...</p>
                <a href="#" class="btn btn-outline-warning">Xem chi tiết <i class="fa-solid fa-arrow-right"></i></a>
              </div>
            </div>`
            row.append(postDiv)
        }
    }
} showShortPosts()
