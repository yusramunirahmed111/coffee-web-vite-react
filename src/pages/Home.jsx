import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Artisan Coffee <span>Perfected</span></h1>
          <p>Experience the finest handcrafted coffee in town</p>
          <div className="hero-buttons">
            <Link to="/about" className="btn primary">Our Story</Link>
            <Link to="/contact" className="btn secondary">Visit Us</Link>
          </div>
        </div>
      </section>

      {/* Specials Section */}
      <section className="specials">
        <h2 className="section-title">Today's Specials</h2>
        <div className="specials-grid">
          <div className="special-item">
            <div className="special-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5')" }}></div>
            <h3>Honey Lavender Latte</h3>
            <p>A floral twist on our classic latte with locally sourced honey</p>
            <span className="price">$5.50</span>
          </div>
          <div className="special-item">
            <div className="special-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5')" }}></div>
            <h3>Cold Brew Float</h3>
            <p>Our signature cold brew with a scoop of vanilla bean ice cream</p>
            <span className="price">$6.00</span>
          </div>
          <div className="special-item">
            <div className="special-img" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5')" }}></div>
            <h3>Matcha Croissant</h3>
            <p>Freshly baked croissant with premium matcha filling</p>
            <span className="price">$4.25</span>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials">
        <h2 className="section-title">What Our Customers Say</h2>
        <div className="testimonial-slider">
          <div className="testimonial">
            <p>"The best coffee I've had in the city! The atmosphere is perfect for getting work done."</p>
            <div className="customer">
              <span className="name">Sarah J.</span>
              <span className="rating">★★★★★</span>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta">
        <h2>Ready to taste perfection?</h2>
        <p>Visit us today and experience our handcrafted beverages</p>
        <Link to="/contact" className="btn primary large">Find Us</Link>
      </section>
    </div>
  );
};

export default Home;

