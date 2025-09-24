import React from "react";

export default function MainContent() {
  return (
    <main style={{ padding: '16px', textAlign: 'center' }}>
      <h2 style={{ marginBottom: '12px' }}>Top Cities</h2>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        <li style={{ padding: '8px', border: '1px solid gray', margin: '4px' }}>Nairobi</li>
        <li style={{ padding: '8px', border: '1px solid gray', margin: '4px' }}>Mombasa</li>
        <li style={{ padding: '8px', border: '1px solid gray', margin: '4px' }}>Kisumu</li>
      </ul>
    </main>
  );
}


  