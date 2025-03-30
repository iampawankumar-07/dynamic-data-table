import React from 'react';
import { Loader } from 'lucide-react';

function LoadingView() {
  return (
    <div className="common_outer_container loading_view_outer">
      <Loader color={'grey'} size={'24px'} />

      <div className="mt-10 mb-10">
        <div className="txt">Please wait while we load your details...</div>
      </div>
    </div>
  );
}

export default LoadingView;
