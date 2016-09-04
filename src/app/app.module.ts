import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FeedComponent } from './feed';
import { MenuComponent } from './menu';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [ AppComponent, FeedComponent, MenuComponent ],
    providers: [ ],
    imports: [ BrowserModule, FormsModule ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
