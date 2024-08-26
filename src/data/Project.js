export const ProjectsObj = [
  {
    title: 'World Trade Center',
    tag: 'BIM Manager',
    image: `${process.env.PUBLIC_URL}/images/7.png`,
    description: 'Managed a comprehensive 4D digital twin of the World Trade Center mega program, used for schedule analysis and time-based conflict resolution.',
    expandedDescription: `Project story is coming soon.`,
  },
  {
    title: 'New York Grand Central',
    tag: 'VDC Team Lead',
    image: `${process.env.PUBLIC_URL}/images/5.png`,
    description: 'Led the team and developed a digital strategy for the East Side Access mega project, creating an ecosystem that included BIM, 4D modeling, and bespoke web apps for data collection.',
    expandedDescription: `
    I was invited to join the East Side Access project because of my involvement in
    the World Trade Center project. At the time, East Side Access was the second-largest
    project in New York and the biggest construction development that the MTA had undertaken
    in the last 50 years. The scope of the work totaled about $18 billion and encompassed work
    spanning more than 10 major contracts, involving underground excavation and construction,
    along with the major reconfiguration of the biggest interlocking in the northeastern United States.
    The goal of the project was to expand the current Grand Central Terminal by introducing an underground
    station capable of receiving eight trains. This three-level structure spanned nine city blocks
    and was situated 150 feet below ground, under one of the most densely populated urban environments
    in the world.
    The operation was highly complex, with the full scope of the project described in
    approximately 100,000 two-dimensional drawings and a mountain of other documents
    that documented various aspects of the operation. Given our experience on the
    World Trade Center project, we were tasked with developing the digital strategy
    for the program. We decided that it would be best to co-locate and establish a
    presence in the main program office at 453 7th Avenue, where the program's senior
    management was making high-level decisions.
    It was clear that the first order of business was to create Building Information Models
    (BIM) of all the program components. We interviewed the project team and identified the
     critical portions that needed to be visualized to aid in construction and coordination.
     At the time, the excavation of the major contracts had been completed, and the program was
     preparing for the bidding process of the major contracts. We started with the southern portions
     of the program and created models of the underground facilities.
    Since the program comprised tunnels, facilities, and alignment portions, and due to the
    widespread adoption of the Revit platform, it was decided to use Revit for modeling and
    Synchro for 4D planning. Eventually, we modeled the entire project piece by piece, assisting
    the project team with the issues at hand, and created one of the largest BIM models in the world.
     The master model was composed of about 50 components, 4 miles of tunnels, a vast terrain of all the
      interlocking tracks, a concourse of the station, and two caverns housing four platforms
      each...To be continued.
    `,
  },
  {
    title: 'Zuhai Business Center',
    tag: 'Computational Designer',
    image: `${process.env.PUBLIC_URL}/images/8.png`,
    description: 'Assisted the architectural team with the computational design of the Zhuhai Shizimen Business Center by developing a parametric model of the project using automation within the Digital Project CAD system.',
    expandedDescription: `Project story is coming soon.`,
  },
  {
    title: 'W hotel',
    tag: 'BIM Specialist',
    image: `${process.env.PUBLIC_URL}/images/9.png`,
    description: 'Created a digital twin of the W Hotel, focusing on architectural and structural components using the Digital Project CAD system.',
    expandedDescription: `Project story is coming soon.`,
  },
  {
    title: 'City Point',
    tag: 'BIM Lead',
    image: `${process.env.PUBLIC_URL}/images/6.png`,
    description: 'Developed BIM models, and established processes for coordination and issue resolution during design and construction phases of the project.',
    expandedDescription: `Project story is coming soon.`,
  },
  {
    title: 'Book - Implementing VDC',
    tag: 'Co-Author',
    image: `${process.env.PUBLIC_URL}/images/4.png`,
    description: 'Co-authored a book outlining the team structure, software, and production ecosystem necessary for effective Virtual Design and Construction (VDC) using BIM.',
    expandedDescription: `Project story is coming soon.`,
  },
  {
    title: 'Human Condition Safety',
    tag: 'Product manager',
    image: `${process.env.PUBLIC_URL}/images/3.png`,
    description: 'Managed product development for the HCS ecosystem, which included a smart vest and a suite of analytics products.',
    expandedDescription: `Project story is coming soon.`,
  },
  {
    title: 'Outer Labs for Google',
    tag: 'Engineer',
    image: `${process.env.PUBLIC_URL}/images/2.png`,
    description: 'Front-End development and maintenance of the web applications Panorama, Blueprint, and Portfolio. Participated in the development of React Library of UI components.',
    expandedDescription: `
    I joined Outer Labs in 2022,
    right at the beginning of COVID.
    The company was working on a suite of apps for
    Google to assist the internal design, construction, and management
     teams in overseeing Google's global real estate portfolio. I started
     working on a project called Panorama, which was an application focusing on the environmental
     performance of spaces by analyzing panels comprising building facades against environmental
     and structural performance criteria. In this application, the designer was equipped with a tool
     that could be used to configure the panel shading system, select a specific type of glass, and
     receive a score that would determine the feasibility of this specific configuration from an ESG
     (Environmental, Social, and Governance) standpoint. We used React for the front end, with the React
     Three Fiber package to visualize the panel. The system's backend was developed using Go, with GraphQL
     as the layer of data access. The information driving the decisions came from detailed design
     sheets provided by structural and environmental facade consultants. In addition to focusing on the
      UI components, I worked with consultants to distill all of the formulas used in the calculations.
    I was a flexible resource within the organization and was able to adapt to different projects. The next
     project I worked on was Blueprint, which was a catalog of building parts organized by type, where all of
     the design systems were represented. Designers could access information about all of the standard parts
     used in construction and download BIM (Building Information Modeling) components to use in their designs.
     I joined a long-term contributor to the project to assist with the UI redesign of the system.
    The next project I worked on was Portfolio, an application used by interior designers to study different
    office layout schemes as Google was preparing to reconfigure its offices to fit the hybrid work schedule
    of its workforce. Users could upload existing floor plans and quickly assemble a scheme using a library of
    predefined pods. They could also configure the pods in the configurator to quickly assess the feasibility
    of the proposed design. The scheme would be evaluated against several criteria, with the final score
    determining the quality of the proposed design...To be Continued.
    `,
  },
  {
    title: 'Bldrs.ai',
    tag: 'Co-Founder',
    image: `${process.env.PUBLIC_URL}/images/1.png`,
    description: `Co-founded a startup bringing tech tools into the AEC industry.
    We developed an engine to open IFC and STEP files, and a front-end application
    Share that provide integration with GitHub.`,
    expandedDescription: `We started a company with the goal of introducing IT tooling
    into AEC and made a strong bet on GitHub as the center of our product. GitHub, being
    one of the most sophisticated platforms in the world with over 100 million developers,
    seemed like an excellent option to host files, and its issue management system could provide
    AEC teams with a robust tool for managing issues. Another critical decision that set the direction
    for our company was our commitment to open source and open standards. We adopted IFC as the central
    file format for our product, as it is the most mature open standard available in the industry.
    We also contemplated using Matrix for the communication portion of the app and envisioned integrating
    it into the product.
      My co-founder, who is also the CEO of the company, has a very technical background, having spent 12
      years at Google working on different teams. He has a broad set of interests and deep technical expertise,
       which significantly influenced the direction of the company. The company became a vessel for ambitious
       technological exploration with the aim of integrating the latest technologies. To accomplish this task,
        we hired a team of experienced programmers.${<br/>}
      Initially, we used the IFC.js engine as the core of the ecosystem but quickly realized that it did not
      offer the processing capabilities and flexibility we needed. Our lead programmer was tasked with rewriting
       part of the engine. We forked the original Web IFC engine and rewrote parts of it to increase flexibility
       and performance. We also used code generation processes made available by Hyper, creating TypeScript
       bindings for all the types available in IFC. This made the engine the most complete and, as far as we
       believe, one of the best-performing engines, benchmarked against XeoKit and another open company we
       were in direct competition with.
      Our main partner and investor is a fully integrated company in Switzerland, and therefore the
      German-speaking world and Europe at large became our predominant market. Through user interviews,
      we established that ergonomic sharing of BIM assets was still missing in the market at the time of
      inception. We decided to build a lightweight web application called Share as the user-facing gateway
      to the ecosystem. The design of Share included the ability to open models hosted on GitHub as well as
      the ability to save versions of the projects as new commits on GitHub. Naturally, since GitHub keeps
      track of commits, any changes to the original file would be saved. One of the features of the engine
      was a fast query system that would enable users to edit IFC properties and add property sets, committing
      all of the changes to GitHub.
      From the beginning, we were aware that the AEC market is notoriously difficult to penetrate, which was
      another reason to build the engine and control the evolution of that part of the system. This approach
      allowed us to open STEP files as both file formats use the EXPRESS schema, and therefore the engine was
      wextended to open STEP files in a limited capacity.
      As often happens with complex work, the schedule slipped,
      and the engine work occupied the most resources. GitHub integration also
      proved difficult, as the customers we interviewed were all interested in privately
       hosting the content and hosting large models, which was challenging due to GitHub's
       authentication system.
      Another piece of the puzzle was the advancement in AI, which we introduced in the first year
      of the company with the text-to-image capabilities of MidJourney. We were naturally intrigued by
      these advancements, and given the technical abilities of the team, we set out to explore that direction
       opportunistically. Our idea was to develop a Discord bot that would use Share and headless Three.js
       to generate AI-based renderings using a link from Share. This prototype grew in scope as the work
       progressed, requiring additional infrastructure, which was later reused to introduce the feature into Share.
      We’re a team of 4 or 5 people with large ambitions and a very complicated architecture for the system.
      The system is slowly coming together, with the open-source release of the engine scheduled for September,
       the bot functioning in Discord and in builders at the prototype level, and GitHub integration starting to
       function. The world does not stand still, and since our original set of ideas...To be continued.`,
  },
];
