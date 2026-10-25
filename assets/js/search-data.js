// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-i-class-fa-fa-home-i",
    title: "<i class="fa fa-home"></i>",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/publications/";
          },
        },{id: "nav-projects",
          title: "projects",
          description: "Research software, data resources and machine learning pipelines I have developed.",
          section: "Navigation",
          handler: () => {
            window.location.href = "/projects/";
          },
        },{id: "nav-repositories",
          title: "repositories",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/repositories/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/cv/";
          },
        },{id: "projects-primerevalpy",
          title: 'PrimerEvalPy',
          description: "Python package for in-silico evaluation of primers against any sequence database. Published in BMC Bioinformatics.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/1_primerevalpy/";
            },},{id: "projects-epheclass",
          title: 'EPheClass',
          description: "Machine learning pipeline that classifies disease phenotypes from 16S rRNA microbiome data using dynamic ensembles.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/2_epheclass/";
            },},{id: "projects-16sgoseq",
          title: '16SGOSeq',
          description: "Curated database of 16S rRNA genes and intragenomic variants from the complete genomes of oral bacteria and archaea. Published in Scientific Data.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/3_16sgoseq/";
            },},{id: "projects-oral-16s-amplicon-similarity",
          title: 'Oral 16S amplicon similarity',
          description: "In-silico analysis of which oral species become indistinguishable depending on the 16S rRNA primer pair used.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/4_oral16sampliconsimilarity/";
            },},{id: "projects-aira16s",
          title: 'AIRA16S',
          description: "Automated inventory of human 16S rRNA sequencing projects in public databases, integrated into a health data space.",
          section: "Projects",handler: () => {
              window.location.href = "/projects/5_aira16s/";
            },},{
        id: 'social-orcid',
        title: 'ORCID',
        section: 'Socials',
        handler: () => {
          window.open("https://orcid.org/0000-0002-0122-5266", "_blank");
        },
      },{
        id: 'social-scholar',
        title: 'Google Scholar',
        section: 'Socials',
        handler: () => {
          window.open("https://scholar.google.com/citations?user=F9JtFRwAAAAJ", "_blank");
        },
      },{
        id: 'social-github',
        title: 'GitHub',
        section: 'Socials',
        handler: () => {
          window.open("https://github.com/laravg", "_blank");
        },
      },{
        id: 'social-linkedin',
        title: 'LinkedIn',
        section: 'Socials',
        handler: () => {
          window.open("https://www.linkedin.com/in/laramariavazquezgonzalez", "_blank");
        },
      },{
        id: 'social-email',
        title: 'email',
        section: 'Socials',
        handler: () => {
          window.open("mailto:%76%61%7A%71%75%65%7A%67%6F%6E%7A%61%6C%65%7A%6C%61%72%61@%67%6D%61%69%6C.%63%6F%6D", "_blank");
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
