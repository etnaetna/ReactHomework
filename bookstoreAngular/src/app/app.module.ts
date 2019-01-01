import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { SiteContainerComponent } from './site-container/site-container.component';
import { ContentComponent } from './content/content.component';
import { BlogItemComponent } from './blog-item/blog-item.component';
import { VoteComponent } from './vote/vote.component';
import { FavItmComponent } from './fav-itm/fav-itm.component';
import { BlogItemDetailsComponent } from './blog-item-details/blog-item-details.component';
import { ReviewComponent } from './review/review.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FavouritesComponent,
    SiteContainerComponent,
    ContentComponent,
    BlogItemComponent,
    VoteComponent,
    FavItmComponent,
    BlogItemDetailsComponent,
    ReviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
