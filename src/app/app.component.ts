import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import SpinnerComponent from '@shared/components/spinner.component';
import { HeaderComponent } from 'app/layout/header/header.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
