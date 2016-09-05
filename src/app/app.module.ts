import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed';
import { MenuComponent } from './menu';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { FeedService } from './feed.service';
import { routing, appRoutingProviders } from './app.routing';

@NgModule({
    declarations: [ AppComponent, FeedComponent, MenuComponent ],
    providers: [ UserService, FeedService, appRoutingProviders ],
    imports: [ BrowserModule, FormsModule, routing ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
