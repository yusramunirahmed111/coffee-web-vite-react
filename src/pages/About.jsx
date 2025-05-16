const About = () => {
  return (
    <div className="about-page">
      {/* About Hero */}
      <section className="about-hero">
        <div className="container">
          <h1>Our Story</h1>
          <p>From humble beginnings to your favorite local cafe</p>
        </div>
      </section>

      {/* Our Story */}
      <section className="our-story">
        <div className="container">
          <div className="story-content">
            <h2>Brewing Since 2010</h2>
            <p>
              Brew Haven began as a small coffee cart in downtown New York, with a simple mission: 
              to serve exceptional coffee with genuine care. What started as a passion project between 
              two college friends quickly grew into the beloved establishment you see today.
            </p>
            <p>
              Every cup we serve is a testament to our commitment to quality, sustainability, 
              and community. We source our beans directly from ethical growers and roast them 
              in-house to bring out their unique character.
            </p>
          </div>
          <div className="story-image">
            <img src="https://images.unsplash.com/photo-1445116572660-236099ec97a0" alt="Our cafe" />
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="our-values">
        <div className="container">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Sustainability</h3>
              <p>We partner with eco-conscious suppliers and use compostable packaging</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Community</h3>
              <p>We host local artists and donate a portion of profits to neighborhood initiatives</p>
            </div>
            <div className="value-card">
              <div className="value-icon">✨</div>
              <h3>Quality</h3>
              <p>Every drink is crafted with precision using the finest ingredients</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="our-team">
        <div className="container">
          <h2>Meet The Team</h2>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-photo" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1560250097-0b93528c311a')" }}></div>
              <h3>Alex Morgan</h3>
              <p>Founder & Head Roaster</p>
            </div>
            <div className="team-member">
              <div className="member-photo" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2')" }}></div>
              <h3>Jamie Chen</h3>
              <p>Founder & Barista Trainer</p>
            </div>
            <div className="team-member">
              <div className="member-photo" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551836022-d5d88e9218df')" }}></div>
              <h3>Taylor Smith</h3>
              <p>Pastry Chef</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;