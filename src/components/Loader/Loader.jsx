import { ThreeDots } from 'react-loader-spinner';
import React from 'react';

function Loader() {
  return (
    <>
      <ThreeDots
        height="200"
        width="224"
        radius="9"
        color="#4fa94d"
        ariaLabel="three-dots-loading"
        wrapperStyle={{}}
        wrapperClassName=""
        visible={true}
      />
      ;
    </>
  );
}

export default Loader;
