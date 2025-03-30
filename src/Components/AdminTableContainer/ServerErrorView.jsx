import { Server } from 'lucide-react';
import React from 'react';

function ServerErrorView({ errorMsg }) {
  return (
    <div className="common_outer_container">
      <div className="txt err_msg">{errorMsg}</div>
    </div>
  );
}

export default ServerErrorView;
