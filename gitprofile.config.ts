// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'OshadhaLakshan', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/gitprofile/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: true, // Forked projects will not be displayed if set to true.
          projects: [''], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: '',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: '',
          description: '',
          imageUrl: '',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Portfolio of Oshadha',
    description: '',
    imageURL: '',
  },
  social: {
    linkedin: 'oshadha-lakshan',
    twitter: 'OLakshan57618',
    mastodon: '',
    researchGate: '',
    facebook: 'oshadha.lakshan.7',
    instagram: 'lakshan.oshadha',
    reddit: 'Brave_Custard_904',
    threads: '',
    youtube: 'OshadhaL', // example: 'pewdiepie'
    udemy: '',
    dribbble: '',
    behance: '',
    medium: 'oshadhalakshanwijesinghe',
    dev: '',
    stackoverflow: '', // example: '1/jeff-atwood'
    skype: '',
    telegram: 'oshadhalakshan',
    website: '',
    phone: '+94-76-9022600',
    email: 'oshadhaen@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/1wqbdejusj6ksougLSs1YPT0qIf5dQX8Z/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Django',
    'Flask',
    'JavaScript',
    'React.js',
    'Node.js',
    'Nest.js',
    'MySQL',
    'SQLite',
    'PostgreSQL',
    'MongoDB',
    'Git',
    'PHPUnit',
    'CSS',
    'Python',
    'Unity',
    'C++',
    'C#',
  ],
  experiences: [
    {
      company: '',
      position: '',
      from: '',
      to: '',
      companyLink: '',
    },
  ],
  certifications: [
    {
      name: 'CS50x by Harvard',
      body: 'Introduction to Computer Science',
      year: 'July 2024',
      link: 'https://cs50.harvard.edu',
    },
  ],
  educations: [
    {
      institution: 'Maliyadeva College',
      degree: 'G.C.E. Advanced Level',
      from: '2021',
      to: '2023',
    },
    {
      institution: 'Maliyadeva College',
      degree: 'G.C.E. Ordinary Level',
      from: '2018',
      to: '2020',
    },
  ],
  publications: [
    {
      title: '',
      conferenceName: '',
      journalName: '',
      authors: '',
      link: '',
      description: '',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    source: '', // medium | dev
    username: '', // to hide blog section, keep it empty
    limit: 10, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'lofi',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: true,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  footer: `Visit my <a 
      class="text-primary" href="https://github.com/OshadhaLakshan"
      target="_blank"
      rel="noreferrer"
    >GitHub</a> from Here`,

  enablePWA: true,
};

export default CONFIG;
