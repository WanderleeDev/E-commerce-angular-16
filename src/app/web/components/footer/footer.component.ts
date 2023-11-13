import { Component } from '@angular/core';

interface Resource {
  site: string;
  href: string;
}

interface InterfaceEjemplo {
  subTitle: string;
  links: Resource[];
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  color = '#DC0330';
  dataFooter: InterfaceEjemplo[] = [
    {
      subTitle: 'Resources',
      links: [
        {
          site: 'flowbite',
          href: 'https://flowbite.com/'
        },
        {
          site: 'tailwind CSS',
          href: 'https://tailwindcss.com/'
        }
      ]
    },
    {
      subTitle: 'follow us',
      links: [
        {
          site: 'github',
          href: 'https://github.com/WanderleeDev'
        },
        {
          site: 'linkedin',
          href: 'https://www.linkedin.com/in/wanderlee-max/'
        }
      ]
    },
    {
      subTitle: 'legal',
      links: [
        {
          site: 'privacy policy',
          href: '#'
        },
        {
          site: 'terms & conditions',
          href: '#'
        }
      ]
    }
  ];

}
