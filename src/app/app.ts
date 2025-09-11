import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SiteFooter } from "./site-footer/site-footer";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SiteFooter],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('benharrison-portfolio');
}
