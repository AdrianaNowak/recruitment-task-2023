import React from 'react';
import ButtonTileDisplayer from './ButtonTileDisplayer';
import { Element } from '../models/model';
import VerticalSplitterDisplayer from './VerticalSplitterDisplayer';
import HorizontalSplitterDisplayer from './HorizontalSplitterDisplayer';
import ImageTileDisplayer from './ImageTileDisplayer';
import TextTileDisplayer from './TextTileDisplayer';

const tileTypes = {
  verticalSplitter: VerticalSplitterDisplayer,
  horizontalSplitter: HorizontalSplitterDisplayer,
  buttonTile: ButtonTileDisplayer,
  imageTile: ImageTileDisplayer,
  textTile: TextTileDisplayer,
};

function DynamicDisplayer(element: Element) {
  return React.createElement(tileTypes[element.type], element);
}

export default DynamicDisplayer;
