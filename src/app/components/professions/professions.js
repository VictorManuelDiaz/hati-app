import React from 'react';
import ProsView from './professions.view';

class Professions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      pros: [
        { label: 'Médico', value: 0 },
        { label: 'Psicólogo', value: 1 },
        { label: 'Abogado', value: 2 }
      ]
    }
  }

  render() {
    const { pros } = this.state;
    const { active, handleActive } = this.props;
    return(
      <ProsView data={pros} active={active} handleActive={handleActive} />
    );
  }
}

export default Professions;
