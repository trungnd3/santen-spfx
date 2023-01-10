import * as React from 'react';

import CorporateList from '../../components/Corporate/CorporateList';
import CorporateInformation from '../../components/Corporate/CorporateInformation';
import RegionList from '../../components/Region/RegionList';
import FunctionList from '../../components/Function/FunctionList';
import ToolLink from '../../components/ToolLink/ToolLink';
import Comments from '../../components/Comment/Comments';
import TimeZone from '../../components/TimeZone/TimeZone';

interface ILandingProps {}

const Landing: React.FC<ILandingProps> = () => {
  return (
    <React.Fragment>
      <div>
        <CorporateList />
        <RegionList />
        <FunctionList />
        <ToolLink />
        <CorporateInformation />
        <Comments />
        <TimeZone />
      </div>
    </React.Fragment>
  );
};

export default Landing;
