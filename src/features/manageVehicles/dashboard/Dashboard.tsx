import React from 'react';
import { Button } from '../../../common/components/button/Button';

export const Dashboard = React.memo(() => {
  return (
    <div>
      <p>Manage Vehicles Dashboard</p>
      <Button type={"primary"}>Create New</Button>
    </div>
  );
});
