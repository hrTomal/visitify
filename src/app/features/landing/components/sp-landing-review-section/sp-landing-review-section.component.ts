import { Component } from '@angular/core';
import { CarouselModule } from 'primeng/carousel';

@Component({
  selector: 'app-sp-landing-review-section',
  standalone: true,
  imports: [
    CarouselModule
  ],
  templateUrl: './sp-landing-review-section.component.html',
  styleUrl: './sp-landing-review-section.component.css'
})
export class SpLandingReviewSectionComponent {
  responsiveOptions: any[] | undefined;
  ngOnInit(){
    this.responsiveOptions = [
      {
          breakpoint: '1199px',
          numVisible: 4,
          numScroll: 4
      },
      {
          breakpoint: '991px',
          numVisible: 2,
          numScroll: 2
      },
      {
          breakpoint: '767px',
          numVisible: 1,
          numScroll: 1
      }
    ];
    console.log(this.responsiveOptions,'responsiveOptions');
  }

  reviews = [
    {
      name: 'John Doe',
      designation: 'CEO',
      companyName: 'TechCorp',
      image: '/assets/images/get_in_touch.jpeg',
      url: '/testimonials/john-doe'
    },
    {
      name: 'Jane Smith',
      designation: 'CTO',
      companyName: 'Innovate Inc.',
      image: '/assets/images/get_in_touch.jpeg',
      url: '/testimonials/jane-smith'
    },
    {
      name: 'Emily Johnson',
      designation: 'Product Manager',
      companyName: 'Creative Solutions',
      image: '/assets/images/get_in_touch.jpeg',
      url: '/testimonials/emily-johnson'
    },
    {
      name: 'Jane Smith',
      designation: 'CTO',
      companyName: 'Innovate Inc.',
      image: '/assets/images/get_in_touch.jpeg',
      url: '/testimonials/jane-smith'
    },
    {
      name: 'Emily Johnson',
      designation: 'Product Manager',
      companyName: 'Creative Solutions',
      image: '/assets/images/get_in_touch.jpeg',
      url: '/testimonials/emily-johnson'
    },
    {
      name: 'Jane Smith',
      designation: 'CTO',
      companyName: 'Innovate Inc.',
      image: '/assets/images/get_in_touch.jpeg',
      url: '/testimonials/jane-smith'
    },
    {
      name: 'Emily Johnson',
      designation: 'Product Manager',
      companyName: 'Creative Solutions',
      image: '/assets/images/get_in_touch.jpeg',
      url: '/testimonials/emily-johnson'
    },
    {
      name: 'Michael Brown',
      designation: 'VP of Sales',
      companyName: 'Global Ventures',
      image: '/assets/images/get_in_touch.jpeg',
      url: '/testimonials/michael-brown'
    }
  ];
}
