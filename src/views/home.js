import React from 'react'

import Script from 'dangerous-html/react'
import { Helmet } from 'react-helmet'

import ActiveUsers from '../components/active-users'
import YouTube from '../components/you-tube'
import Testimonal from '../components/testimonal'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Active Online Software Page</title>
        <meta property="og:title" content="Active Online Software Page" />
      </Helmet>
      <section className="home-hero">
        <div className="home-menu">
          <div id="mobile-menu" className="home-mobile-navigation">
            <img
              alt="pastedImage"
              src="/pastedimage-no9b-1500h.png"
              className="home-logo"
            />
            <div className="home-links">
              <span className="Link">Solutions</span>
              <span className="Link">How it works</span>
              <span className="Link">Prices</span>
            </div>
            <div id="close-mobile-menu" className="home-close-mobile-menu">
              <svg viewBox="0 0 804.5714285714286 1024" className="home-icon">
                <path d="M741.714 755.429c0 14.286-5.714 28.571-16 38.857l-77.714 77.714c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-168-168-168 168c-10.286 10.286-24.571 16-38.857 16s-28.571-5.714-38.857-16l-77.714-77.714c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l168-168-168-168c-10.286-10.286-16-24.571-16-38.857s5.714-28.571 16-38.857l77.714-77.714c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l168 168 168-168c10.286-10.286 24.571-16 38.857-16s28.571 5.714 38.857 16l77.714 77.714c10.286 10.286 16 24.571 16 38.857s-5.714 28.571-16 38.857l-168 168 168 168c10.286 10.286 16 24.571 16 38.857z"></path>
              </svg>
            </div>
          </div>
          <div className="home-desktop-navigation">
            <nav className="home-centered">
              <div className="home-left">
                <img
                  alt="pastedImage"
                  src="/logo-black-200h.png"
                  className="home-logo1"
                />
                <div className="home-links1">
                  <span className="Link">Solutions</span>
                  <span className="Link">How it works</span>
                  <span className="Link">Products</span>
                </div>
              </div>
              <div className="home-right">
                <div className="home-get-started">
                  <span className="home-text06">Get started</span>
                </div>
                <div id="open-mobile-menu" className="home-burger-menu">
                  <img
                    alt="pastedImage"
                    src="/pastedimage-yxbd.svg"
                    className="home-mobile-menu-button"
                  />
                </div>
              </div>
            </nav>
          </div>
          <div>
            <div className="home-container02">
              <Script
                html={`<script>
/*
Mobile menu - Code Embed
*/

// Mobile menu
const mobileMenu = document.querySelector("#mobile-menu")

// Buttons
const closeButton = document.querySelector("#close-mobile-menu")
const openButton = document.querySelector("#open-mobile-menu")

// On openButton click, set the mobileMenu position left to -100vw
openButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(0%)"
})

// On closeButton click, set the mobileMenu position to 0vw
closeButton.addEventListener("click", function() {
    mobileMenu.style.transform = "translateX(100%)"
})
</script>`}
              ></Script>
            </div>
          </div>
        </div>
        <header className="home-header">
          <h1 className="home-text07">
            Observe Almost Everything About Your Application
          </h1>
          <p className="home-text08">
            With Smart Alerts and Monitoring Integration, You get real time
            access to all your application stack be it metrics, logs and alerts
          </p>
          <div className="home-get-started1">
            <span className="home-text09">Get started</span>
          </div>
        </header>
        <div className="home-dashboard-preview">
          <div className="home-outline">
            <img
              alt="pastedImage"
              src="/dash-1400w.png"
              loading="lazy"
              className="home-image"
            />
          </div>
        </div>
      </section>
      <section className="home-features">
        <div className="home-title">
          <span className="home-text10">
            Let&apos;s make your application more smarter
          </span>
          <span className="home-text11">
            <span>
              Observe enables you to fetch  real time metrics and logs from any
              stack and make a meaningful 
            </span>
            <br></br>
            <span>insights out of it</span>
            <br></br>
          </span>
        </div>
        <div className="home-container03">
          <div className="home-cards">
            <div className="home-container04">
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/grafana-200w.webp"
                  className="home-icon02"
                />
                <span className="home-text16">GRAFANA</span>
                <span className="home-text17">
                  A single source of truth for providing access to all
                  dashboards
                </span>
              </div>
              <div className="home-publish card">
                <img
                  alt="pastedImage"
                  src="/loki-200h.webp"
                  className="home-icon03"
                />
                <span className="home-text18">LOKI</span>
                <span className="home-text19">
                  Gather all the logs of any application stack, Monolithic,
                  Microservices, 
                </span>
              </div>
            </div>
            <div className="home-container05">
              <div className="card home-analyze">
                <img
                  alt="pastedImage"
                  src="/prometheus-200h.webp"
                  className="home-icon04"
                />
                <span className="home-text20">Promethues</span>
                <span className="home-text21">
                  Gather all types of metrics be it a virtual machine, run time
                  pods or a runtime service, get all the metrics in a single
                  instance.
                </span>
              </div>
              <div className="card">
                <img
                  alt="pastedImage"
                  src="/k6logo.svg"
                  className="home-icon05"
                />
                <span className="home-text22">K6</span>
                <span className="home-text23">
                  Performance testing tool compatible with CI/CD, to automate
                  any type of performance testing be it load, stress, smoke
                  etc...
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-statistics">
        <div className="home-container06">
          <ActiveUsers Caption="— Metrics Types" Statistic="1000"></ActiveUsers>
          <ActiveUsers Caption="— Lines of Logs" Statistic="50k"></ActiveUsers>
          <ActiveUsers
            Caption="— Accounts Managed"
            Statistic="250K"
          ></ActiveUsers>
          <ActiveUsers Caption="— Live projects" Statistic="8"></ActiveUsers>
        </div>
      </section>
      <section className="home-banners">
        <div className="home-banner-manage">
          <div className="home-container07">
            <div className="home-left1">
              <span className="sub-title">Alert and Monitoring!</span>
              <span className="home-text25 title">
                Get Alerts and be proactive in your decision.
              </span>
              <span className="home-text26">
                With Jio Observe you can get the alerts based on your selected
                metrics criteria and take decision proactively.
              </span>
              <div className="home-get-started2 template-button">
                <span className="home-text27">Get started</span>
              </div>
            </div>
            <div className="home-image-container">
              <img
                alt="pastedImage"
                src="/pastedimage-wvmq%201-1200w.png"
                className="home-cards-image"
              />
            </div>
          </div>
        </div>
        <div className="home-banner-advanced-analytics">
          <div className="home-centered-container">
            <div className="home-image-container1">
              <img
                alt="pastedImage"
                src="/test-1200w.png"
                className="home-cards-image1"
              />
            </div>
            <div className="home-right1">
              <span className="sub-title">
                Reporting Metrics
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <h2 className="home-text29 title">
                Advanced analytics, easy to understand.
              </h2>
              <div className="home-category">
                <span className="home-text30">Power reports</span>
                <span className="home-text31">
                  Get concise report of functionality and performance testing
                  and automate almost all of your testing stack. 
                </span>
                <span className="home-text32">Example -&gt;</span>
              </div>
              <div className="home-category1">
                <span className="home-text33">Scheduled Alerts</span>
                <span className="home-text34">
                  Get weekly summary of your stack, get the metrics and logs
                  monitoring and be in sync with all your current trends.
                </span>
                <span className="home-text35">Example -&gt;</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-banner">
          <div className="home-container08">
            <div className="home-left2">
              <span className="home-text36">Improve Observability</span>
              <h2 className="home-text37 title">
                Powerful tool stack that saves you time
              </h2>
              <div className="home-get-started3 template-button">
                <span className="home-text38">Get started</span>
              </div>
            </div>
            <div className="home-image-container2">
              <img
                alt="pastedImage"
                src="/k6-1200w.png"
                className="home-cards-image2"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-integrations">
        <div className="home-centered-container1">
          <div className="home-heading">
            <span className="sub-title">Integrations</span>
            <span className="title">
              Integrated with the tools you know and love
            </span>
            <span className="home-text41">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. vv
            </span>
          </div>
          <div className="home-pills-container">
            <div className="home-pills">
              <div className="home-container09">
                <YouTube pastedImage_src="/node-200h.png"></YouTube>
                <YouTube pastedImage_src="/python-200h.png"></YouTube>
                <YouTube pastedImage_src="/icons8-react-40-200h.png"></YouTube>
                <YouTube pastedImage_src="/java-200h.png"></YouTube>
              </div>
              <div className="home-container10">
                <YouTube pastedImage_src="/netcore-200h.png"></YouTube>
                <YouTube pastedImage_src="/php-200h.png"></YouTube>
                <YouTube pastedImage_src="/linux-200h.png"></YouTube>
                <YouTube pastedImage_src="/windows-200h.png"></YouTube>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="home-how-it-works">
        <div className="home-centered-container2">
          <div className="home-heading1">
            <span className="home-text42">How it works</span>
            <span className="home-text43 title">
              Getting smart metrics, Alerts and Logs has never been easier
            </span>
          </div>
          <div className="home-category2">
            <div className="home-headng">
              <span className="home-text44">1 — Let us know your Stack</span>
              <span className="home-text45">
                The best way to get the access of our stack is to be onboarded
                as a contributor fill the form and give us all relevant details
                of your tech stack so that we can integrate the metrics, logs
                and alerts
              </span>
              <div className="home-get-started4 template-button">
                <span className="home-text46">Get started</span>
              </div>
            </div>
            <div className="home-container11">
              <img
                alt="pastedImage"
                src="/pastedimage-k5xi%201-1200w.png"
                className="home-pasted-image"
              />
            </div>
          </div>
          <div className="home-row">
            <div className="home-category3">
              <div className="home-headng1">
                <span className="home-text47">2 — Integrate</span>
                <span className="home-text48">
                  Once you have decided which metrics are to be published and
                  which alerts are to taken into consideration we can publish
                  the dashboard with smart alerts. 
                </span>
              </div>
              <img
                alt="pastedImage"
                src="/pastedimage-ibg-1200w.png"
                className="home-pasted-image1"
              />
            </div>
            <div className="home-category4">
              <div className="home-headng2">
                <span className="home-text49">3— Act</span>
                <span className="home-text50">
                  Once you are aware of how your stack is running and behaving
                  in realtime, you can take decision in runtime 
                </span>
              </div>
              <img
                alt="pastedImage"
                src="/pastedimage-3c4o-1200w.png"
                className="home-pasted-image2"
              />
            </div>
          </div>
        </div>
      </section>
      <section className="home-testimonals">
        <div className="home-left3">
          <span className="home-text51">Testimonals</span>
          <span className="home-text52 title">
            What people say about Active
          </span>
        </div>
        <div className="home-right2">
          <div className="home-column">
            <Testimonal
              Quote='"Pellentesque sodales libero nulla, ac imperdiet ante tincidunt vel. Fusce auctor augue sed massa finibus, et dictum sem mollis. In luctus.”'
              Avatar_src="/image552912-e3yq-200h.png"
            ></Testimonal>
            <Testimonal
              From="Social Club"
              Name="Jessica Smith"
              Quote="“Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo.\u2028 Inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.”"
              Avatar_src="/image312912-mvsg-200h.png"
            ></Testimonal>
            <Testimonal
              From="BeMe"
              Name="Logan Boy"
              Quote="“Totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo..”"
              Avatar_src="/image502912-6wy-200h.png"
            ></Testimonal>
            <Testimonal
              From="Hello W."
              Name="Laraine Summers"
              Quote="“Rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae.”"
              Avatar_src="/image202912-zekh-200h.png"
            ></Testimonal>
          </div>
          <div className="home-column1">
            <Testimonal
              From="Handsly"
              Name="William McPau"
              Quote='"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”'
              Avatar_src="/image572912-0d3-200h.png"
            ></Testimonal>
            <Testimonal
              From="Share"
              Name="Mariah Mae"
              Quote="“Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.”"
              Avatar_src="/image632913-swij-200h.png"
            ></Testimonal>
            <Testimonal
              From="Gather"
              Name="John Finati"
              Quote='"Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.”'
              Avatar_src="/image102913-x4z8-200h.png"
            ></Testimonal>
            <Testimonal
              From="Zigo"
              Name="Mary Pau"
              Quote='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. ”'
              Avatar_src="/image562913-ycff-200h.png"
            ></Testimonal>
          </div>
        </div>
        <span className="home-text53">
          <span>Show more</span>
          <br></br>
        </span>
      </section>
      <section className="home-action-bar">
        <div className="home-action">
          <div className="home-heading2">
            <span className="home-text56 title">
              <span>Get Metrics and Logs  now </span>
              <br></br>
              <span>with Jio Observe!</span>
            </span>
            <span className="home-text60">
              Make you application smart with us 
            </span>
            <div className="home-get-started5 template-button">
              <span className="home-text61">
                <span>Start here</span>
                <br></br>
              </span>
            </div>
          </div>
          <div className="home-images">
            <img
              alt="image"
              src="/e564eaa3c4fab71792794d666a281742-1200w.png"
              className="home-image1"
            />
          </div>
        </div>
      </section>
      <section className="home-faq">
        <div className="home-heading3">
          <span className="home-text64 title">Frequently asked questions</span>
          <span className="home-text65">
            Lets read what most of the people want to ask us!
          </span>
        </div>
        <div className="home-accordion">
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header1">
              <span className="home-text66">
                — What Does Jio Observe Provide?
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text67">
                Jio observe provides a seamless integration to gather all
                important metrics and logs of your runtime application, it also
                provides you with smart alerts in order to make you more
                proactive with the issue management.
              </span>
            </div>
          </div>
          <div className="accordionContainer">
            <div className="home-header2">
              <span className="home-text68">
                — Is Jio Observe built on open source?
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text69">
                Yes, as of now whole stack is open source and we use tools like
                grafana, prometheus, loki and K6 to gather the metrics, logs and
                also performance evaluation of a runtime application
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header3">
              <span className="home-text70">
                — How can i onboard my application on Jio Observe?
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text71">
                Its pretty much clean and simple , you just have to fill our
                form and get the prerequisite done so that we can run our magic
                code (scripts) and shall gather all your metrics and shall
                provide you with a realtime dashboard in 24 hrs.
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header4">
              <span className="home-text72">
                — What are the future plans of Jio Observe
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text73">
                We are soon going to launch our DevOps and SRE bot which shall
                be available 24*7 and shall answer all your query in runtime.
              </span>
            </div>
          </div>
          <div data-faq="closed" className="accordionContainer">
            <div className="home-header5">
              <span className="home-text74">
                — Alerts are provided by what medium as of now?
              </span>
              <svg viewBox="0 0 1024 1024" className="accordionIcon">
                <path d="M316 366l196 196 196-196 60 60-256 256-256-256z"></path>
              </svg>
            </div>
            <div className="accordionContent">
              <span className="home-text75">
                Currently we are serving the alerts with only mail (via SMTP),
                soon we shall provide the same with the teams.
              </span>
            </div>
          </div>
        </div>
        <div>
          <div className="home-container13">
            <Script
              html={`<script>
// Accordion - Code Embed

const accordionContainers = document.querySelectorAll(".accordionContainer"); // All accordion containers
const accordionContents = document.querySelectorAll(".accordionContent"); // All accordion content
const accordionIcons = document.querySelectorAll(".accordionIcon"); // All accordion icons

accordionContents.forEach((accordionContent) => {
    accordionContent.style.display = "none"; //Hides all accordion contents
});

accordionContainers.forEach((accordionContainer, index) => {
    accordionContainer.addEventListener("click", () => {
        accordionContents.forEach((accordionContent) => {
            accordionContent.style.display = "none"; //Hides all accordion contents
        });

        accordionIcons.forEach((accordionIcon) => {
            accordionIcon.style.transform = "rotate(0deg)"; // Resets all icon transforms to 0deg (default)
        });

        if (accordionContainer.classList.contains("accordion-open")) { // Checks if this container has class "accordion-open"
            accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open"
        } else {
            accordionContainers.forEach((accordionContainer) => {
                accordionContainer.classList.remove("accordion-open"); // Removes class "accordion-open" from all containers
            });

            accordionContainer.classList.add("accordion-open"); // Adds class "accordion-open" to this container
            accordionContents[index].style.display = "flex"; // Shows accordion content
            accordionIcons[index].style.transform = "rotate(180deg)"; // Rotates accordion icon 180deg
        }
    });
});

/*
Here's what the above is doing:
    1. Selects all accordion containers, contents, and icons
    2. Hides all accordion contents
    3. Adds an event listener to each accordion container
    4. When an accordion container is clicked, it:
        - Hides all accordion contents
        - Resets all icon transforms to 0deg (default)
        - Checks if this container has class "accordion-open"
            - If it does, it removes class "accordion-open"
            - If it doesn't, it:
                - Removes class "accordion-open" from all containers
                - Adds class "accordion-open" to this container
                - Shows accordion content
                - Rotates accordion icon 180deg
*/
</script>`}
            ></Script>
          </div>
        </div>
      </section>
      <footer className="home-footer">
        <div className="home-top">
          <div className="home-left4">
            <span className="home-text76">
              Subscribe to our newsletter (coming soon)
            </span>
            <div className="home-subscription">
              <input
                type="email"
                placeholder="Enter your email"
                className="home-textinput input"
              />
              <div className="home-subscribe">
                <span className="home-text77">Subscribe</span>
              </div>
            </div>
            <span className="home-text78">
              Subscribe to our weekly news letter and get the latest updates.
            </span>
            <div className="home-contact">
              <span className="home-text79">Contact</span>
              <a
                href="mailto:use@active-app.com?subject=Support"
                className="home-link"
              >
                enterprise-devops@ril.com
              </a>
            </div>
          </div>
          <div className="home-right3">
            <div className="home-category5">
              <span className="home-text80">Solutions</span>
              <div className="home-links2">
                <span className="home-text81">Grafana Dashboard</span>
                <span className="home-text82">Prometheus Metrics</span>
                <span className="home-text83">Loki Log aggregator </span>
                <span className="home-text84">Smart SMTP Alerts</span>
              </div>
            </div>
            <div className="home-category6">
              <span className="home-text85">Jio Observe</span>
              <div className="home-links3">
                <span className="home-text86">About</span>
                <span className="home-text87">Team</span>
                <span className="home-text88">Partners</span>
              </div>
            </div>
            <div className="home-category7">
              <span className="home-text89">Any feedback?</span>
              <div className="home-links4">
                <span className="home-text90">Get in touch</span>
              </div>
            </div>
          </div>
        </div>
        <div className="home-bottom">
          <img
            alt="pastedImage"
            src="/logo-black-200h.png"
            className="home-branding"
          />
          <span className="home-text91">Copyright © Jio Observe - 2023</span>
        </div>
      </footer>
    </div>
  )
}

export default Home
