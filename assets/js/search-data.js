// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-call-for-papers",
          title: "Call for Papers",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cfp/";
          },
        },{id: "nav-schedule",
          title: "Schedule",
          description: "The session will cover invited talks, contributed talks and posters. The tentative schedule in Pacific Time (GMT-7) can be found below.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/schedule/";
          },
        },{id: "post-google-gemini-updates-flash-1-5-gemma-2-and-project-astra",
        
          title: 'Google Gemini updates: Flash 1.5, Gemma 2 and Project Astra <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "We’re sharing updates across our Gemini family of models and a glimpse of Project Astra, our vision for the future of AI assistants.",
        section: "Posts",
        handler: () => {
          
            window.open("https://blog.google/technology/ai/google-gemini-update-flash-ai-assistant-io-2024/", "_blank");
          
        },
      },{id: "post-displaying-external-posts-on-your-al-folio-blog",
        
          title: 'Displaying External Posts on Your al-folio Blog <svg width="1.2rem" height="1.2rem" top=".5rem" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg"><path d="M17 13.5v6H5v-12h6m3-3h6v6m0-6-9 9" class="icon_svg-stroke" stroke="#999" stroke-width="1.5" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>',
        
        description: "",
        section: "Posts",
        handler: () => {
          
            window.open("https://medium.com/@al-folio/displaying-external-posts-on-your-al-folio-blog-b60a1d241a0a?source=rss-17feae71c3c4------2", "_blank");
          
        },
      },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather/";
            },},{id: "news-a-simple-inline-announcement",
          title: 'A simple inline announcement.',
          description: "",
          section: "News",},{id: "news-a-long-announcement-with-details",
          title: 'A long announcement with details',
          description: "",
          section: "News",handler: () => {
              window.location.href = "/news/announcement_2/";
            },},{id: "news-a-simple-inline-announcement-with-markdown-emoji-sparkles-smile",
          title: 'A simple inline announcement with Markdown emoji! :sparkles: :smile:',
          description: "",
          section: "News",},{id: "organizers-amy-x-lu",
          title: 'Amy_x_lu',
          description: "",
          section: "Organizers",handler: () => {
              window.location.href = "/organizers/amy_x_lu/";
            },},{id: "organizers-andreas-krause",
          title: 'Andreas_krause',
          description: "",
          section: "Organizers",handler: () => {
              window.location.href = "/organizers/andreas_krause/";
            },},{id: "organizers-andrew-wagenmaker",
          title: 'Andrew_wagenmaker',
          description: "",
          section: "Organizers",handler: () => {
              window.location.href = "/organizers/andrew_wagenmaker/";
            },},{id: "organizers-bhavya-sukhija",
          title: 'Bhavya_sukhija',
          description: "",
          section: "Organizers",handler: () => {
              window.location.href = "/organizers/bhavya_sukhija/";
            },},{id: "organizers-carmelo-sferrazza",
          title: 'Carmelo_sferrazza',
          description: "",
          section: "Organizers",handler: () => {
              window.location.href = "/organizers/carmelo_sferrazza/";
            },},{id: "organizers-kevin-jamieson",
          title: 'Kevin_jamieson',
          description: "",
          section: "Organizers",handler: () => {
              window.location.href = "/organizers/kevin_jamieson/";
            },},{id: "organizers-lenart-treven",
          title: 'Lenart_treven',
          description: "",
          section: "Organizers",handler: () => {
              window.location.href = "/organizers/lenart_treven/";
            },},{id: "organizers-olivier-bachem",
          title: 'Olivier_bachem',
          description: "",
          section: "Organizers",handler: () => {
              window.location.href = "/organizers/olivier_bachem/";
            },},{id: "organizers-parnian-kassraie",
          title: 'Parnian_kassraie',
          description: "",
          section: "Organizers",handler: () => {
              window.location.href = "/organizers/parnian_kassraie/";
            },},{id: "organizers-pieter-abbeel",
          title: 'Pieter_abbeel',
          description: "",
          section: "Organizers",handler: () => {
              window.location.href = "/organizers/pieter_abbeel%20/";
            },},{id: "projects-project-1",
          title: 'project 1',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_project/";
            },},{id: "projects-project-2",
          title: 'project 2',
          description: "a project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_project/";
            },},{id: "projects-project-3-with-very-long-name",
          title: 'project 3 with very long name',
          description: "a project that redirects to another website",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_project/";
            },},{id: "projects-project-4",
          title: 'project 4',
          description: "another without an image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_project/";
            },},{id: "projects-project-5",
          title: 'project 5',
          description: "a project with a background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_project/";
            },},{id: "projects-project-6",
          title: 'project 6',
          description: "a project with no image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/6_project/";
            },},{id: "projects-project-7",
          title: 'project 7',
          description: "with background image",
          section: "Projects",handler: () => {
              window.location.href = "/projects/7_project/";
            },},{id: "projects-project-8",
          title: 'project 8',
          description: "an other project with a background image and giscus comments",
          section: "Projects",handler: () => {
              window.location.href = "/projects/8_project/";
            },},{id: "projects-project-9",
          title: 'project 9',
          description: "another project with an image 🎉",
          section: "Projects",handler: () => {
              window.location.href = "/projects/9_project/";
            },},{id: "speakers-alison-gopnik",
          title: 'Alison_gopnik',
          description: "",
          section: "Speakers",handler: () => {
              window.location.href = "/speakers/alison_gopnik/";
            },},{id: "speakers-benjamin-van-roy",
          title: 'Benjamin_van_roy',
          description: "",
          section: "Speakers",handler: () => {
              window.location.href = "/speakers/benjamin_van_roy/";
            },},{id: "speakers-dorsa-sadigh",
          title: 'Dorsa_sadigh',
          description: "",
          section: "Speakers",handler: () => {
              window.location.href = "/speakers/dorsa_sadigh/";
            },},{id: "speakers-dylan-foster",
          title: 'Dylan_foster',
          description: "",
          section: "Speakers",handler: () => {
              window.location.href = "/speakers/dylan_foster/";
            },},{id: "speakers-ji-won-park",
          title: 'Ji_won_park',
          description: "",
          section: "Speakers",handler: () => {
              window.location.href = "/speakers/ji_won_park/";
            },},{id: "speakers-masatoshi-uehara",
          title: 'Masatoshi_uehara',
          description: "",
          section: "Speakers",handler: () => {
              window.location.href = "/speakers/masatoshi_uehara/";
            },},{id: "speakers-rishabh-agarwal",
          title: 'Rishabh_agarwal',
          description: "",
          section: "Speakers",handler: () => {
              window.location.href = "/speakers/rishabh_agarwal/";
            },},{id: "speakers-sergey-levine",
          title: 'Sergey_levine',
          description: "",
          section: "Speakers",handler: () => {
              window.location.href = "/speakers/sergey_levine/";
            },},{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%79%6F%75@%65%78%61%6D%70%6C%65.%63%6F%6D", "_blank");
        },
      },{
        id: 'social-inspire',
        title: 'Inspire HEP',
        section: 'Socials',
        handler: () => {
          window.open("https://inspirehep.net/authors/1010907", "_blank");
        },
      },{
        id: 'social-rss',
        title: 'RSS Feed',
        section: 'Socials',
        handler: () => {
          window.open("/feed.xml", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=qc6CJjYAAAAJ", "_blank");
        },
      },{
        id: 'social-x',
        title: 'X',
        section: 'Socials',
        handler: () => {
          window.open("https://twitter.com/", "_blank");
        },
      },{
        id: 'social-custom_social',
        title: 'Custom_social',
        section: 'Socials',
        handler: () => {
          window.open("https://www.alberteinstein.com/", "_blank");
        },
      },{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
