const toggle = $("#toggle");

const body = $("body");
const main = $("main");
const nome = $(".name");
const cargo = $(".cargo");
const btnPrimary = $(".btn.primary");
const btnSecond = $(".btn.second");
const meusProjetos = $("main h3");
const socialMedia = $(".social-media");
const footer = $("footer");

toggle.click(() => {
  // Adiciona a classe dark-mode

  body.toggleClass("dark-mode");
  main.toggleClass("dark-mode");
  nome.toggleClass("dark-mode");
  cargo.toggleClass("dark-mode");
  btnPrimary.toggleClass("dark-mode");
  btnSecond.toggleClass("dark-mode");
  meusProjetos.toggleClass("dark-mode");
  socialMedia.toggleClass("dark-mode");
  toggle.toggleClass("dark-mode");
  footer.toggleClass("dark-mode");
});
