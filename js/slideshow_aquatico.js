var pasta = "imagens/espetaculos/";
var imagens = ["a1.jpg","a2.jpg","a3.jpg", "a4.jpg"];
var tempo_apresentacao = 3;  //segundos

var slideIndex = 0;
var slide = document.getElementById("img1");  //obter caixa onde as imagens ficam
var slide2 = document.getElementById("img2");  //obter caixa onde as imagens ficam
slide.style.position = "absolute";
slide2.style.position = "absolute";
slide.style.width = "100%";
slide2.style.width = "100%";
var aux;
var imagemmudada = 0;
var num_imagens = imagens.length;  //obter numero de imagens a apresentar
var time = tempo_apresentacao * 1000;  //determinar tempo de apresentacao mas em milisegundos

criar_pontos();  //criar os pontos
var dots = document.getElementsByClassName("ponto_off");  //obter lista de pontos

showSlides();  //iniciar o ciclo

function changeimage(imagem)
{
  imagemmudada++;
  //resetar pontos (remover a sobreposicao da classe ponto_on)
  if (slideIndex == 0)
    dots[num_imagens-1].className = dots[num_imagens-1].className.replace(" ponto_on", "");
  else
    dots[slideIndex-1].className = dots[slideIndex-1].className.replace(" ponto_on", "");
  
    
  slideIndex = imagem;

  refresh();

  //proxima imagem
  slideIndex++;
  if (slideIndex >= num_imagens) {slideIndex = 0} //retornar para a primeira 
  setTimeout(showSlides, time); //alterar imagem daqui a ... segundos (tempo de apreentacao)

}

function controlar_animacao()
{
  slide.style.zIndex = 2;
  slide2.style.zIndex = 1;
  slide.className = "slide_img fadein";
  slide2.className = "slide_img";
}

function refresh()
{
  aux = slide;
  slide = slide2;
  slide2 = aux;

  //alterar a imagem atual
  slide.setAttribute("src", pasta.concat(imagens[slideIndex]));
  
  controlar_animacao();

  dots[slideIndex].className += " ponto_on";  //adicionar a classe ponto_on criando uma sobreposicao sobre a ponto_off
}

function criar_pontos()
{
  for(i = 0; i < num_imagens; ++i)
  {
    document.getElementById("dot_div").innerHTML = document.getElementById("dot_div").innerHTML.concat("<span onclick='changeimage(", i.toString(), ")' class='ponto_off'></span>");
  }
}

function showSlides() {
  if(imagemmudada != 0)
  {
    imagemmudada--;
    return;
  }
  //resetar pontos (remover a sobreposicao da classe ponto_on)
  if (slideIndex == 0)
    dots[num_imagens-1].className = dots[num_imagens-1].className.replace(" ponto_on", "");
  else
    dots[slideIndex-1].className = dots[slideIndex-1].className.replace(" ponto_on", "");
  
  refresh();  //atualizar a imagem e o ponto

  //proxima imagem
  slideIndex++;
  if (slideIndex >= num_imagens) {slideIndex = 0} //retornar para a primeira 

  setTimeout(showSlides, time); //alterar imagem daqui a ... segundos (tempo de apreentacao)
}
