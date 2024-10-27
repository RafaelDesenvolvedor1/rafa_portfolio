const toggle = $("#toggle")

const body = $('body')
const app = $(".app")
const box2 = $('.box2')
const nome = $('.name')
const cargo = $('.cargo')
const btnPrimary = $('.btn.primary')
const btnSecond = $('.btn.second')
const meusProjetos = $('.my-projects h3')
const socialMedia = $('.social-media')
const footer = $('footer')


toggle.click(() => {


    // Adiciona a classe dark-mode 

    body.toggleClass('dark-mode')
    app.toggleClass('dark-mode')
    box2.toggleClass('dark-mode')
    nome.toggleClass('dark-mode')
    cargo.toggleClass('dark-mode')
    btnPrimary.toggleClass('dark-mode')
    btnSecond.toggleClass('dark-mode')
    meusProjetos.toggleClass('dark-mode')
    socialMedia.toggleClass('dark-mode')
    toggle.toggleClass('dark-mode')
    footer.toggleClass('dark-mode')




})
