import React, { useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';

import { Container, Module, AddModuleButton } from './styles';

interface ModuleProps {
  type: String,
  content: String,
  color: String,
}

const Workspace: React.FC = () => {
  const [modules, setModules] = useState<ModuleProps[]>([]);

  const addNewModule = () => {
    setModules([...modules, {
      type: 'simple-text',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem tempore officia rerum amet modi dolor! Quas, veniam inventore repellat repellendus a mollitia maiores eveniet fuga voluptates atque error eos repudiandae.',
      color: '#7371FC',
    }])
  };

  return (
    <Container>
      {modules.map((module, index) => {
        return (
          <Module key={index}>
            {module.content}
          </Module>
        );
      })}
      <AddModuleButton onClick={addNewModule}>
        <FiPlusCircle size='30rem' color='#7371FC' />
      </AddModuleButton>
    </Container>
  );
}

export default Workspace;