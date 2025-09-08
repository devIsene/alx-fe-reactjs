import React from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import UserContext from "./UserContext";
import UserInfo from "./components/UserInfo";

export default function App() {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };

  return (
    <UserContext.Provider value={userData}>
      <Header />
      <MainContent />
      <UserInfo /> {/* This will display user data from Context */}
      <Footer />
    </UserContext.Provider>
  );
}
