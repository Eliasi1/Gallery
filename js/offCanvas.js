function openCanvas(){
    document.querySelector('.offcanvas-btn').classList.toggle('offcanvas-btn-open');
    document.querySelector('.offcanvas-aside').classList.toggle('offcanvas-aside-open');    
}

$('#btn-open-email').click(onOpenEmail)


function onOpenEmail() {
const name = $('#FormNameInput').val()
const subject  = $('#FormTitleInput').val()
const body = $('#FormTxtInput').val()
window.open(`mailto:https://mail.google.com/mail/?view=cm&fs=1&to=${gMyEmail}&subject=${name}-${subject}&body=${body}`)
}