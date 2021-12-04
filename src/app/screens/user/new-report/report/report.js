import React from 'react';
import ReportView from './report.view';

class Report extends React.Component {

  render() {
    const {
      crime,
      occurrence,
      suspects,
      transport,
      meansUsed,
      affected,
      handleChange,
      crimes,
      transports,
      means,
      affectations,
      crimeError,
      occurrenceError,
      suspectsError,
      transportError,
      meansUsedError,
      affectedError
    } = this.props;
    return (
      <ReportView
        crime={crime}
        occurrence={occurrence}
        suspects={suspects}
        transport={transport}
        meansUsed={meansUsed}
        affected={affected}
        handleChange={handleChange}
        crimes={crimes}
        transports={transports}
        means={means}
        affectations={affectations}
        crimeError={crimeError}
        occurrenceError={occurrenceError}
        suspectsError={suspectsError}
        transportError={transportError}
        meansUsedError={meansUsedError}
        affectedError={affectedError}
      />
    );
  }
}

export default Report;
