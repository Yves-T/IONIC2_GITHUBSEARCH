import {NgModule} from '@angular/core';
import {IonicApp, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {OrganisationsPage} from "../pages/organisations/organisations";
import {ReposPage} from "../pages/repos/repos";
import {UsersPage} from "../pages/users/users";
import {GithubUsers} from "../providers/github-users";
import {UserDetailsPage} from "../pages/user-details/user-details";

@NgModule({
  declarations: [
    MyApp,
    OrganisationsPage,
    ReposPage,
    UsersPage,
    UserDetailsPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    OrganisationsPage,
    ReposPage,
    UsersPage,
    UserDetailsPage
  ],
  providers: [GithubUsers]
})
export class AppModule {
}
