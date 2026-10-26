export interface Project {
  id: number;
  title: string;
  description: string;
  img: string;
  link: string;
}

import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class ProjectService {



  private Project = [
    { id: 0,
      title: "LMK | Web Studio",
      description: "My personal portfolio featuring the very site you're browsing right now.",
      img: "/images/lmk-web-2.webp",
      link: "https://github.com/leahhwd/portfolio-site"
    },
    { id: 1,
      title: "Nocturne",
      description: "An in-progress experiment comparing hand-coded development with AI-assisted vibe coding through the creation of a fictional music festival website.",
      img: "/images/nocturne.webp",
      link: "https://example.com/project-beta"
    },
  ];

  getProjects() {
    return this.Project;
  }

}
