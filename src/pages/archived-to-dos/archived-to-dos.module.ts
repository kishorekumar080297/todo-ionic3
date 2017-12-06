import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ArchivedToDosPage } from './archived-to-dos';

@NgModule({
  declarations: [
    ArchivedToDosPage,
  ],
  imports: [
    IonicPageModule.forChild(ArchivedToDosPage),
  ],
})
export class ArchivedToDosPageModule {}
