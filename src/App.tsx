import React from 'react';

function App() {
  return (
    <div className="min-h-screen bg-background-dark text-white p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-primary mb-8 animate-fade-in">
          Faculty Chat
        </h1>
        <div className="bg-background-lighter rounded-lg p-6 shadow-lg animate-slide-up">
          <p className="text-lg">Welcome to Faculty Chat! Start messaging with your colleagues.</p>
        </div>
      </div>
    </div>
  );
}

export default App;