import { Routes } from '@angular/router';
import { ProductList } from './shared/components/product-list/product-list';
import { ProductDetail } from './shared/components/product-detail/product-detail';
import { ErrorPage } from './shared/components/error-page/error-page';


export const routes: Routes = [
    {
         //LandingPage
        path: "",
        component: ProductList
    },

    {
         //Detail of Product
        path: "detail/:productName",
        component: ProductDetail
    },

    {
        //Error Page
        path:"page_not_found",
        component: ErrorPage
    },

    {
        //example for an not available site
        path:"tonies",
        redirectTo: ""
    },

    { 
        //wildcard
        path: "**",
        redirectTo: "page_not_found"
    }
];
