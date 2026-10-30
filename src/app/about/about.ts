import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TechCarouselComponent } from '../tech-carousel/tech-carousel.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, TechCarouselComponent],
  template: `
    <main>
      <div class="about-content" animate.enter="slide-in">

        <div class="about-text">

          <p class="eyebrow">ABOUT ME</p>
          <h1>I build websites that work for you.</h1>

            <div class="divider"></div>

            <p class="about-paragraph">
              Hey 👋 I'm Leah, a full-stack developer who loves turning ideas into
              functional applications. I earned my B.S. in Full Stack Web Development
              in 2025 🎓 and build mostly with Angular and Node.js. Day to day, I'm
              pairing fresh ideas with stable code and sharpening the most important
              dev skill: knowing exactly what to Google.
            </p>


        </div>

        <div class="laptop-image-wrap">
            <img class="laptop-image" src="images/laptop-vector-2.png" alt="Laptop illustration" />
        </div>

        <div class="cta">
          <div class="cta-buttons">
            <a routerLink="/projects" class="projects-link">VIEW MY WORK →</a>
            <a routerLink="/contact" class="contact-link">CONTACT ME</a>
          </div>
        </div>

      </div>

      <div class="carousel">

              <h2 class="carousel-intro">Technologies I love &hearts;</h2>
              <app-tech-carousel class="tech-carousel"></app-tech-carousel>

      </div>
    </main>
  `,
  styles: `

 .slide-in {
  opacity: 0;
  transform: translateX(40px);
  animation: slideIn 1.5s ease forwards;
}

@keyframes slideIn {
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}

main {
  max-width: 100%;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}



.about-content {
  width: 100%;
  margin: 0 auto;
  padding-top: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.eyebrow {
  font-size: 1rem;
  color: #d45c73;
  font-family: 'Fira Code', sans-serif;
}

.eyebrow::before {
  content: "•";
  margin-right: .5rem;
  width: 8px;
  height: 8px;
}

.about-text {
  max-width: 700px;
  align-items: start;
  padding-left: 1rem;
  padding-right: 1rem;
}

h1 {
  font-family: 'Fira Code', sans-serif;
  font-size: 1.5rem;
  color: #e6d3b3;
  font-weight: 500;
  text-transform: uppercase;
  padding-top: 1.5rem;

}

.divider {
  width: 70px;
  height: 1.5px;
  background-color: #d45c73;
  margin: 30px 0;
}

.about-paragraph-2 {
  padding-top: 1.5rem;
}

p {
  font-family: 'Fira Code', sans-serif;
  color: #e6d3b3;
  line-height: 1.5;
}

.laptop-image-wrap {
  max-width: 460px;
  width: 100%;
  padding: 20px;
}

.laptop-image {
  display: block;
  width: 100%;
  max-width: 420px;
  height: auto;
  filter: drop-shadow(0 0 5px #d45c73);
}

.cta {
  display: flex;
  width: 100%;
  justify-content: center;
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
  width: 75%;

}

.cta-buttons a {
padding: 12px 15px;
  text-decoration: none;
  font-family: 'Fira Code', sans-serif;
  transition: all 0.3s ease;
}

.projects-link {
  border: 1px solid #d45c73;
  color: #d45c73;
  border-radius: 10px;
}

.projects-link:hover {
  background-color: #d45c73;
  color: #0b0b0b;
}

.contact-link {
  border: 1px solid #6b7d3a;
  color: #6b7d3a;
  border-radius: 10px;
}

.contact-link:hover {
  background-color: #6b7d3a;
  color: black;
}

.carousel-intro {
  color: #e6d3b3;
  font-family: 'Fira Code', sans-serif;
  font-size: .75rem;
  text-transform: uppercase;
  font-weight: 400;
   padding-top: 1.5rem;
}

.carousel {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 0.5rem;
}

.tech-carousel {
  margin-top: 1rem;
}


@media (min-width: 768px) {

  main {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

 .about-content {
    display: grid;
    width: 100%;
    max-width: 1024px;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto auto;
    grid-template-areas:
      "text   image"
      "text    cta";
      align-items: start;
      gap: 0;
    padding-top: 2rem;
  }

 .about-text {
  grid-area: text;
  text-align: left;
  line-height: normal;
  padding-left: 2rem;
  align-self: center;
 }

.about-text p {
  font-size: .75rem;
}

.laptop-image-wrap {
  grid-area: image;
  justify-self: center;
}

.cta {
  grid-area: cta;
}


 .cta-buttons {
    width: auto;
    align-self: start;

  }
 .carousel-intro {
    padding-top: 1rem;
    padding-bottom: 0;
  }
}


@media(min-width: 1440px) {
  .about-text p {
    font-size: 1rem;
  }
}


  `
})
export class AboutComponent {

}
