import React, { useState } from "react";
import "../components/Home2.css";
import Home1 from "../components/Home1";

const notesContent = {
  note1: `<p>Recognized as one of the most elite clubs of the institute, The Robotics Club has demonstrated its excellence at every point. The Robotics club is similar to a prism where in several colors converge to form a perfect white light. Clubs like The Robotics Club-SNIST make us proud everyday. The scientific temper and the organization of the club are remarkable. The events that they conduct are the chances of learning at every step.The club has developed a lot since it's inception and has our constant support for bringing out the best among the students.</p>`,
  note2: `<p>I am very happy to note that SNIST Robotics club celebrating its 11 th Anniversary on 4.3.2018. It is my honor to serve as the faculty adviser for the SNIST Robotics Club for the last six years. On this occasion I'm so excited to announce that SNIST is one of Engineering Colleges across the country after IITs organizing a “ROBOVEDA” a National Robotics Symposium regularly every year for the last 10 years. Our director, staff and students have put in a tremendous amount of work over the years to make SNIST a 21st Century Automation & Robotic School! SNIST Robotics Club is open to all Engineering branch students. The mission of the club is to teach the members what robotics is, and how it is being used in today’s Industry world. The key learning outcomes of the SNIST Robotics Club efforts are:<p>
        <ul>
        <li>Applying Engineering knowledge for Robotics Technology Applications
        <li>Developing solutions, selecting, building, testing and evaluating for Robot models</li>
        <li>Finding creative alternative solutions in the field of Automation and Robotics</li>
        <li>Learning how to communicate, share ideas and work together</li>
        <li>Getting lots of Hands on experience with sensors, motors and intelligent units required for building various robots.</li>
        <p>I look forward to continuing to work with such outstanding students and their teams while making SNIST Robotic club a nationally and internationally recognized institution in Robotics! I wish all the success for every member of the club in their future career.</p>`,
  note3: `<p>It gives immense pleasure for us to once again write the founders note as part of ‘Our Glory’ magazine. When we first envisaged the idea of an annual club magazine our principal goal was to document the diverse activities carried out by the enthusiastic members. Further we wanted to provide an opportunity and motivation for the members on technical writing which is very important cog in the wheel of professional skills each of the engineers need to equip themselves with. The magazine was christened aptly “Our Glory” as it documented the immense pride brought to the collective TRC community by the projects or working models that won accolades outside the college, be it in some national level technical festivals, robotic competitions or seminars or the like. We strongly believed that it would also be instrumental in fostering healthy competition between the competing members and expected it to grow to a stature of an engineering journal over a period of time where technical papers from students across the country could be published. Although it has been more than a decade since its launch the pace of its growth hasn’t been as expected. For reasons unknown to us the release of the club magazine was briefly discontinued which perhaps might have stunted its growth. Nonetheless, we are immensely gratified with the content of the current edition of the magazine and compliment all the contributors. Additionally, it contains very large number of technical reports which shows the breadth of participation from the young members of the club. We would like to recommend members to pay more attention and incorporate the following aspects while writing technical reports in future</p>
        <ul>
        <li>Proper mathematical formulation of the problem.</li>
        <li>Mathematical/ Computer based simulations where ever possible/feasible.</li>
        <li>Conciseness of the content.</li>
        <li>Clarity of ideas, results and conclusions.</li>
        <li>Appropriate technical language (graphs, plots, Tables and Figures).</li>
        <li>Project planning and costing aspects.</li>
        <li>Genuine Citations of others work where ever applicable to avoid Plagiarism.</li></ul>
        <p>We request the steering committee and the chief editor of the magazine to formulate a standard format for the future editions in line with some of the leading engineering journals. This will serve the purpose of practice and shall thoroughly inculcate academic professionalism in the budding young student members. We appreciate and congratulate the current President and his executive team for taking upon them to resume the tradition of releasing ‘Our Glory’ magazine. We sincerely advise the steering committee to keep the tradition of releasing the annual magazine in the future and urge all the members of the club to take up technical writing seriously and contribute to the clubs’ magazine as much as they can. It inspires the future members and at the end shall be an invaluable asset in your professional or academic life. We thank each and every member of the club for remembering us on this occasion. From the bottom of our heart we wish you success in all your future endeavours.Thank You!</p>`,
  note4: `<p>THE ROBOTICS CLUB is a place where I have cultivated a lot of things which helped me to develop both my technical skills as well as my conduct. I feel proud to be a part of this club, which has given me and many others, a platform to grow and rediscover ourselves. My journey from mentee to president contains a lot of milestones in between which made me realize who I am what I exactly learned. The Robotics Club is for all those future engineers who have the courage to accept the challenges in the field of Engineering and have the capabilities to turn imagination into reality and get a practical orientation which would eventually enhance their employability</p>
          <p>I first joined The Robotics Club with an immense passion and dedication in the field of robotics. The club follows a unique fresher induction program to recruit first yeas into club. INDUCTION-15 gave me a bag full of phenomenal experiences. I was grouped into a team of 10 members from various departments and we were guided by 3 seniors. Our team was successful in designing a robotic arm. After being selected as permanent member of the club we (team of 3) under the guidance of technical heads were successful in designing a solar tracking system. In my second year I was successful in leading a team of 10 members with my co-mentor and our project was one of the working projects during INDUCTION-16. Later I was nominated as the technical Joint secretary for the Club, I got a platform to share the knowledge of robotics with the club members and working for Roboveda”16 was awe- inspiration .Working together with my president and other seniors of the Club, I saw how difficult it is to organize a national level symposium with the utmost level of perfection. It gives me enormous satisfaction and leaves me with great felling of stature whenever I work for the club.</p>
          <p>After being elected as President of the club, I was feeling a bit nervy and at the same time I felt very obliged. I underwent many situations where I was given so many gargantuan tasks but at the end it gives me a feelingof contentment and relish when I complete them on time. Today, I as the president of The Robotics Club-SNIST, feel grateful to the patrons, faculties- in-charge and pioneers of the club for making the club stand out as one of a kind, with its exceptional discipline, organisational and technical competencies.</p>
          <p>As my team always believed that robotics club is not just a place to make robots, rather it is a place to learn and experience many things which could mould a student into a complete professional. Be it organizing skills, be it communication skills, be it team building skills, be it inventory management, be it marketing, be it budgeting, be it costing, be it accounting, what not and the list goes on with myriad number of opportunities if only one can understand and explore. ROBOVEDA unlike other technical festivals is organized to showcase the technical & organizational acumen of the club members and to share such knowledge with many other budding engineers across the country. We always ensured that even the smallest of activities in the club should inculcate pragmatic thinking and learning.</p>
          <p>I couldn’t imagine the success of the club without, the Vice President, General Secretary, the executive body, student advisory board and designing team who always stood on my words,helped me in every way possible and I am whole-heartedly, delightful to them for their support. I would like thank my juniors who worked day in and day out to represent the club in many national level events. And all these things would not be possible without the guidance of our respected Director Dr PNarasimha Reddy Sir, our convener Dr.T.Ch. Siva Reddy Sir, our faculty advisor Dr A. Purushotham sir who stood as backbone for the club and other staff who have patiently granted us permissions and also endowed confidence in us. Now it is the time for me to enjoy the triumph and I wish all the future generations of the club good luck and hope that the stature of the club enriches even more.</p>`,
};

function Modal({ show, onClose, children }) {
  if (!show) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close-button" onClick={onClose}>
          &times;
        </button>
        <div
          className="modal-body"
          dangerouslySetInnerHTML={{ __html: children }}
        />
      </div>
    </div>
  );
}

export default function NotesSection() {
  const [modalNote, setModalNote] = useState(null);

  const openNote = (noteId) => {
    setModalNote(notesContent[noteId]);
  };

  const closeNote = () => {
    setModalNote(null);
  };

  return (
    <>
      <div className="team-header">
        <h1 className="team-title">About Our Club</h1>
      </div>
      <Home1 />
      <section className="about-section" style={{ background: "#dddddd" }}>
        <div className="container">
          <div className="section-header">
            <h1 className="note-heading">Our Glory Notes</h1>
          </div>
          <div>
            <div>
              <div className="blog-item">
                <div className="notes-title">
                  <h3>PRINCIPAL</h3>
                </div>
                <div className="note-meta">
                  <p>By DR.T CH SIVA REDDY</p>
                </div>
                <div className="note-text">
                  <p>
                    Recognized as one of the most elite clubs of the institute,
                    The Robotics Club has demonstrated its excellence at every
                    point. The Robotics club is similar to a prism where in
                    several colors converge to form a perfect white light.
                    <button
                      className="read-more-button"
                      onClick={() => openNote("note1")}
                      style={{
                        color: "black",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Read More
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div data-wow-delay="0.2s">
              <div className="blog-item">
                <div className="notes-title">
                  <h3>FACULTY ADVISOR</h3>
                </div>
                <div className="note-meta">
                  <p>By DR. A PURUSHOTHAM</p>
                </div>
                <div className="note-text">
                  <p>
                    I am very happy to note that SNIST Robotics club celebrating
                    its 11 th Anniversary on 4.3.2018. It is my honor to serve
                    as the faculty adviser for the SNIST Robotics Club for the
                    last six years. On this occasion I'm so excited to announce
                    that SNIST is one of Engineering Colleges across the country
                    after IITs organizing a “ROBOVEDA” a National Robotics
                    Symposium regularly every year for the last 10 years.
                    <button
                      className="read-more-button"
                      onClick={() => openNote("note2")}
                      style={{
                        color: "black",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Read More
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div data-wow-delay="0.2s">
              <div className="blog-item">
                <div className="notes-title">
                  <h3>FOUNDERS</h3>
                </div>
                <div className="note-meta">
                  <p>
                    PRADEEP ANANTHANARAYANAN || NAGA CHAITHANYABOPPUDI ||
                    KRISHNA CHAITANYACHINTAMANENI
                  </p>
                </div>
                <div className="note-text">
                  <p>
                    I am very happy to note that SNIST Robotics club celebrating
                    its 11 th Anniversary on 4.3.2018. It is my honor to serve
                    as the faculty adviser for the SNIST Robotics Club for the
                    last six years. On this occasion I'm so excited to announce
                    that SNIST is one of Engineering Colleges across the country
                    after IITs organizing a “ROBOVEDA” a National Robotics
                    Symposium regularly every year for the last 10 years.
                    <button
                      className="read-more-button"
                      onClick={() => openNote("note3")}
                      style={{
                        color: "black",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Read More
                    </button>
                  </p>
                </div>
              </div>
            </div>
            <div data-wow-delay="0.2s">
              <div className="blog-item">
                <div className="notes-title">
                  <h3>PRESIDENT</h3>
                </div>
                <div className="note-meta">
                  <p>By N.V.V.S Narayana</p>
                </div>
                <div className="note-text">
                  <p>
                    THE ROBOTICS CLUB is a place where I have cultivated a lot
                    of things which helped me to develop both my technical
                    skills as well as my conduct. I feel proud to be a part of
                    this club, which has given me and many others, a platform to
                    grow and rediscover ourselves. My journey from mentee to
                    president contains a lot of milestones in between which made
                    me realize who I am what I exactly learned. The Robotics
                    Club is for all those future engineers who have the courage
                    to accept the challenges in the field of Engineering and
                    have the capabilities to turn imagination into reality and
                    get a practical orientation which would eventually enhance
                    their employability
                    <button
                      className="read-more-button"
                      onClick={() => openNote("note4")}
                      style={{
                        color: "black",
                        background: "none",
                        border: "none",
                        cursor: "pointer",
                      }}
                    >
                      Read More
                    </button>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Modal show={!!modalNote} onClose={closeNote}>
        {modalNote}
      </Modal>
    </>
  );
}
