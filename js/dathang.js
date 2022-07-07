const type_dish = [
    {
        id: 1,
        name: "Món đặc biệt"
    },
    {
        id: 2,
        name: "Dịch vụ"
    },
    {
        id: 3,
        name: "Combo Lẩu 3-5 người"
    },
    {
        id: 4,
        name: "Combo Lẩu 6-7 người"
    },
    {
        id: 5,
        name: "Combo Lẩu 8-10 người"
    },
    {
        id: 6,
        name: "Món nhúng gọi thêm"
    },
]
const dishes = [
    {
        id: 1,
        type_id: 1,
        name: "Bò lúc lắc sốt tiêu đen",
        description: "300g",
        price: "105.000",
        imgLink: "https://cdn.lauphan.com/photo-storage/myFile-1640706124113.jpeg"
    },
    {
        id: 2,
        type_id: 1,
        name: "Gà xốt xí muội",
        description: "250g",
        price: "75.000",
        imgLink: "https://cdn.lauphan.com/photo-storage/myFile-1640705920870.jpeg"
    },
    {
        id: 3,
        type_id: 1,
        name: "Bánh gà phô mai",
        description: "200g",
        price: "50.000",
        imgLink: "https://cdn.lauphan.com/photo-storage/myFile-1640710979466.jpeg"
    },
    {
        id: 4,
        type_id: 1,
        name: "Hoành thánh kem phô mai",
        description: "300g",
        price: "50.000",
        imgLink: "https://cdn.lauphan.com/photo-storage/myFile-1640705409433.jpeg"
    },
    {
        id: 5,
        type_id: 1,
        name: "Salad rong biển trứng cua",
        description: "300g",
        price: "35.000",
        imgLink: "https://cdn.lauphan.com/photo-storage/myFile-1630169723202.jpeg"
    },
    {
        id: 6,
        type_id: 2,
        name: "Gói dịch vụ tiện ích dùng 1 lần",
        description: "Gói dịch vụ bao gồm: 6 bộ Bao giấy đũa, thìa tăm, giấy ăn, 6 Khăn ướt và 1 Khăn trải bàn dùng 1 lần, 6 bộ Bát, Đĩa gia vị dùng 1 lần",
        price: "50.000",
        imgLink: "https://cdn.lauphan.com/photo-storage/myFile-1640711015758.jpeg"
    },
    {
        id: 7,
        type_id: 2,
        name: "Gói dịch vụ mượn bếp, nồi, muôi Lẩu",
        description: "Gói dịch vụ bao gồm: 1 bếp gas mini, 2 bình gas, 1 nồi lẩu, 1 bộ muôi lẩu",
        price: "100.000",
        imgLink: "https://cdn.lauphan.com/photo-storage/myFile-1646736196189.jpeg"
    },
    {
        id: 8,
        type_id: 2,
        name: "Gói dịch vụ mượn bếp",
        description: "mượn trả chỉ bếp và nồi",
        price: "40.000",
        imgLink: "https://cdn.lauphan.com/photo-storage/myFile-1646736196189.jpeg"
    },
    {
        id: 9,
        type_id: 3,
        name: "Combo 650K lẩu kim chi",
        description: "Set bao gồm: Nước lẩu Kim Chi 2.5 lít,<br>- Nước chấm chua cay 100g- Ba chỉ bò Úc 1000g<br>- Rau và ngô tổng hợp 1100g, Mỳ 4 gói",
        price: "649.000",
        imgLink: "https://cdn.lauphan.com/photo-storage/myFile-1652932012549.jpeg"
    },
    {
        id: 10,
        type_id: 3,
        name: "Combo 650K lẩu chua sấu",
        description: "Vị Lẩu sấu chua chua",
        price: "669.000",
        imgLink: "https://cdn.lauphan.com/photo-storage/myFile-1652932012549.jpeg"
    },
    {
        id: 11,
        type_id: 3,
        name: "Combo 650K lẩu Thái",
        description: "Vị Lẩu Thái chua cay",
        price: "659.000",
        imgLink: "https://cdn.lauphan.com/photo-storage/myFile-1652932012549.jpeg"
    },
    {
        id: 12,
        type_id: 4,
        name: "Combo 867K lẩu kim chi",
        description: "Vị Lẩu kim chi cay tê nức mũi",
        price: "805.000",
        imgLink: "https://cdn.lauphan.com/photo-storage/myFile-1652931975443.jpeg"
    },
    {
        id: 14,
        type_id: 5,
        name: "Combo 1310K lẩu kim chi",
        description: `Set bao gồm: <br>- Nước lẩu Thái 2.5 lít, Nước chấm chua cay 100g <br>- Khai vị Salad rong biển trứng cua 230g, Bánh gà phô mai 200g, Hoành thánh kem phô mai 200g, Gà sốt xí muội 250g
        <br>- Ba chỉ bò Úc 1000g, Bò mềm thượng hạng 200g
        <br>- Bạch tuộc 150g, Tôm lớt 150g, Thanh cua 70g
        <br>- Đùi gà thả lẩu 200g, Sủi cảo Hong Kong 200g
        <br>- Đậu hũ phô mai 120g, Xúc xích phô mai 100g
        <br>- Rau và ngô tổng hợp 1100g, Mỳ 4 gói`,
        price: "1310.000",
        imgLink: "https://cdn.lauphan.com/photo-storage/myFile-1640705180416.jpeg"
    },
    {
        id: 15,
        type_id: 6,
        name: "Bò mềm thượng hạng",
        description: "300g",
        price: "95.000",
        imgLink: "https://cdn.lauphan.com/photo-storage/myFile-1640710938862.jpeg"
    },
    {
        id: 16,
        type_id: 6,
        name: "Ba chỉ bò Úc Sale 55%",
        description: "300g",
        price: "55.000",
        imgLink: "https://cdn.lauphan.com/photo-storage/myFile-1640705617035.jpeg"
    },
    {
        id: 17,
        type_id: 6,
        name: "Bạch tuộc",
        description: "300g",
        price: "105.000",
        imgLink: "https://cdn.lauphan.com/photo-storage/myFile-1640705329002.jpeg"
    },
    {
        id: 18,
        type_id: 6,
        name: "Tôm ướt",
        description: "500g",
        price: "215.000",
        imgLink: "https://cdn.lauphan.com/photo-storage/myFile-1640705372097.jpeg"
    },
    {
        id: 19,
        type_id: 6,
        name: "Tôm tươi",
        description: "400g",
        price: "300.000",
        imgLink: "https://cdn.lauphan.com/photo-storage/myFile-1640705372097.jpeg"
    },
    {
        id: 20,
        type_id: 6,
        name: "Combo rau nhúng",
        description: "500g",
        price: "75.000",
        imgLink: "https://cdn.lauphan.com/photo-storage/myFile-1640705763749.jpeg"
    },
]

// Tạo các thẻ div loại món ăn
function showTypeDish() {
    const listType = document.getElementById('list-dish')
    for (let j in type_dish) {
        const dishTypeDiv = document.createElement('div')
        dishTypeDiv.innerHTML = `
                <div class="row dish" id = "type-${type_dish[j].id}">
                  <p class="text-white p-1" style="background: #fd7e14;"><i class="fa-solid fa-utensils"></i> ${type_dish[j].name}</p>
                </div>
                `
        listType.append(dishTypeDiv)
    }
} showTypeDish()

// tạo dish trong từng type dish
function showListDish() {
    let typeDish;
    console.log(typeDish)
    for (let i in dishes) {
        const dishDiv = document.createElement('div')
        dishDiv.classList.add('col-lg-6')
        for (let j in type_dish) {
            const listType = document.getElementById(`type-${type_dish[j].id}`)
            if (type_dish[j].id === dishes[i].type_id) {
                dishDiv.innerHTML = `
                    <div class="d-flex bd-highlight mb-3">
                    <div class="p-2 bd-highlight">
                    <img src="${dishes[i].imgLink}" alt="Món ăn" width="60px" height="60px" class="mt-2">
                    </div>
                    
                    <div class="p-2 bd-highlight">
                    <span class="fw-bold">${dishes[i].name}</span> 
                        <p class="fs-6">
                        ${dishes[i].description}
                        </p>
                    </div>
                    <div class="ms-auto p-2 bd-highlight">
                        <p class="text-orange" style="width: 80px">Giá tiền:<br> ${dishes[i].price}</p>
                        <span> 
                        <i class="fa-solid fa-circle-minus hide text-orange" id="btn-minus-${dishes[i].id}"></i>
                        <span class="price">  </span>
                        <i class="fa-solid fa-circle-plus" id="btn-plus-${dishes[i].id}"></i>      
                        </span>
                    </div>
                    </div>
                `
                listType.append(dishDiv) 
            }
        }
    }
} showListDish()
