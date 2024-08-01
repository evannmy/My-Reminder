const submit_button = document.querySelector(".submit");
const reset = document.querySelector(".reset");
const gaji = document.querySelector(".gaji");
const penghasilan_lain = document.querySelector(".penghasilan_lain");
const jumlah = document.querySelector(".jumlah");
const result = document.querySelector(".result");

submit_button.addEventListener("click", function() {
    let value_gaji = 0;
    let value_penghasilan_lain = 0;
    let value_jumlah = 0;

    if(gaji.value != "" ) {
        value_gaji = gaji.value;
    }

    if(penghasilan_lain.value != "") {
        value_penghasilan_lain = penghasilan_lain.value;
    }

    if(value_gaji != 0 || value_penghasilan_lain != 0) {
        result.classList.add("arrise");
        value_jumlah = parseInt(value_gaji) + parseInt(value_penghasilan_lain);
        if(value_jumlah >= 6859394) {
            jumlah.value = value_jumlah.toLocaleString();

            const zakat_value = parseInt(2.5 / 100 * value_jumlah);
            result.innerHTML = "Jumlah Wajib Zakat yang harus dibayarkan adalah <b>Rp. " + zakat_value.toLocaleString() + "</b>";
        } else {
            result.innerHTML = "Penghasilan Anda belum mencapai Nisab";
        }
    }
})

reset.addEventListener("click", function() {
    gaji.value = "";
    penghasilan_lain.value = "";
    jumlah.value = "";
    result.classList.remove("arrise");
})

