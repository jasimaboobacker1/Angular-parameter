import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {
  products = [
    {
        id: 1,
        name: 'Laptop',
        price: 999.99,
        description: 'A laptop is a portable computer that you can use for various tasks such as work, gaming, and entertainment. It typically has a screen, keyboard, and trackpad or mouse for input. Laptops come in different sizes, specifications, and designs to suit different needs and preferences.',
        warranty: '1 year',
       
    },
    {
        id: 2,
        name: 'Smartphone',
        price: 699.99,
        description: 'A smartphone is a mobile device that combines the functions of a phone with those of other popular digital devices such as a camera, music player, and personal digital assistant (PDA). Smartphones have become an essential part of modern life, offering connectivity, productivity, and entertainment in a single device.',
        warranty: '2 years'
    },
    {
        id: 3,
        name: 'Tablet',
        price: 399.99,
        description: 'A tablet is a mobile device that features a touchscreen display and is often used for browsing the internet, watching videos, reading e-books, and playing games. Tablets are smaller and lighter than laptops, making them more portable and convenient for on-the-go use.',
        warranty: '1 year'
    },
    {
        id: 4,
        name: 'Headphones',
        price: 149.99,
        description: 'Headphones are audio devices that you wear over your ears to listen to music, podcasts, or other audio content. They come in various styles, including over-ear, on-ear, and in-ear, and can be wired or wireless. Headphones provide a private listening experience and are popular for use with smartphones, tablets, and laptops.',
        warranty: '1 year'
    },
    {
        id: 5,
        name: 'Smartwatch',
        price: 249.99,
        description: 'A smartwatch is a wearable device that offers features beyond those of a traditional wristwatch. Smartwatches can track fitness metrics, receive notifications from your smartphone, and even run apps. They are often used as a companion to a smartphone, providing quick access to information and functions.',
        warranty: '2 years'
    },
    {
        id: 6,
        name: 'Camera',
        price: 799.99,
        description: 'A camera is a device used to capture photographs or videos. There are various types of cameras, including digital cameras, DSLRs, and mirrorless cameras, each offering different features and capabilities. Cameras are essential tools for photographers, hobbyists, and professionals alike.',
        warranty: '1 year'
    },
    {
        id: 7,
        name: 'Speaker System',
        price: 299.99,
        description: 'A speaker system is a set of speakers that are connected to an audio source to produce sound. Speaker systems come in various configurations, including stereo, surround sound, and soundbar setups. They are used for listening to music, watching movies, and enhancing the audio experience of TVs and home entertainment systems.',
        warranty: '1 year'
    },
    {
        id: 8,
        name: 'Hard Drive',
        price: 129.99,
        description: 'An external hard drive is a storage device that connects to a computer or other device externally, typically via USB. External hard drives are used to store and back up data, such as documents, photos, videos, and music. They provide additional storage capacity and can be easily transported.',
        warranty: '2 years'
    },
    {
        id: 9,
        name: 'Gaming Console',
        price: 399.99,
        description: 'A gaming console is a specialized computer system designed for playing video games. Consoles come with their own controllers and are connected to a TV or monitor for gameplay. Popular gaming consoles include PlayStation, Xbox, and Nintendo Switch, offering a wide range of games and entertainment options.',
        warranty: '1 year'
    },
    {
        id: 10,
        name: 'Wireless Router',
        price: 99.99,
        description: 'A wireless router is a device that allows multiple devices to connect to a local area network (LAN) and access the internet wirelessly. Routers manage network traffic and enable devices to communicate with each other. They are essential for setting up home or office networks for internet access.',
        warranty: '1 year'
    },
    {
        id: 11,
        name: 'Fitness Tracker',
        price: 149.99,
        description: 'A fitness tracker is a wearable device that monitors and tracks fitness-related metrics such as steps taken, distance traveled, calories burned, and even heart rate. Fitness trackers are popular among individuals who want to stay active and track their progress towards fitness goals.',
        warranty: '2 years'
    },
    {
        id: 12,
        name: 'Monitor',
        price: 299.99,
        description: 'A monitor is an output device that displays visual information from a computer or other electronic device. Monitors come in various sizes and resolutions, offering different levels of image quality and screen real estate. Monitors are essential for tasks such as gaming, video editing, and everyday computing.',
        warranty: '1 year'
    }
];

constructor(private router: Router) {}

viewDetails(product: any) {
    this.router.navigate(['/products/product/', product.id, product.name,product.description,product.warranty,product.price]);
}


  

}
