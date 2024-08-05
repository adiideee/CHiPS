import React from 'react';

const Dashboard = () => {
  return (
    <div className="flex h-screen">
      <nav className="w-1/6 bg-[#012366] text-white p-4">
        <ul className="space-y-4">
          <li className="font-bold text-lg">Welcome to CH𝓲PS GIS!</li>
          <li className="hover:bg-white hover:text-[#012366] p-2 rounded-md">Option 1</li>
          <li className="hover:bg-white hover:text-[#012366] p-2 rounded-md">Option 2</li>
          <li className="hover:bg-white hover:text-[#012366] p-2 rounded-md">Option 3</li>
          <li className="hover:bg-white hover:text-[#012366] p-2 rounded-md">Logout</li>
        </ul>
      </nav>

      <div className="w-5/6 p-4 bg-gray-100">
        <div className="grid grid-cols-3 gap-12 m-2">
          <a href='#'>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:border hover:border-[#012366] hover:shadow-gray-900">
            <h2 className="text-xl text-[#012366] font-bold mb-2">Card 1</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          </a>

          <a href='#'>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:border hover:border-[#012366] hover:shadow-gray-900">
            <h2 className="text-xl text-[#012366] font-bold mb-2">Card 2</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          </a>

          <a href='#'>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:border hover:border-[#012366] hover:shadow-gray-900">
            <h2 className="text-xl text-[#012366] font-bold mb-2">Card 3</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          </a>

          <a href='#'>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:border hover:border-[#012366] hover:shadow-gray-900">
            <h2 className="text-xl text-[#012366] font-bold mb-2">Card 4</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          </a>

          <a href='#'>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:border hover:border-[#012366] hover:shadow-gray-900">
            <h2 className="text-xl text-[#012366] font-bold mb-2">Card 5</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          </a>

          <a href='#'>
          <div className="bg-white p-6 rounded-lg shadow-lg hover:border hover:border-[#012366] hover:shadow-gray-900">
            <h2 className="text-xl text-[#012366] font-bold mb-2">Card 6</h2>
            <p className="text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          </a>

        </div>
      </div>
    </div>
  );
};

export default Dashboard;
