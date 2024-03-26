import { Routes, provideRouter, withComponentInputBinding } from '@angular/router';
import { ProductComponent } from './products/product/product.component';
import { NgModule } from '@angular/core';


export const routes: Routes = [
    {path:'',loadComponent:()=>import('./home/home.component').then((c)=>c.HomeComponent)},
    {path:'about',loadComponent:()=>import('./contact/contact.component').then((c)=>c.ContactComponent)},
    {path:'contact',loadComponent:()=>import('./about/about.component').then((c)=>c.AboutComponent)},
    {path:'products',loadComponent:()=>import('./products/products.component').then((c)=>c.ProductsComponent)},
    {path:'products/product/:id/:name/:description/:warranty/:price',component:ProductComponent},]
   
    