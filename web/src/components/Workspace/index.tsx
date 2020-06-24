import React, { useState } from 'react';
import { FiPlusCircle } from 'react-icons/fi';

import { Container, AddModuleButton } from './styles';

import EditInPlaceComponent from '../EditInPlace';

const Workspace: React.FC = () => {
  const [modules, setModules] = useState<string[]>([]);

  const addNewModule = () => {
    setModules([...modules, 'aa'])
  };

  return (
    <Container>
      {modules.map((module, index) => {
        return (
          <EditInPlaceComponent key={index} content={module} />
        );
      })}
      <AddModuleButton onClick={addNewModule}>
        <FiPlusCircle size='30rem' color='#7371FC' />
      </AddModuleButton>
    </Container>
  );
}

export default Workspace;