import React, { useState } from 'react';
import { useDrag } from 'react-dnd';

import { Container, Module } from './styles';

interface Props {
  content: string
}

const TextModule: React.FC<Props> = ({ content }) => {
  const [{ isDragging }, dragRef] = useDrag({
    item: { type: 'MODULE' },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });

  const [isEditing, setIsEditing] = useState(false);

  return (
    <Container>
      <Module ref={dragRef} isDragging={isDragging}>
        {isEditing ?
          (
            <input type='text' value={content} onBlur={() => { setIsEditing(false) }} />
          ) :
          (
            <span onClick={() => { setIsEditing(true) }}>
              {content}
            </span>
          )
        }
      </Module>
    </Container>
  );
}

export default TextModule;