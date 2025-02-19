import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  ViewEncapsulation,
} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SharedService } from '@hub/shared';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  template: `
    <h2>Micro Frontend Architecture</h2>

    <router-outlet />
  `,
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  private sharedService = inject(SharedService);

  ngOnInit(): void {
    this.sharedService.setData({ value: 'Hello Micro Frontend' });
  }
}
