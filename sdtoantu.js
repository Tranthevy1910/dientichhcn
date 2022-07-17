function hinhchunhat() {
    var dai = parseInt(document.forms["hinhchunhatform"]["dai"].value);
    var rong = parseInt(document.forms["hinhchunhatform"]["rong"].value);
    var dientich = dai * rong; 
    document.getElementById("dientich").innerHTML=" Diện tích của hình chữ nhật có dài " + dai + " nhân rộng " + rong + " là " + dientich;
}