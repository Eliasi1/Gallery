'use strict'

var gProjs = [
    { id: 1, name: "Mines Sweeper", title: "the good old one", desc: "like the one for windows, but better", url: "https://eliasi1.github.io/minesSweeper/", publishedAt: 1669586400000, labels: ["Matrixes", "keyboard events"]}
]

function createProjHTMLstr() {
    var strHTML = gProjs.map((proj) =>  `
    <div class="row">
    <div class="col-md-4 col-sm-6 portfolio-item">
      <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${proj.id}">
        <div class="portfolio-hover">
          <div class="portfolio-hover-content">
            <i class="fa fa-plus fa-3x"></i>
          </div>
        </div>
        <img class="img-fluid" src="img/portfolio/0${proj.id}-thumbnail.jpg" alt="">
      </a>
      <div class="portfolio-caption">
        <h4>${proj.name}</h4>
        <p class="text-muted">${proj.title}</p>
      </div>
    </div>
    `
    )
    return strHTML.join('')
}

function createProjModalHTMLstr(){
    var strHTML = gProjs.map((proj) => {
        var dateConvert = new Date(proj.publishedAt)
        var dateConverted = `${dateConvert.getMonth()+1}-${dateConvert.getFullYear()}`
return `
    <div class="portfolio-modal modal fade" id="portfolioModal${proj.id}" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="close-modal" data-dismiss="modal">
          <div class="lr">
            <div class="rl"></div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mx-auto">
              <div class="modal-body">
                <!-- Project Details Go Here -->
                <h2>${proj.name}</h2>
                <p class="item-intro text-muted">${proj.title}.</p>
                <img class="img-fluid d-block mx-auto" src="img/portfolio/0${proj.id}-full.jpg" alt="">
                <p>${proj.desc}</p>
                <ul class="list-inline">
                  <li>Date: ${dateConverted}</li>
                  <li>Client: Threads</li>
                  <li>Category: ${proj.labels.join(', ')}</li>
                </ul>
                <a href="${proj.url}" target="_blank" rel="noopener noreferrer">
                <button class="btn btn-primary" type="button">Check it out!</button>
                </a><br>
                <button class="btn btn-primary" data-dismiss="modal" type="button">
                <i class="fa fa-times"></i>
                Close Project</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
    `}
)
return strHTML.join('')
}