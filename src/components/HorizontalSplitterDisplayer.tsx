import React from 'react';
import { HorizontalSplitter } from '../models/model';
import DynamicDisplayer from './DynamicDisplayer';
function HorizontalSplitterDisplayer({
  elements,
  elementKey,
}: HorizontalSplitter) {
  const renderedSplit = elements.map((element) => {
    return <DynamicDisplayer key={element.elementKey} {...element} />;
  });
  return (
    <div className="horizontalSplitter__container" key={elementKey}>
      {renderedSplit}
    </div>
  );
}

export default HorizontalSplitterDisplayer;
