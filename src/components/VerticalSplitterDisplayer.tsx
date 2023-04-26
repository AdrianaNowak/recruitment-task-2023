import React from 'react';
import { VerticalSplitter } from '../models/model';
import DynamicDisplayer from './DynamicDisplayer';

function VerticalSplitterDisplayer({ elementKey, elements }: VerticalSplitter) {
  const renderedSplit = elements.map((element) => {
    return <DynamicDisplayer key={element.elementKey} {...element} />;
  });
  return (
    <div className="verticalSplitter__container" key={elementKey}>
      {renderedSplit}
    </div>
  );
}

export default VerticalSplitterDisplayer;
