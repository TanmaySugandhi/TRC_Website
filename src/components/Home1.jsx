import React from "react";
import "./Home1.css";

function Home1() {
  return (
    <>
      <div className="about-section">
        <div className="container">
          <div className="row">
            <div className="left">
              <div className="about-img">
                <img src="/assets/trclogo1.png" alt="Club Logo" />
              </div>
            </div>
            <div className="right">
              <div className="section-header">
                <h2>About Us...</h2>
              </div>
              <div className="about-text">
                <p>
                  With a decade of a legendary legacy, The Robotics Club-SNIST
                  has emerged as one of the leading clubs in the college where
                  putting technical concepts into real life projects is
                  concerned. Our robots are not mere outputs but a celebration
                  of teamwork and innovation. The Robotics Club–SNIST is a
                  diverse group of over-enthused robotics nerds (really cool
                  ones!) who find roots across all academic departments of the
                  institute.
                </p>
                <p>
                  The Robotics Club, an outstanding team which came up with
                  conducting workshops and national level fests with thousands
                  of participants and loads of ingenious ideas. Our robots are
                  not mere outputs but a celebration of teaming, hard work and
                  sharing knowledge. We promote teamwork, all-round development
                  and innovation. TRC is not just a club but an opportunity to
                  keep your dreams alive.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section class="slogan-motto-section">
        <div class="slogan-motto-container">
          <div class="motto">
            <h2>OUR MOTIVATION</h2>
            <p>Coming together is Beginning</p>
            <p>Keeping together is Progress</p>
            <p>Working together is Success</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home1;
