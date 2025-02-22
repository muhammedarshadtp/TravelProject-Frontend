import React from "react";

const Output = ({name,email}) => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center text-center">
      <h2 className="text-3xl font-semibold mb-4">Output Section</h2>
      <div className="bg-gray-100 p-6 rounded-lg shadow-md w-full max-w-md">
        <p className="text-lg mb-2"><strong>Name:</strong> {name}</p>
        <p className="text-lg"><strong>Email:</strong> {email}</p>
      </div>
    </div>
  );
};

export default Output;
