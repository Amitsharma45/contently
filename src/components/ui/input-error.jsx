import React from "react";

const InputError = ({ message }) => {
  return (
    <React.Fragment>
      {!!message && (
        <p className="block text-xs font-medium text-red-600 ml-1">{message}</p>
      )}
    </React.Fragment>
  );
};

export default InputError;
