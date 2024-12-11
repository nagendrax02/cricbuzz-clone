import React from "react";
import "./homepage.css"; // Your custom CSS
import '@fortawesome/fontawesome-free/css/all.min.css';
import '@fontsource/roboto'; // Replace "roboto" with your desired font


const LandingPage = () => {
  return (
    <div class="main-div">
      <div class="container">
        <nav class="header">
          <div class="header-first-section">
            <i class="bi bi-list"> </i>
            <img
              class="logo"
              src="https://static.cricbuzz.com/images/cb_logo.svg"
            />
            <span class="login">Log in</span>
            <span class="hide">Live Scores</span>
            <span class="hide">Schedule</span>
            <span class="hide">Archives</span>
            <span
              onmouseover="handleMouseOver()"
              onmouseout="handleMouseOut()"
              class="hide hover-card"
            >
              <div class="header-dropdown-list">
                News <i class="fa-solid fa-chevron-down"></i>
                <div class="hover-card-items">
                  <li>Editorials</li>
                  <li>Latest News</li>
                </div>
              </div>
            </span>
            <span class="hide">Series</span>
            <span class="hide">Teams</span>
            <span class="hide">Videos</span>
            <span class="hide">Rankings</span>
            <span class="hide">More</span>
          </div>
          <div class="header-second-section">
            <span class="header-second-section-first-div">MATCHES</span>
            <span class="">CSK VS PBKS - PBKS</span>
            <span class="">SRH VS RR - Review</span>
            <span class="">MI VS LSG - LSG won</span>
            <span class="">DC VS KKR - KKR won</span>
            <span class="">CSK VS SRH - CSK won</span>
          </div>
          <div class="header-second-section-mobile"></div>
        </nav>
        <div class="content-container">
          <div class="carousal"></div>
          <div class="ipl-section">
            <div class="ipl-heading">
              <b>Indian Premier League 2024</b>
            </div>
            <div>matches</div>
            <div>news</div>
            <div>videos</div>
          </div>
          <div class="quick-access">
            <div class="quick-access-label">
              <b>Quick Access</b>
            </div>
            <div>IPL 2024</div>
            <div>Fantasy Handbook</div>
            <div>See Plans</div>
            <div>CSK</div>
            <div>RCB</div>
            <div>MI</div>
            <div>Crickbuzz Plus</div>
            <div>CB Plus and times Prime</div>
          </div>
          <div class="overview">
            <div class="news-photos-schedule-section">
              <div class="latest-news-section">
                <b class="latest-news-heading">LATEST NEWS</b>
                <div class="news-heading">
                  Fleming bemoans CSK's 'inaccuracies with bat and ball'
                </div>
                <div class="time">1h ago</div>
                <hr class="horizontal-line" />
                <div class="news-heading">
                  Rahul Chahar, Harpreet Brar choke CSK into submission
                </div>
                <div class="time">11h ago</div>
                <hr class="horizontal-line" />
                <div class="news-heading">
                  Gloucestershire's Ben Wells forced to retire due to heart
                  condition
                </div>
                <div class="time">19h ago</div>
                <hr class="horizontal-line" />
                <div class="news-heading">
                  CT 2025: PCB earmarks Lahore as sole venue for India games
                </div>
                <div class="time">1d ago</div>
                <hr class="horizontal-line" />
                <div class="news-heading">
                  No surprises in Nida Dar-led Pakistan side for tour of England
                </div>
                <div class="time">2d ago</div>
                <hr class="horizontal-line" />
                <div class="news-heading">
                  SRH hope to stamp authority over table-toppers
                </div>
                <div class="time">3d ago</div>
                <hr class="horizontal-line" />
                <div class="button-div">
                  <button>More News</button>
                </div>
              </div>
              <div class="latest-photos-section">
                <b class="latest-photos-heading">Latest Photo</b>
                <img src="https://static.cricbuzz.com/a/img/v1/i1/c458488/ipl-2024-csk-vs-pbks-match-49.jpg?d=low&p=det" />
                <div class="news-heading">IPL 2024: CSK vs PKBKS, Match 49</div>
                <div class="time">Wed, May 1, 2024</div>
                <hr class="horizontal-line" />
                <div class="button-div">
                  <button>More Photos</button>
                </div>
              </div>
            </div>
            <div class="top-stories">
              <div class="story-card">
                <div class="match-category">IPL 2024</div>

                <img
                  class="top-stories-img"
                  src="https://static.cricbuzz.com/a/img/v1/i1/c458585/ra…t-brar-choke-csk-into-submission.jpg?d=high&p=det"
                />
                <div class="heading">
                  Rahul Chahar, Harpreet Brar choke CSK into submission
                </div>
                <div class="description">
                  Punjab Kings' fifth straight win against CSK kept them within
                  touching distance of playoffs positions
                </div>
                <b class="blue-text-heading">
                  Fleming bemoans CSK's 'inaccuracies with bat and ball'
                </b>
                <b class="blue-text-heading">
                  Pulse / What do you have in mind, PBKS?
                </b>
                <hr class="horizontal-line" />
              </div>
            </div>
            <div class="features-videos-sepcials-section">
              <div class="features-videos">
                <b class="latest-news-heading">LATEST NEWS</b>
                <div class="image-with-text-div">
                  <img
                    class="features-videos-img"
                    src="https://static.cricbuzz.com/a/img/v1/i1/c461836/cr…ngaluru-v-gujarat-pre-match-show.jpg?d=high&p=det"
                  />
                  <div class="video-highlight-text">
                    Cricbuzz live: IPL 2024 | Bengaluru vs Gujarat, Pre-match
                    show
                  </div>
                </div>
              </div>

              <div class="features-videos">
                <b class="latest-news-heading">LATEST NEWS</b>
                <div class="image-with-text-div">
                  <img
                    class="features-videos-img"
                    src="https://static.cricbuzz.com/a/img/v1/i1/c461836/cr…ngaluru-v-gujarat-pre-match-show.jpg?d=high&p=det"
                  />
                  <div class="video-highlight-text">
                    Cricbuzz live: IPL 2024 | Bengaluru vs Gujarat, Pre-match
                    show
                  </div>
                </div>
              </div>

              <div class="features-videos">
                <b class="latest-news-heading">LATEST NEWS</b>
                <div class="image-with-text-div">
                  <img
                    class="features-videos-img"
                    src="https://static.cricbuzz.com/a/img/v1/i1/c461836/cr…ngaluru-v-gujarat-pre-match-show.jpg?d=high&p=det"
                  />
                  <div class="video-highlight-text">
                    Cricbuzz live: IPL 2024 | Bengaluru vs Gujarat, Pre-match
                    show
                  </div>
                </div>
              </div>

              <div class="features-videos">
                <b class="latest-news-heading">LATEST NEWS</b>
                <div class="image-with-text-div">
                  <img
                    class="features-videos-img"
                    src="https://static.cricbuzz.com/a/img/v1/i1/c461836/cr…ngaluru-v-gujarat-pre-match-show.jpg?d=high&p=det"
                  />
                  <div class="video-highlight-text">
                    Cricbuzz live: IPL 2024 | Bengaluru vs Gujarat, Pre-match
                    show
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="scrollable-content-container"></div>

        <div class="mobile-footer">
          <div>
            <i class="bi bi-house-fill"></i>
            <div class="footer-text">Home</div>
          </div>
          <div>
            <i class="bi bi-slash-circle-fill"></i>
            <div class="footer-text">Matches</div>
          </div>
          <div>
            <i class="bi bi-funnel-fill"></i>
            <div class="footer-text">Series</div>
          </div>
          <div>
            <i class="bi bi-play-btn"></i>
            <div class="footer-text">Videos</div>
          </div>

          <div>
            <i class="bi bi-newspaper"></i>
            <div class="footer-text">News</div>
          </div>
        </div>

        <footer class="footer">
          <div>
            <img
              class="footer-image"
              src="https://static.cricbuzz.com/images/cb_logo.svg"
            />
          </div>
          <div>
            <div class="footer-heading">APPS</div>
            <div>Android</div>
            <div>IOS</div>
          </div>
          <div>
            <div class="footer-heading">FOLLOW US ON</div>
            <div>Facebook</div>
            <div>Twitter</div>
            <div>Youtube</div>
            <div>Pinterest</div>
          </div>
          <div>
            <div class="footer-heading">COMPANY</div>
            <div>Careers</div>
            <div>Advertise</div>
            <div>Privacy Policy</div>
            <div>Terms of Use</div>
            <div>Cricbuzz TV Ads</div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;
