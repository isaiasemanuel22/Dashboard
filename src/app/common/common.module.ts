import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatorComponent } from './navigator/navigator.component';
import { ButtomsModule } from '../buttoms/buttoms.module';
import { LogoComponent } from './logo/logo.component';
import { SvgModule } from '../svg/svg.module';



@NgModule({
  declarations: [
    NavigatorComponent,
    LogoComponent
  ],
  imports: [
    ButtomsModule,
    SvgModule
  ],
  exports:[
    NavigatorComponent,
    LogoComponent
  ]
})
export class DashboardCommonModule { }
