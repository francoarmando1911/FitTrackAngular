import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component'; 
import { CommonModule } from '@angular/common';
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SplashScreenComponent, FooterComponent, HeaderComponent], 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'fitTrackAngular';
  showSplash = true;

  onSplashFinish() {
    this.showSplash = false;
  }
}
