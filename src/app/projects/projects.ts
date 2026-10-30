import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectService, Project } from '../services/project'; // Alias to avoid name conflict


@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
  <div class="wrapper"> <!-- Wrapper div for photo grid -->

       <!-- project container -->
        <div class="slide-in" >

            <div class="projects-header">
              <h3 class="eyebrow">What I've Been Building</h3>
              <h1>Projects</h1>

              <div class="divider"></div>

              <p>A mix of client work, experiments, and ideas brought to life.</p>
            </div>

            <div class="featured-project">
              <div class="featured-image">
                <img src="/images/featured-image.png" alt="Featured Project Image">
              </div>
              <div class="featured-info">
                <h2>Holly Valley &mdash; Artist Portfolio</h2>

                <div class="featured-divider"></div>

                <p>A whimsical, mobile-first portfolio website designed and developed for
                  illustrator Holly Valley. The site combines a cozy, sketchbook-inspired
                  visual identity with responsive layouts, custom typography, layered imagery,
                  and subtle interactive details to create a personal space for showcasing
                  her artwork.</p>
                <div class="project-links">
                  <a class="project-link-a" href="https://hollyillustration.netlify.app/" target="_blank">
                    Check it out
                  </a>

                  <a class="project-link-b" href="https://github.com/leahhwd/hv-art-portfolio" target="_blank">

                      View Repository

                  </a>
                </div>
              </div>
            </div>


                <div class="other-projects"> <!-- Project info section -->
                  <h4>More Projects</h4>
                  <div class="divider"></div>
                  <div *ngFor="let project of projects; let i = index" class="project-container" (click)="setActive(i)" (mouseleave)="clearActive()">
                    <img [src]="project.img" [alt]="project.title">
                    <div class="project-info-overlay" [class.show]="activeIndex === i">
                      <h2>{{ project.title }}</h2>
                      <p>{{ project.description }}</p>
                      <a href="{{ project.link }}" target="_blank" class="project-link">
                        View Project →
                      </a>
                    </div>
                  </div>
                </div>

            </div>

        </div>



  `,
  styles: `

.wrapper {
    padding: 1.5rem;
    margin : 0 auto;
    overflow: hidden;
    justify-content: center;
  }

  .projects-header {
    display: flex;
    flex-direction: column;
    padding-bottom: 1.5rem;
  }

  .projects-header h3 {
    font-size: 1rem;
    font-family: 'Fira Code', sans-serif;
    color: #d45c73;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: 500;
    margin-bottom: 1rem;
  }

  .eyebrow::before {
  content: "•";
  margin-right: .5rem;
  width: 8px;
  height: 8px;
}

  .projects-header h1 {
    font-family: 'Fira Code', sans-serif;
    font-size: 2rem;
    color: #e6d3b3;
    font-weight: 500;
    text-transform: uppercase;
  }

.slide-in {
  transform: translateX(40px);
  animation: slideIn 1.5s ease forwards;
  opacity: 0;
}

@keyframes slideIn {
  100% {
    transform: translateX(0);
    opacity: 1;
  }
}

.divider {
  width: 70px;
  height: 1.5px;
  background-color: #d45c73;
  margin: 1rem 0;
}


.featured-info {
  padding: 2rem 5%;
  color: #e6d3b3;
  font-family: 'Fira Code', sans-serif;
}

.featured-info h2 {
  font-weight: 400;
  color: #d45c73;
}

.featured-info p {
  font-size: .90rem;
  line-height: 1.5;
  margin: 1rem 0;
}



.project-links {
  padding-top: 10%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .80rem;

}

.project-link-a,
.project-link-b {
  padding: 0.5rem 1rem;
  border-radius: 10px;
  background: transparent;
  font-family: 'Fira Code', sans-serif;
  font-size: 1rem;
  text-decoration: none;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
}

.project-link-a { border: 1px solid #d45c73; color: #d45c73; }
.project-link-b { border: 1px solid #6b7d3a; color: #6b7d3a; }

.project-link {
  text-decoration: none;
  color: #d45c73;
  font-family: 'Fira Code', sans-serif;
  font-size: .80rem;
  text-transform: uppercase;
  transition: color 0.3s;
}
.projects-header p {
  font-family: 'Fira Code', sans-serif;
  font-size: .90rem;
  color: #e6d3b3;
  max-width: 600px;
}

.featured-project, .other-projects {
  display: block;
  width: 100%;
}

.featured-project {
  display: flex;
  align-items: center;
  flex-direction: column;
  border-radius: 8px;
  background: rgba(0, 0, 0, 0.5);
  border: 1px solid rgb(212 92 115 / 0.5);
  max-width: 900px;
}

.featured-image img {
  width: 100%;
  aspect-ratio: 16/9;
  object-fit: contain;
  border-radius: 8px;
  display: block;
  padding: 20px;
  max-width: 1024px;
  filter: drop-shadow(0 0 12px rgba(166, 66, 83, 0.5));
}

.other-projects {
  display: flex;
  flex-direction: column;
  margin: 2.5rem auto 0;
  gap: 1rem;
  max-width: 600px;
}

h4 {
  font-family: 'Fira Code', sans-serif;
  font-size: 1rem;
  color: #e6d3b3;
  text-transform: uppercase;
  font-weight: 500;
}

.project-container {
  width: 100%;
  border: 1px solid rgba(107, 125, 58, 0.75);
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.project-container img {
width: clamp(125px, 25%, 500px);
height: auto;
  border-radius: 8px;
  aspect-ratio: 16/9;
  object-fit: cover;
  border-radius: 8px;
  display: block;
  margin-left: 0.5rem;
  filter: drop-shadow(0 0 12px rgba(84, 100, 46, 0.7));
}

.project-info-overlay {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #e6d3b3;
  font-family: 'Fira Code', sans-serif;
  padding: 1rem 1rem 0.5rem 1rem;
}

.project-info-overlay h2 {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.project-info-overlay p {
  display: none;
}

a, .project-link {
  appearance: none;
  -webkit-appearance: none;
  background: none;
  border: none;
  outline: none;
  box-shadow: none;
  padding: 0;
  margin: 0;
  color: #A64253;
  font: inherit;
  text-transform: uppercase;
  cursor: pointer;
  font-size: 0.95rem;
}

@media (min-width: 768px) {

  .project-links {
    flex-direction: row;
    justify-content: center;
    padding-top: 5%;
    padding-bottom: 5%;
  }

  .divider {
    width: 50%;
  }

  .project-container {
    display: flex;
    flex-direction: column;
  }
  .project-container img {
    width: 90%;
    margin-top: 1rem;
    border-radius: 8px;

  }

  .project-info-overlay h2 {
    font-size: 1.2rem;
  }

  .project-info-overlay p {
  display: block;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.project-links a {
  justify-content: center;
}


}

@media(min-width: 1024px) {
  .project-links {
    gap: 3rem;
  }
}

`
})
export class ProjectsComponent implements OnInit {

  activeIndex: number | null = null; // Track the active project index
  projects: Project[] = [];


  constructor(private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projects = this.projectService.getProjects();
  }

  setActive(index: number) {
    this.activeIndex = index;
    }

  clearActive() {
    this.activeIndex = null;
  }
}
