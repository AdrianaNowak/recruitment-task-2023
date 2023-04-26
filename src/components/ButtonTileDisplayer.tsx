import React, { useEffect, useState } from 'react';
import { Action, ButtonTile } from '../models/model';

function ButtonTileDisplayer({ action, text }: ButtonTile) {
  const [domElement, setDomElement] = useState<null | HTMLElement>(null);

  const handleClick = (action: Action) => {
    if (action?.value?.source) {
      domElement.setAttribute('src', action.value.source);
    } else {
      const propertyName = Object.getOwnPropertyNames(action.value)[0];
      domElement.classList.add(action.value[propertyName]);
    }
  };

  useEffect(() => {
    setDomElement(document.getElementById(action?.referenceElementKey));
  }, []);

  return (
    <button type="button" onClick={() => handleClick(action)}>
      {text}
    </button>
  );
}

export default ButtonTileDisplayer;
