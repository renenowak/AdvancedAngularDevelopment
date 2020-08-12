import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { AppComponent } from './app.component';
import { MaterialModule } from './material.module';
import { SkillsKpiComponent } from './skills/skills-kpi/skills-kpi.component';
import { SkillsListComponent } from './skills/skills-list/skills-list.component';
import { SkillsModule } from './skills/skills.module';
import { reducers, metaReducers } from './store/reducers';

@NgModule({
  declarations: [AppComponent, SkillsKpiComponent, SkillsListComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MaterialModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    SkillsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
