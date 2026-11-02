import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI Product Engineer Intern</h4>
                <h5>eWealth Tech LLC · Remote (US)</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Since July 2026. Architected an agentic lead-generation pipeline
              (FastAPI, LangGraph, Crawl4AI, Playwright) that scraped and enriched
              30,000–40,000+ leads, and a GTM intelligence platform with
              multi-agent research, lead scoring, deduplication, vector search and
              CRM pipelines powering 3,000+ active leads. Built production
              outreach agents for email generation, sequencing, follow-ups and
              reply tracking, taking the platform from research to deployment with
              the founder.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>AI / ML Projects</h4>
                <h5>Independent builder</h5>
              </div>
              <h3>2025–26</h3>
            </div>
            <p>
              Shipped a multi-agent job finder, the CryNetV2 infant cry
              recognition system (Macro F1 0.26 → 0.382, deployed on AWS), a RAG
              research paper assistant and an RFID attendance platform handling
              500+ records/day.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech CSE (AI &amp; ML)</h4>
                <h5>Anurag University, Hyderabad</h5>
              </div>
              <h3>2023–27</h3>
            </div>
            <p>
              CGPA 9.2/10. Coursework in Data Structures and Algorithms, Machine
              Learning, Deep Learning, DBMS, Computer Networks and DevOps.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
