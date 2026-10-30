import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <main animate.enter="slide-in">

      <section class="hero">
        <!-- Left side content -->
        <div class="hero-content">

          <p class="header-intro">HI, I'M</p>

          <h1 class="header-name-bold">LEAH</h1>
          <h2 class="header-name-light">Marie Kathleen</h2>

          <p class="title">Full-Stack Developer</p>

          <div class="divider"></div>
          <!--reduce? -->
          <p class="description">I build responsive web apps from front end to back end.</p>

          <div class="cta-buttons">
            <a routerLink="/projects" class="projects-link">VIEW MY WORK →</a>
            <a routerLink="/about" class="about-link">ABOUT ME</a>
          </div>
        </div>
        <!-- Left side content end -->

        <!-- Right side visual content -->
         <div class="hero-visual">
          <div class="laptop-image-wrap">
            <img class="about-image" src="images/profile-img-mobile(1).png" alt="Profile Image"/>
            <img class="about-image-desk" src="images/profile-img-desktop(3).png" alt="Profile Image"/>
          </div>
        </div>
        <!--Right side visual content end-->
      </section>

      <!--Featured Information section-->
      <section class="featured-info">
        <!--Add html icon codes here for each feature, and add text descriptions-->
        <div class="feature">
          <img src="images/code.svg" alt="Code Icon" width="40" height="40">
          <div class="feature-content">
            <h3>CLEAN CODE</h3>
            <p>Simple code that does what it says.</p>
          </div>
        </div>

        <div class="feature-divider"></div>

        <div class="feature">
          <img src="images/storage.svg" class="featured-icon" alt="Stack Icon" width="40" height="40">
          <div class="feature-content">
            <h3>Full-Stack</h3>
            <p>I build both sides from interface to API.</p>
          </div>
        </div>

        <div class="feature-divider"></div>

        <div class="feature">
          <img src="images/person.svg" alt="person icon" class="featured-icon" width="40" height="40">
          <div class="feature-content">
            <h3>User Focused</h3>
            <p>Designing with real people in mind, tested on real devices.</p>
          </div>
        </div>

      </section>
    </main>
  `,
  styles: `



/*Slide in Animation*/
  .slide-in {
    transform: translateX(40px);
    animation: slideIn 1.5s ease forwards;
    opacity: 0;
  }


@keyframes slideIn {
  100% {
    opacity: 1;
    transform: translateX(0);
  }
}
/*end slide in animation*/




/*Hero section styles*/
.hero {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0px 20px;
}

.header-intro {
  font-family: 'Fira Code', sans-serif;
  padding-top: 40px;
  letter-spacing: 2.5px;
  font-size: 1.5rem;
  color: #d45c73;
}

.header-name-bold {
  font-family: 'Bebas Neue', sans-serif;
  color: #e6d3b3;
  font-size: 7rem;
  letter-spacing: 15px;
}

.header-name-light {
  font-family: 'Allura', cursive;
  font-weight: 200;
  font-size: 2.25rem;
  margin-top: -40px;
  letter-spacing: 2px;
  color: #d45c73;
}

.title {
  margin-top: 20px;
  font-family: 'Fira Code', sans-serif;
  font-size: .90rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: #e6d3b3;
}

.about-image-desk {
  display: none;
}

.about-image{
  display: block;
  width: 100%;
  transform: scale(1.25);
  height: auto;
  -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
}

.description {
  margin-top: 30px;
  max-width: 500px;
  font-family: 'Fira Code', sans-serif;
  font-size: 1rem;
  line-height: 1.5;
  color: #e6d3b3;
}

.divider {
  width: 70px;
  height: 1.5px;
  background-color: #d45c73;
  margin: 30px 0;
}

.cta-buttons {
  display: flex;
  flex-direction: column;
  width: 75%;
  padding-top: 25px;
  margin-right: 10px;
  text-decoration: none;
  font-family: 'Fira Code', sans-serif;
  transition: all 0.3s ease;
}

.cta-buttons a {
  padding: 12px 15px;
  margin-bottom: 15px;
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

.about-link {
  border: 1px solid #6b7d3a;
  color: #6b7d3a;
  border-radius: 10px;
}

.about-link:hover {
  background-color: #6b7d3a;
  color: black;
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

.featured-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.feature {
  display: flex;
  align-items: flex-start;
  gap: 14px;
  padding: 15px;
  text-align: left;
  width: min(100%, 440px);
}

.feature-content {
  flex: 1;
}

.feature img {
  flex-shrink: 0;
}

.feature h3 {
  color: #e6d3b3;
  font-size: 1rem;
  font-family: 'Fira Code', sans-serif;
  margin: 0;
}

.feature p {
  color: #e6d3b3;
  font-size: .85rem;
  font-family: 'Fira Code', sans-serif;
  padding-top: 10px;
  margin: 0;
}

.feature-divider {
  width: 95%;
  height: 1px;
  background-color: #6b7d3a;
  opacity: 0.8;
  margin: 10px 0;
}


@media(min-width: 768px) {

  .header-intro {
    padding-top: 50px;
  }

  .header-name-bold {
    font-size: 11em;
  }

  .header-name-light {
    font-size: 4em;
    margin-top: -80px;
    padding-left: 30px;
  }

  .title {
    font-size: 1.5rem;
    font-weight: 500;
  }

  .cta-buttons {
    flex-direction: row;
    gap: 20px;

  }

  .cta-buttons a {
    width: 100%;

  }
}

@media(min-width: 1024px) {
  main {
    display: flex;
    flex-direction: column;
    min-height: 100dvh;
    justify-content: center;
  }

  .hero {
    flex: 1;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: clamp(24px, 3vw, 56px);
    min-height: 0;
    width: min(100%, 1300px);
    margin: 0 auto;
  }

  .hero-content {
    flex: 1 1 0;
    max-width: 520px;
  }

  .header-name-bold {
    font-size: 11em;
  }

  .header-name-light {
    font-size: 3em;
    margin-top: -80px;
    padding-left: 30px;
  }

  .hero-visual {
    flex: 1.4 1 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 0;
  }

   .about-image-desk {
    display: block;
    width: 100%;
    max-width: none;
    transform: scale(1.15);
    height: auto;
      -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
    mask-image: linear-gradient(to bottom, black 50%, transparent 100%);
  }

  .about-image {
    display: none;
  }

  .laptop-image-wrap {
    width: 100%;
    max-width: 760px;
    padding: 0;
    margin: 0;
  }

  .laptop-image {
    max-width: clamp(280px, 34vw, 500px);
  }


  .featured-info {
    flex-direction: row;
    align-items: stretch;
    justify-content: space-between;
    gap: 0;
    width: 100%;
    padding: 24px 15px 32px;
  }

  .feature {
    flex: 1;
    width: auto;
    max-width: none;
    padding: 0 20px;
  }

  .feature-divider {
    flex: 0 0 1px;
    width: 1px;
    min-width: 1px;
    height: auto;
    min-height: 85px;
    margin: 0;
    align-self: stretch;
  }
}

  `
})
export class HomeComponent {

}
