import { Routes } from '@angular/router';
import { ProductList } from './shared/components/product-list/product-list';
import { ProductDetail } from './shared/components/product-detail/product-detail';

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
    }
];
