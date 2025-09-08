import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserProfile from "./components/UserProfile";

export default function App() {
  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f9f9f9', minHeight: '100vh' }}>
      <Header />
      <MainContent />

      <section style={{ maxWidth: '900px', margin: '0 auto' }}>
        <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
        <UserProfile name="Bob" age={30} bio="Enjoys cooking and traveling" />
        <UserProfile name="Carol" age={22} bio="Passionate about art and music" />
      </section>

      <Footer />
    </div>
  );
}

