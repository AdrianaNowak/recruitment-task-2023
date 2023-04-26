import React, { useEffect, useState } from 'react';
import '../style.css';
import DynamicDisplayer from '../components/DynamicDisplayer';
import { ElementsService } from '../services/ElementsService';

export default function App() {
  // load definition here
  const [layoutData, setLayout] = useState(null);

  useEffect(() => {
    ElementsService.get().then((response) => {
      setLayout(response.data);
    });
  }, []);

  return (
    <div className="main">
      <h1>{'Place you components here 👇'}</h1>
      {layoutData && (
        <div className="content">
          <h1>{layoutData.title}</h1>
          <DynamicDisplayer {...layoutData.rootElement} />
        </div>
      )}
    </div>
  );
}
