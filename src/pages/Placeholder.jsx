import React from 'react';

export default function Placeholder({ title }) {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-secondary-900 mb-4">{title}</h1>
        <p className="text-secondary-500">This page is under construction.</p>
      </div>
    </div>
  );
}
