import { Component, signal, ElementRef, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { transition, trigger, style, animate, query } from '@angular/animations';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterModule],
  template: `
  <div class='wrapper'>
    <div class="dot-grid" #grid aria-hidden="true"></div>
      <nav class='nav-bar' aria-label='Main'>


        <a class='nav__logo' [routerLink]="['/']" (click)="closeMobileNav()">LMK</a> <!-- Fix logo width -->

        <!--Hamburger Menu for Mobile-->
        <button class='hamburger' type="button" aria-label="Toggle navigation" (click)="toggleMobileNav()">
          <span class='bar'></span>
          <span class='bar'></span>
          <span class='bar'></span>
        </button>

        <div class="nav__menu" id="nav-menu" [class.open]="mobileNavOpen">
              <ul class="nav__list">
                <li>
                  <a class="nav__link" routerLink="/about" routerLinkActive="active-link"
                    ariaCurrentWhenActive="page" (click)="closeMobileNav()">
                    <span class="nav__num">01</span>About
                  </a>
                </li>
                <li>
                  <a class="nav__link" routerLink="/projects" routerLinkActive="active-link"
                    ariaCurrentWhenActive="page" (click)="closeMobileNav()">
                    <span class="nav__num">02</span>Projects
                  </a>
                </li>
                <li>
                  <a class="nav__link" routerLink="/contact" routerLinkActive="active-link"
                    ariaCurrentWhenActive="page" (click)="closeMobileNav()">
                    <span class="nav__num">03</span>Contact
                  </a>
                </li>
              </ul>

            <div class='nav__social'>
                    <a href="https://github.com/leahmkdev" target="_blank" rel="noopener">GitHub ↗</a>
                    <a href="https://linkedin.com/in/lmkdev" target="_blank" rel="noopener">LinkedIn ↗</a>
            </div>
          </div>
      </nav>

    <main class='main-content'>
          <section class='content'>
            <router-outlet></router-outlet>
          </section>
    </main>
  </div>
  `,
  styles: [`



  `],
})
export class App implements AfterViewInit, OnDestroy {
  protected readonly title = signal('my-portfolio');
  @ViewChild('grid')grid!: ElementRef<HTMLElement>;

  private raf = 0;
  private x = -999;
  private y = -999;
  private onMove?: (e: MouseEvent) => void;
  mobileNavOpen = false;

  toggleMobileNav(): void {
    this.mobileNavOpen = !this.mobileNavOpen;
  }
  closeMobileNav(): void {
    this.mobileNavOpen = false;
  }

  ngAfterViewInit(): void {
    if(!matchMedia('(hover:hover) and (pointer:fine)').matches) return;

    const el = this.grid.nativeElement;
    this.onMove = (e) => {
      this.x = e.clientX;
      this.y = e.clientY;
      if(this.raf) return;
        this.raf = requestAnimationFrame(() => {
        el.style.setProperty('--mx', `${this.x}px`);
        el.style.setProperty('--my', `${this.y}px`);
        this.raf = 0;
      });
    };
    addEventListener('mousemove', this.onMove, {passive: true});
  }

  ngOnDestroy(): void {
    if(this.onMove) removeEventListener('mousemove', this.onMove);
    cancelAnimationFrame(this.raf);
  }

}
