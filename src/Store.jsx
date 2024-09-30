import { create } from 'zustand'


const useStore = create((set) => ({
  borderRadius: 16,
  themeScheme: 3,
  showComponents: false,
  showBldrs:true,
  showComments: false,
  expandAll:false,
  circles:[],
  res:[],
  rightDrawer:true,
  leftDrawer: false,
  isNotesOpen: true,
  isPropertiesOpen: true,
  isNavigationOpen: true,
  isTimelineOpen: true,
  showViewer: true,
  colorTheme:0,
  res:[],
  project:0,
  portfolio: {
    name:'Swiss Property',
    colorTheme:0,
    map:'mapbox://styles/aechack2024/cltfvi20g00r401qn6l1shoag',
    initialViewState: {
      latitude: 47.135357,
      longitude:8.589536,
      zoom: 6
    }},
  portfolioNumber: 0,
  portfolios:[
    {
      name:'Swiss Property',
      colorTheme:0,
      map:'mapbox://styles/aechack2024/cltfvi20g00r401qn6l1shoag',
      coordinates: {
        lat:  46.6333,
        lng:  8.589536,
        zoom: 6
      },
      projects:[
        {
          name: "The Nest",
          lat:  47.135357,
          lng:  8.589536,
          zoom: 10,
          modelUrl:'https://deploy-preview-1010--bldrs-share.netlify.app/share/v/gh/Swiss-Property-AG/Unteraegeri-Public/main/Unteraegeri.ifc',
          projectInfo:[
            {
                "name": 'Project Description',
                "description": "The Nest unveils 34 exquisite residences and 6 luxurious villas, each offering breathtaking views of Lake Ägeri and the surrounding mountains. Top-floor units boast spacious terraces, while garden floors invite residents to generous gardens and patios. Unique winter gardens and versatile four-season rooms epitomize indoor luxury with an outdoor touch. All this, set in one of Zug’s most coveted communities, ensures residents enjoy the serene beauty of nature while staying connected to urban conveniences.",
                "image":'https://www.swiss-property.ch/wp-content/uploads/resized/2023/09/swiss-property-unteraegeri-the-nest-aussen-main-1320x0-c-default.jpg'
            },
            {
              "name": 'Community and Surroundings',
              "description": `Unterägeri, with its 8500 inhabitants, is one of the most attractive communities in the canton of Zug. You benefit from low taxation, local recreation areas right on your doorstep and a varied range of cultural and sporting activities.
              Unwind in the midst of diverse nature away from the daily hustle and bustle, yet have the city centers of Zug, Lucerne and Zurich at short reach. Unterägeri offers schools (kindergarten to high school), many shopping possibilities and a wide range of gas- tronomy. Public transportation is within walking distance and the village center is only a 5 minute walk away. In nearby Zug there are further secondary schools as well as an international school in Baar.
              Also benefit from an attractive tax rate in Unterägeri, as the sixth most favorable municipality in the entire canton.`
          },
          ]
        },
        {
          name: "Turmfalke Suites",
          lat: 46.6333,
          lng: 8.6000,
          modelUrl:'https://deploy-preview-1010--bldrs-share.netlify.app/share/v/gh/Swiss-Property-AG/Eisvogel-Public/main/EISVOGEL.ifc',
          projectInfo:[
            {
                "name": 'Project Description',
                "description": "Modern, elegant and sustainable: the TurmfalkeSuites in Andermatt. The wooden construction combines the latest technology, unique comfort with timeless style. Developed to a new standard: equipped with an indoor swimming pool, its own SPA, integrated fitness studio and an indoor golf simulator, the Kestrel Suites offer living and living on an excellent level. The town of Andermatt lies at 1,444 meters in the middle of the Swiss Alps and offers its residents a unique backdrop and countless leisure opportunities - in summer and winter. A place and a project to fall in love with.",
                "image":'https://www.swiss-property.ch/wp-content/uploads/resized/2021/12/Project_TurmfalkeSuites-Andermatt_29-1035x0-c-default.jpg'
            },
            {
              "name": 'Community and Surroundings',
              "description": `Andermatt is a village in the Ursern Valley in the Swiss Alps. A cable car offers access to Gemsstock ski area and a chairlift links the village with Nätschen's gentler slopes. To Andermatt’s north, the path leading to Devil’s Bridge, which spans the sheer gorge of Schöllenenschlucht, is one of many trails. The village’s narrow streets are lined with traditional chalets, one housing the folk museum, Talmuseum Ursern.`
          },
          ]
        },
        {
          name: "Eisvogel",
          lat: 46.64,
          lng: 8.6000,
          modelUrl:'https://deploy-preview-1010--bldrs-share.netlify.app/share/v/gh/Swiss-Property-AG/Schneestock-Public/main/ZGRAGGEN.ifc',
          projectInfo:[
            {
                "name": 'Project Description',
                "description": `Eisvogel apartment house combines tradition with modern design. The floor plans and equipment of the smart studios are designed so that every square meter is used sensibly. In addition to the apartments, the house offers spacious common areas that are available to all residents: a 189 m2 community area with kitchen, private dining and “chill-out” zone, a spacious spa with fitness on over 100 m2 and an in -House Bar.
                The studios are between 34 and 91 square meters in size and are modern and functionally furnished. The additional communal areas create a unique opportunity to live. The uniqueness of the house is further underlined by the fact that the Swiss graffiti artist Ata Bozaci helped shape the common areas with his design. This means that the apartment house combines modern and contemporary design with the original nature of the Ursern Valley.`
                ,
                "image":'https://www.andermatt-swissalps.ch/images/yuxsgmojbn4b/5o9YNnCCviHMpynLK8oVtC/d3ade5365c3237c401662ec528b281df/Eisvogel_common_room_lowres.jpg?w=2550&h=1530&fit=fill&q=50&fm=webp'
            },
            {
              "name": 'Community and Surroundings',
              "description": `Andermatt is a village in the Ursern Valley in the Swiss Alps. A cable car offers access to Gemsstock ski area and a chairlift links the village with Nätschen's gentler slopes. To Andermatt’s north, the path leading to Devil’s Bridge, which spans the sheer gorge of Schöllenenschlucht, is one of many trails. The village’s narrow streets are lined with traditional chalets, one housing the folk museum, Talmuseum Ursern.`
          },
          ]
        }
      ]
    },
    {
      name:'Prop Tech Denmark Challenge',
      colorTheme:1,
      map:'mapbox://styles/aechack2024/cltaoevq300uu01pje4rwdi24',
      coordinates: {
        lat: 55.6811,
        lng: 12.5981,
        zoom: 7
      },
      projects:[
        {
          name: "BloxHub Sample project",
          lat: 55.672278,
          lng: 12.5785,
          projectInfo:[
            {
                "name": "http://example.com/buildings/BB/ESP1",
                "label": "Replacement of light bulbs on the back stairss and in the basement",
                "investment": "1000",
                "calculatedAnnualSavings": "2800",
                "simpleRepaymentPeriod": "0.4"
            },
          ]

        },
      ]
    ,
    }
  ],
  setNotes: (value) => set(() => ({ notes: value})),
  setColorTheme: (value) => set(() => ({ colorTheme: value})),
  setCircles: (value) => set(() => ({ circles: value})),
  setBorderRadius: (value) => set(() => ({ borderRadius: value})),
  setThemeScheme: (value) => set(() => ({ themeScheme: value})),
  toggleShowComponents: () => set((state) => ({ showComponents: !state.showComponents})),
  toggleShowComments: () => set((state) => ({ showComments: !state.showComments})),
  toggleRightDrawer: () => set((state) => ({ rightDrawer: !state.rightDrawer})),
  toggleLeftDrawer: () => set((state) => ({ leftDrawer: !state.leftDrawer})),
  setRes: (value) => set(() => ({ res: value })), // Function to update 'res'
  setProject: (value) => set(() => ({ project: value })), // Function to update 'res'
  setPortfolio: (value) => set(() => ({ portfolio: value })), // Function to update 'res'
  setPortfolioNumber: (value) => set(() => ({ portfolioNumber : value })), // Function to update 'res'
  toggleShowViewer: () => set((state) => ({ showViewer: !state.showViewer })),
  toggleShowBldrs: () => set((state) => ({ showBldrs: !state.showBldrs })),
  toggleExpandAll: () => set((state) => ({ expandAll: !state.expandAll })),
}));

export default useStore;
