import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SplashScreenComponent } from './components/splash-screen/splash-screen.component'; // ⬅️ Asegurate de que esta ruta sea correcta
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SplashScreenComponent], 
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
