import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider';
import { JwBootstrapSwitchNg2Module } from 'jw-bootstrap-switch-ng2';
import { RouterModule } from '@angular/router';
import { BasicelementsComponent } from './basicelements/basicelements.component';
import { NavigationComponent } from './navigation/navigation.component';
import { TypographyComponent } from './typography/typography.component';
import { NucleoiconsComponent } from './nucleoicons/nucleoicons.component';
import { ComponentsComponent } from './components.component';
import { NotificationComponent } from './notification/notification.component';
import { NgbdModalBasic } from './modal/modal.component';
import { ONamaComponent } from './o-nama/o-nama.component';
import { PonudeComponent } from './ponude/ponude.component';
import { KontaktComponent } from './kontakt/kontakt.component';
import { DodajPonuduComponent } from './dodaj-ponudu/dodaj-ponudu.component';
import { ObrisiPonuduComponent } from './obrisi-ponudu/obrisi-ponudu.component';
import { LoginComponent } from './login/login.component';
import { ProfileComponent } from './profile/profile.component';


@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        NgbModule,
        NouisliderModule,
        RouterModule,
        JwBootstrapSwitchNg2Module
      ],
    declarations: [
        ComponentsComponent,
        BasicelementsComponent,
        NavigationComponent,
        TypographyComponent,
        NucleoiconsComponent,
        NotificationComponent,
        NgbdModalBasic,
        ONamaComponent,
        PonudeComponent,
        KontaktComponent,
        DodajPonuduComponent,
        ObrisiPonuduComponent,
        LoginComponent,
        ProfileComponent
    ],
    exports:[ ComponentsComponent ]
})
export class ComponentsModule { }
