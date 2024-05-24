import React from 'react';
import './HomePage.css';

function HomePage() {
  return (
    <>
    <div className="HomePage">
      <header className="HomeHeader">
        <h1>Welcome to Our Website</h1>
      </header>
      <main className="HomeMain">
        <section className="IntroSection">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </section>
        <section className="FeaturesSection">
          <h2>Our Features</h2>
          <div className="FeaturesList">
            <div className="Feature">
              <h3>Feature One</h3>
              <p>Detail about feature one.</p>
            </div>
            <div className="Feature">
              <h3>Feature Two</h3>
              <p>Detail about feature two.</p>
            </div>
            <div className="Feature">
              <h3>Feature Three</h3>
              <p>Detail about feature three.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className="HomeFooter">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </footer>
    </div>
    </>
  );
}

export default HomePage;
