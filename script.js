
:root {

    /**
     * colors
     */
  
    --cadet-blue-crayola: hsl(240, 10%, 70%);
    --gold-web-golden: hsl(50, 100%, 54%);
    --vivid-sky-blue: hsl(196, 84%, 63%);
    --midnight-blue: hsl(231, 83%, 25%);
    --minion-yellow: hsl(50, 100%, 64%);
    --independence: hsl(225, 24%, 27%);
    --orange-soda: hsl(7, 96%, 61%);
    --space-cadet: hsl(243, 23%, 18%);
    --fiery-rose: hsl(353, 83%, 65%);
    --klein-blue: hsl(230, 80%, 39%);
    --bluetiful: hsl(222, 88%, 55%);
    --glaucous: hsl(230, 52%, 63%);
    --manatee: hsl(254, 7%, 65%);
    --rufous: hsl(2, 85%, 35%);
    --black: hsl(0, 0%, 0%);
    --white: hsl(0, 0%, 100%);
  
    /**
     * typography
     */
  
    --ff-open-sans: 'Open Sans', sans-serif;
    --ff-barlow: 'Barlow', sans-serif;
    --ff-poppins: 'Poppins', sans-serif;
  
    --fs-1: 3.5rem;
    --fs-2: 3rem;
    --fs-3: 2.4rem;
    --fs-4: 2rem;
    --fs-5: 1.8rem;
    --fs-6: 1.3rem;
  
    --fw-600: 600;
    --fw-700: 700;
  
    /**
     * border radius
     */
  
    --radius-5: 5px;
    --radius-10: 10px;
    --radius-15: 15px;
    --radius-20: 20px;
  
    /**
     * spacing
     */
  
    --section-padding: 60px;
  
    /**
     * shadow
     */
  
    --shadow: 0 -5px 10px var(--manatee);
  
    /**
     * transition
     */
  
    --transition-1: 0.05s ease;
    --transition-2: 0.25s ease;
    --cubic-out: cubic-bezier(0.33, 0.85, 0.56, 1.02);
  
  }
  
  
  
  
  
  /*-----------------------------------*\
    #RESET
  \*-----------------------------------*/
  
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  li { list-style: none; }
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  a,
  img,
  span,
  input,
  strong,
  button,
  textarea,
  ion-icon { display: block; }
  
  img { height: auto; }
  
  ion-icon {
    pointer-events: none;
    color: var(--white);
  }
  
  button,
  input,
  textarea {
    background: none;
    border: none;
    font: inherit;
  }
  
  button { cursor: pointer; }
  
  input,
  textarea { width: 100%; }
  
  address { font-style: normal; }
  
  html {
    font-size: 10px;
    font-family: var(--ff-open-sans);
    scroll-behavior: smooth;
  }
  
  body {
    background-color: var(--space-cadet);
    color: var(--cadet-blue-crayola);
    font-size: 1.6rem;
    line-height: 1.6;
    overflow-x: hidden;
  }
  
  :focus-visible { outline-offset: 4px; }
  
  ::-webkit-scrollbar { width: 15px; }
  
  ::-webkit-scrollbar-track { background-color: hsl(0, 0%, 95%); }
  
  ::-webkit-scrollbar-thumb { background-color: hsl(0, 0%, 80%); }
  
  ::-webkit-scrollbar-thumb:hover { background-color: hsl(0, 0%, 70%); }
  
  
  
  
  
  /*-----------------------------------*\
    #REUSED STYLE
  \*-----------------------------------*/
  
  .container { padding-inline: 20px; }
  
  .btn {
    color: var(--white);
    font-family: var(--ff-barlow);
    font-size: var(--fs-5);
    font-weight: var(--fw-600);
    max-width: max-content;
    padding: var(--padding, 10px 40px);
    border-radius: 50px;
    transition: var(--transition-2);
  }
  
  .btn-primary.blue { background-color: var(--klein-blue); }
  
  .btn-primary.blue:is(:hover, :focus) { background-color: var(--orange-soda); }
  
  .img-cover {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .section { padding-block: var(--section-padding); }
  
  .section-subtitle {
    color: var(--orange-soda);
    font-family: var(--ff-barlow);
    font-size: var(--fs-4);
    text-align: center;
  }
  
  .h2,
  .h3 {
    color: var(--white);
    font-family: var(--ff-barlow);
    font-weight: var(--fw-600);
    line-height: 1.3;
  }
  
  .h2 { font-size: var(--fs-2); }
  
  .h3 { font-size: var(--fs-3); }
  
  .section-title,
  .section-text { text-align: center; }
  
  
  
  
  
  /*-----------------------------------*\
    #HEADER
  \*-----------------------------------*/
  
  .header {
    position: fixed;
    padding-block: 15px;
    width: 100%;
    background-color: var(--space-cadet);
    height: 65px;
    box-shadow: var(--shadow);
    overflow: hidden;
    transition: 0.25s var(--cubic-out);
    z-index: 4;
  }
  
  .header.nav-active {
    height: 335px;
    transition-duration: 0.35s;
  }
  
  .header > .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  .logo {
    color: var(--white);
    font-family: var(--ff-poppins);
    font-size: 2.4rem;
  }
  
  .nav-toggle-btn { font-size: 3rem; }
  
  .nav-toggle-btn .close-icon,
  .nav-toggle-btn.active .menu-icon { display: none; }
  
  .nav-toggle-btn.active .close-icon,
  .nav-toggle-btn .menu-icon { display: block; }
  
  .navbar {
    position: absolute;
    top: 65px;
    left: 0;
    width: 100%;
    padding-inline: 20px;
    visibility: hidden;
    opacity: 0;
    transition: var(--transition-2);
  }
  
  .header.nav-active .navbar {
    visibility: visible;
    opacity: 1;
  }
  
  .navbar-link {
    color: var(--white);
    font-family: var(--ff-barlow);
    padding-block: 3px;
    transition: var(--transition-1);
  }
  
  .navbar-link:is(:hover, :focus) { color: var(--orange-soda); }
  
  .navbar .btn {
    background-color: var(--orange-soda);
    margin-block-start: 15px;
  }
  
  
  
  
  
  /*-----------------------------------*\
    #HERO
  \*-----------------------------------*/
  
  .elem,
  .rotate-img { display: none; }
  
  .hero {
    background-image: url("../images/hero-bg.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding-block: 100px var(--section-padding);
    min-height: 100vh;
    display: grid;
    place-items: center;
  }
  
  .hero-banner {
    width: 150px;
    height: 172px;
    background-color: var(--independence);
    border-radius: var(--radius-10);
    margin-inline: auto;
    margin-block-end: 30px;
  }
  
  .hero-banner img { border-radius: inherit; }
  
  .hero-content {
    text-align: center;
    color: var(--white);
  }
  
  .hero-title {
    font-family: var(--ff-barlow);
    font-size: var(--fs-5);
    font-weight: var(--fw-600);
    line-height: 1.3;
    margin-block-end: 14px;
  }
  
  .hero-title strong {
    font-size: var(--fs-1);
    font-weight: inherit;
    margin-block-end: 8px;
  }
  
  .hero-text { margin-block-end: 25px; }
  
  .btn-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 10px;
  }
  
  
  
  
  
  /*-----------------------------------*\
    #ABOUT
  \*-----------------------------------*/
  
  .abs-img,
  .abs-icon { display: none; }
  
  .about { padding-block-start: 120px; }
  
  .about-banner {
    background-color: var(--independence);
    border-radius: var(--radius-10);
    margin-block-end: 30px;
  }
  
  .about-banner > .img-cover { border-radius: inherit; }
  
  .about :is(.section-title, .section-subtitle, .section-text) { text-align: left; }
  
  .about :is(.section-title, .section-text) { margin-block-end: 30px; }
  
  
  
  
  
  /*-----------------------------------*\
    #PORTFOLIO
  \*-----------------------------------*/
  
  .portfolio .section-title { margin-block-end: 18px; }
  
  .portfolio .section-text { margin-block-end: 80px; }
  
  .portfolio-list {
    display: grid;
    gap: 60px;
  }
  
  .portfolio-card {
    background-color: var(--independence);
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    padding: 120px 20px;
    border-radius: var(--radius-20);
    font-family: var(--ff-barlow);
    color: var(--white);
    font-weight: var(--fw-600);
    transition: var(--transition-2);
  }
  
  .portfolio-list > li:nth-child(even) .card-content { margin-inline-start: auto; }
  
  .portfolio-card .card-subtitle {
    color: var(--orange-soda);
    margin-block-end: 5px;
  }
  
  .portfolio-card .card-title {
    max-width: 20ch;
    margin-block-end: 20px;
  }
  
  .portfolio-card .btn-link {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: var(--fs-6);
    text-transform: uppercase;
  }
  
  .portfolio-card .btn-link ion-icon {
    color: var(--orange-soda);
    font-size: 1.6rem;
  }
  
  
  
  
  
  /*-----------------------------------*\
    #SKILLS
  \*-----------------------------------*/
  
  .skills .section-title { margin-block-end: 20px; }
  
  .skills .section-text { margin-block-end: 70px; }
  
  .skills-list {
    display: grid;
    gap: 25px;
  }
  
  .skills-item .wrapper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-block-end: 10px;
  }
  
  .skills-title,
  .skills-data {
    color: var(--white);
    font-size: var(--fs-5);
    font-family: var(--ff-barlow);
    font-weight: var(--fw-600);
  }
  
  .skills-progress-box {
    background-color: var(--white);
    height: 8px;
    border-radius: var(--radius-10);
  }
  
  .skills-progress {
    background-color: var(--orange-soda);
    height: 100%;
    border-radius: inherit;
  }
  
  
  
  
  
  /*-----------------------------------*\
    #CONTACT
  \*-----------------------------------*/
  
  .contact-card {
    background-color: var(--midnight-blue);
    padding: 50px 25px;
    border-radius: var(--radius-20);
  }
  
  .contact-card .card-subtitle {
    color: var(--orange-soda);
    font-family: var(--ff-barlow);
    font-size: var(--fs-4);
    font-weight: var(--fw-600);
  }
  
  .contact .section-title {
    text-align: left;
    margin-block-end: 30px;
  }
  
  .contact-form { margin-block-end: 50px; }
  
  .contact-input {
    background-color: var(--white);
    color: var(--manatee);
    border-radius: var(--radius-5);
    padding: 15px 25px;
    font-size: var(--fs-5);
    margin-block-end: 15px;
  }
  
  .contact-input::placeholder { color: inherit; }
  
  textarea.contact-input {
    resize: vertical;
    min-height: 100px;
    height: 180px;
    max-height: 300px;
  }
  
  .btn-submit {
    background-color: var(--orange-soda);
    color: var(--white);
    font-family: var(--ff-barlow);
    font-size: var(--fs-5);
    width: 100%;
    padding: 10px;
    border-radius: var(--radius-5);
    transition: var(--transition-2);
  }
  
  .btn-submit:is(:hover, :focus) {
    background-color: var(--white);
    color: var(--black);
  }
  
  .contact-item {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  
  .contact-item:not(:last-child) { margin-block-end: 20px; }
  
  .contact-icon {
    background-color: var(--glaucous);
    font-size: 2.4rem;
    padding: 20px;
    border-radius: 50%;
  }
  
  .contact-item-title {
    color: var(--white);
    font-family: var(--ff-barlow);
    font-size: var(--fs-4);
    font-weight: var(--fw-600);
  }
  
  .contact-item-link { transition: var(--transition-1); }
  
  .contact-item-link:not(address):is(:hover, :focus) { color: var(--white); }
  
  
  
  
  
  /*-----------------------------------*\
    #BLOG
  \*-----------------------------------*/
  
  .blog { padding-block-end: 120px; }
  
  .blog .section-title { margin-block-end: 20px; }
  
  .blog .section-text { margin-block-end: 80px; }
  
  .blog-list {
    display: grid;
    gap: 40px;
  }
  
  .blog-card { font-family: var(--ff-barlow); }
  
  .blog-card .card-banner {
    background-color: var(--independence);
    border-radius: var(--radius-15);
    overflow: hidden;
    margin-block-end: 20px;
  }
  
  .blog-card .card-banner img { transition: var(--transition-2); }
  
  .blog-card .card-banner a:is(:hover, :focus) img { transform: scale(1.1); }
  
  .blog-card .card-banner:focus-within {
    outline: 2px solid var(--white);
    outline-offset: 4px;
  }
  
  .blog-card .card-tag {
    color: var(--orange-soda);
    margin-block-end: 5px;
  }
  
  .blog-card .card-title {
    color: var(--white);
    font-weight: var(--fw-600);
    line-height: 1.3;
  }
  
  .blog-card .card-title a { transition: var(--transition-2); }
  
  .blog-card .card-title a:is(:hover, :focus) { color: var(--orange-soda); }
  
  
  
  
  
  /*-----------------------------------*\
    #FOOTER
  \*-----------------------------------*/
  
  .footer {
    background-color: var(--independence);
    padding-block: 60px;
  }
  
  .copyright {
    max-width: max-content;
    margin-inline: auto;
    margin-block-end: 10px;
  }
  
  .copyright-link {
    display: inline-block;
    transition: var(--transition-2);
    font-weight: var(--fw-600);
  }
  
  .copyright-link:is(:hover, :focus) { color: var(--white); }
  
  .footer-list {
    max-width: max-content;
    margin-inline: auto;
  }
  
  .footer-list * { display: inline-block; }
  
  .footer-list > li:not(:last-child) { margin-inline-end: 40px; }
  
  .footer-link { transition: var(--transition-2); }
  
  .footer-link:is(:hover, :focus) { color: var(--white); }
  
  
  
  
  
  /*-----------------------------------*\
    #BACK TO TOP
  \*-----------------------------------*/
  
  .back-to-top {
    color: var(--white);
    font-size: 1.3rem;
    position: fixed;
    bottom: 160px;
    right: -30px;
    transform: rotate(0.25turn);
    opacity: 0;
    visibility: hidden;
    transition: var(--transition-2);
    z-index: 1;
  }
  
  .back-to-top.active {
    right: -5px;
    opacity: 1;
    visibility: visible;
  }
  
  .back-to-top::after {
    content: "";
    position: absolute;
    top: 10px;
    left: calc(100% + 7px);
    width: 100px;
    height: 1px;
    background-color: var(--white);
  }
  
  
  
  
  
  /*-----------------------------------*\
    #MEDIA QUERIES
  \*-----------------------------------*/
  
  /**
   * responsive for larger than 600px screen
   */
  
  @media (min-width: 600px) {
  
    /**
     * PORTFOLIO
     */
  
    .portfolio-list li:nth-child(even) .card-content { margin-inline-start: 50%; }
  
  }
  
  
  
  
  
  /**
   * responsive for larger than 768px screen
   */
  
  @media (min-width: 768px) {
  
    /**
     * PORTFOLIO
     */
  
    .portfolio-card {
      background-size: 115%;
      padding-inline: 80px;
    }
  
    .portfolio-card:is(:hover, :focus) { background-size: 130%; }
  
  
  
    /**
     * SKILLS, BLOG
     */
  
    .skills-list,
    .blog-list {
      grid-template-columns: 1fr 1fr;
      column-gap: 50px;
    }
  
  }
  
  
  
  
  
  /**
   * responsive for larger than 992px screen
   */
  
  @media (min-width: 992px) {
  
    /**
     * CUSTOM PROPERTY
     */
  
    :root {
  
      /**
       * typography
       */
  
      --fs-1: 6.4rem;
      --fs-2: 3.5rem;
      --fs-3: 3.6rem;
  
      /**
       * spacing
       */
  
      --section-padding: 80px;
  
    }
  
  
  
    /**
     * REUSED STYLE
     */
  
    .container {
      max-width: 1050px;
      margin-inline: auto;
    }
  
  
  
    /**
     * HEADER
     */
  
    .nav-toggle-btn { display: none; }
  
    .header,
    .header.nav-active {
      background-color: transparent;
      box-shadow: none;
      height: unset;
      padding-block: 30px;
    }
  
    .header.active {
      background-color: var(--space-cadet);
      box-shadow: var(--shadow);
      padding-block: 20px;
    }
  
    .navbar { all: unset; }
  
    .navbar-list {
      display: flex;
      align-items: center;
      gap: 30px;
    }
  
    .navbar .btn {
      margin-block-start: 0;
      --padding: 7px 30px;
    }
  
  
  
    /**
     * HERO
     */
  
    .hero .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
  
    .hero-content { text-align: left; }
  
    .btn-group { justify-content: flex-start; }
  
    .hero-title span { font-size: 3rem; }
  
    .hero-title {
      --fs-5: 2.2rem;
      margin-block-end: 25px;
    }
  
    .hero-text {
      margin-block-end: 25px;
      font-size: var(--fs-5);
    }
  
    .hero-banner {
      position: relative;
      margin-block-end: 0;
      order: 1;
      width: 340px;
      height: 390px;
      margin-inline: 0;
      margin-inline-start: auto;
    }
  
    .elem {
      position: absolute;
      display: flex;
      align-items: center;
      gap: 10px;
      background-color: var(--white);
      border-radius: var(--radius-10);
      padding: 20px;
    }
  
    .elem-1 {
      top: 20px;
      left: -130px;
    }
  
    .elem-1 .elem-title { color: var(--vivid-sky-blue); }
  
    .elem-2 {
      bottom: 30px;
      right: -80px;
    }
  
    .elem-2 .elem-title { color: var(--fiery-rose); }
  
    .elem-title {
      font-size: 4.5rem;
      line-height: 1.1;
    }
  
    .elem-text {
      max-width: 10ch;
      color: var(--black);
      font-weight: var(--fw-700);
      line-height: 1.1;
    }
  
    .elem-3 {
      top: -40px;
      right: -30px;
    }
  
    .elem-3 ion-icon {
      color: var(--minion-yellow);
      font-size: 6rem;
    }
  
    .rotate-img {
      display: block;
      position: absolute;
      bottom: -60px;
      left: -60px;
      width: 120px;
      animation: rotate360 15s linear infinite reverse;
    }
  
    @keyframes rotate360 {
      0% { transform: rotate(0); }
      100% { transform: rotate(1turn); }
    }
  
  
  
    /**
     * ABOUT
     */
  
    .about { padding-block: 180px; }
  
    .about .container {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 80px;
    }
  
    .about-banner {
      position: relative;
      margin-block-end: 0;
    }
  
    .abs-img,
    .abs-icon {
      display: block;
      position: absolute;
    }
  
    .abs-img {
      width: 250px;
      height: 250px;
      object-fit: cover;
      border-radius: inherit;
      bottom: -150px;
      left: -100px;
    }
  
    .abs-icon {
      font-size: 5rem;
      padding: 20px;
      border-radius: inherit;
    }
  
    .abs-icon-1 {
      top: 50px;
      left: -120px;
      background-color: var(--bluetiful);
    }
  
    .abs-icon-2 {
      top: -40px;
      right: -40px;
      background-color: var(--gold-web-golden);
    }
  
    .abs-icon-3 {
      bottom: -40px;
      left: 250px;
      background-color: var(--rufous);
    }
  
  
  
    /**
     * PORTFOLIO
     */
  
    .portfolio-card .card-subtitle { font-size: var(--fs-5); }
  
    .portfolio-card .btn-link { --fs-6: 1.6rem; }
  
  
  
    /**
     * SKILLS
     */
  
    .skills-list { column-gap: 100px; }
  
  
  
    /**
     * CONTACT
     */
  
    .contact-card { padding: 100px; }
  
    .contact .wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 80px;
    }
  
    .contact-form { margin-block-end: 0; }
  
    .contact-item { gap: 25px; }
  
    .contact-icon { padding: 30px; }
  
  
  
    /**
     * BLOG
     */
  
    .blog { padding-block-end: 180px; }
  
    .blog-list {
      grid-template-columns: repeat(3, 1fr);
      gap: 25px;
    }
  
    
  
    /**
     * FOOTER
     */
  
    .footer .container {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  
    .copyright,
    .footer-list { margin-inline: 0; }
  
  }