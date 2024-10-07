import { Component, inject } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { GeoLocationService } from '../../../../services/location/geo-location.service';
import { GoogleMapsModule } from '@angular/google-maps';
import { CarouselModule } from 'primeng/carousel';


@Component({
  selector: 'app-cs-cities-around',
  standalone: true,
  imports: [
    TranslateModule,
    GoogleMapsModule,
    CarouselModule
],
  templateUrl: './cs-cities-around.component.html',
  styleUrl: './cs-cities-around.component.css',
  host: { ngSkipHydration: 'true' },
})
export class CsCitiesAroundComponent {
  translate : TranslateService = inject(TranslateService); 
  responsiveOptions: any[] | undefined;

  center: google.maps.LatLngLiteral = { lat: 40.7128, lng: -74.0060 }; // Default to New York City
  zoom = 12; // Set default zoom level
  markerOptions: google.maps.MarkerOptions = { draggable: false };
  isLocationAvailable = false; // Track if the actual location is available

  constructor(private geoLocattion : GeoLocationService){}

  ngOnInit(): void {
    this.getLocationFromGoogle();

    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 4,
          numScroll: 4
      },
      {
          breakpoint: '991px',
          numVisible: 4,
          numScroll: 4
      },
      {
          breakpoint: '767px',
          numVisible: 4,
          numScroll: 4
      }
    ];
  }

  

  getLocationFromGoogle() {
    this.geoLocattion.getGeoLocation().subscribe({
      next: value => {
        const { lat, lng } = value.location;
        this.center = {
          lat: lat,
          lng: lng,
        };
        this.isLocationAvailable = true;
      },
      error: err => console.error('Error fetching location from Google Geolocation API: ' + err),
    });
  }

  
  
  reviews = [
    {
      name: 'Berlin',
      designation: 'CEO',
      companyName: 'TechCorp',
      image: '/assets/images/cities/berlin.jpeg',
      url: '/testimonials/john-doe'
    },
    {
      name: 'Jane Smith',
      designation: 'CTO',
      companyName: 'Innovate Inc.',
      image: '/assets/images/cities/cologne.jpeg',
      url: '/testimonials/jane-smith'
    },
    {
      name: 'Emily Johnson',
      designation: 'Product Manager',
      companyName: 'Creative Solutions',
      image: '/assets/images/cities/hamburg.jpeg',
      url: '/testimonials/emily-johnson'
    },
    {
      name: 'Jane Smith',
      designation: 'CTO',
      companyName: 'Innovate Inc.',
      image: '/assets/images/cities/berlin.jpeg',
      url: '/testimonials/jane-smith'
    },
    {
      name: 'Emily Johnson',
      designation: 'Product Manager',
      companyName: 'Creative Solutions',
      image: '/assets/images/cities/hamburg.jpeg',
      url: '/testimonials/emily-johnson'
    },
    {
      name: 'Jane Smith',
      designation: 'CTO',
      companyName: 'Innovate Inc.',
      image: '/assets/images/cities/berlin.jpeg',
      url: '/testimonials/jane-smith'
    },
    {
      name: 'Emily Johnson',
      designation: 'Product Manager',
      companyName: 'Creative Solutions',
      image: '/assets/images/cities/berlin.jpeg',
      url: '/testimonials/emily-johnson'
    },
    {
      name: 'Michael Brown',
      designation: 'VP of Sales',
      companyName: 'Global Ventures',
      image: '/assets/images/cities/berlin.jpeg',
      url: '/testimonials/michael-brown'
    }
  ];

}
