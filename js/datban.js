const selectAddr = document.getElementById('addr')
selectAddr.addEventListener('change', onAddrChange)
function onAddrChange(event) {
    const result = document.getElementById('address-content')
    result.innerHTML = ` ${event.target.value}`
}

function chooseRest() {
    const btnRest = document.getElementsByClassName('btnRest')
    const hide = document.getElementsByClassName('hide-address')
    for (let i = 0; i < document.getElementsByClassName('btnRest').length; i++) {
        let clickBtn = btnRest[i]
        clickBtn.addEventListener('click', function () {
            //querySelector trả về phần tử đầu tiên phù hợp
            document.querySelector('.text-red').classList.remove('text-red')
            document.querySelector('.show-address').classList.remove('show-address')
            hide[i].classList.add("show-address")
            document.getElementById(`nameRest-${i + 1}`).classList.add('text-red')
        })

    }
} chooseRest()


document.getElementById('submit').addEventListener('click', function () {

    //select option không set value thì value mặc định là content trong option
    const addr = document.getElementById('address-content').innerText
    const numPeople = document.getElementById('numPeople').value
    const date = document.getElementById('date').value
    const time = document.getElementById('time').value
    const note = document.getElementById('note').value
    const nameBooked = document.getElementById('nameBooked').value
    const phoneNum = document.getElementById('phoneNum').value
    // if (addr == '') {
    //     alert('Bạn chưa chọn Cơ sở!')
    // }else
    // if (phoneNum.length != 10) {
    //     alert('Số điện thoại bạn nhập không chính xác!')
    // }else
    if (addr == '' || date == '' || time == '' || nameBooked == '' || phoneNum == '') {
        alert('Hãy điền đầy đủ các thông tin bắt buộc(*)!')
    }
    else {
        document.querySelector('.bg-form').innerHTML = `
        <div class='row'> <h2> Thông tin đặt bàn của bạn </h2>
        <p>Địa chỉ quán: ${addr} </p>
        <p>Số lượng người: ${numPeople} </p>
        <p>Thời gian: ${date} ${time} </p>
        <p>Ghi chú: ${note} </p>
        <p>Tên người đặt: ${nameBooked} </p>
        <p>Số điện thoại người đặt: ${phoneNum} </p>
        </div>`
    }
})

