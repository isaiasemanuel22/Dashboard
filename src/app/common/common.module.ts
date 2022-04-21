import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigatorComponent } from './navigator/navigator.component';
import { ButtomsModule } from '../buttoms/buttoms.module';
import { LogoComponent } from './logo/logo.component';
import { SvgModule } from '../svg/svg.module';
import { ActionsComponent } from './actions/actions.component';
import { LayoutsModule } from '../layouts/layouts.module';



@NgModule({
  declarations: [
    NavigatorComponent,
    LogoComponent,
    ActionsComponent
  ],
  imports: [
    ButtomsModule,
    SvgModule,
    LayoutsModule
  ],
  exports:[
    NavigatorComponent,
    LogoComponent,
    ActionsComponent
  ]
})
export class DashboardCommonModule { }
