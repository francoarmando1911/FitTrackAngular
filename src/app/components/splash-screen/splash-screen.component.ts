import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-splash-screen',
  templateUrl: './splash-screen.component.html',
  styleUrls: ['./splash-screen.component.scss']
})
export class SplashScreenComponent {
  imageLoaded = false;
  hide = false;

  @Output() finish = new EventEmitter<void>();

  onImageLoad() {
    console.log('[SplashScreen] Imagen cargada');
    this.imageLoaded = true;

    setTimeout(() => {
      console.log('[SplashScreen] Ocultando splash...');
      this.hide = true;

      setTimeout(() => {
        console.log('[SplashScreen] Emitiendo finish');
        this.finish.emit();
      }, 200);
    }, 1000);
  }  
}

