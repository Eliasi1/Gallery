console.log('Starting up');
const gMyEmail = "Contact@sre-management.com"
$("body").ready(onInit)

function onInit(){
    renderProjs()
    renderModal()
}

function renderProjs(){
    var strHTML = `
    <div class="container">
      <div class="row">
        <div class="col-lg-12 text-center">
          <h2 class="section-heading">Portfolio</h2>
          <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
        </div>
      </div>
    `
    strHTML += createProjHTMLstr()
document.querySelector("#portfolio").innerHTML = strHTML
}

function renderModal(){
    document.querySelector("#portfolio-modals").innerHTML = createProjModalHTMLstr()

}