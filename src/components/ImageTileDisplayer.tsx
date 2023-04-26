import React from 'react';
import { ImageTile } from '../models/model';

function ImageTileDisplayer({ elementKey, source, title }: ImageTile) {
  return (
    <div className="imageTile__container">
      <img
        className="imageTile__tile"
        key={elementKey}
        id={elementKey}
        src={source}
        alt={title}
      />
    </div>
  );
}
export default ImageTileDisplayer;
