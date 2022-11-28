import React from 'react';
import { Button } from '../../../common/components/button/Button';

export const Dashboard = React.memo(() => {

  const onClickTest = () => {
    alert("Hello!");
  }

  return (
    <div>
      <p>Manage Vehicles Dashboard</p>
      <Button color={"primary"} onClick={onClickTest}>Create New</Button>
    </div>
  );
});
