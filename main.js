document.getElementById('pwd').onkeydown = function validPwd () {
    const pw = document.getElementById('pwd').value;
    const eng = pw.search(/[a-z]/ig);
    const activebtn = document.getElementById('btn');

    if (pw.length < 7 || pw.length > 20) {
        document.getElementById('message').style.display = 'flex';
        activebtn.disabled = true;
        activebtn.style.background = 'lightgray'
    } else if (eng < 0) {
        document.getElementById('message').style.display = 'flex';
        activebtn.disabled = true;
    } else {
        document.getElementById('message').style.display = 'none';
        activebtn.disabled = false;
        activebtn.style.background = 'lightgray'
        activebtn.style.background = "#32CD32";
        }
}

document.getElementById('btn').onclick = function submit () {
    const contain = document.getElementById('id').value;
    alert(contain + '님 어서오세요');
}