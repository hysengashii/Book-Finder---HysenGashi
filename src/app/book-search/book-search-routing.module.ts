
import { RouterModule, Routes } from "@angular/router";
import { BookSearchComponent } from "./book-search.component";
import { BookDetailsComponent } from "./components/book-details/book-details.component";


const routes: Routes=[
  {
    path:'tasks',component:BookSearchComponent,children:[
      {path:'book-details',component:BookDetailsComponent},

    ]
  }
];


export const BookSearchRoutingModule = RouterModule.forChild(routes);
