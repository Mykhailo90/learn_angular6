import { BeersService } from './beers.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BeersComponent } from './beers.component';

@NgModule({
  providers: [
    BeersService
  ],
  imports: [
    CommonModule
  ],
  declarations: [BeersComponent]
})
export class BeersModule { }
