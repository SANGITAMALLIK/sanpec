import React from 'react';
const TowerTestingLayout = () => {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-8">
      <h2 className="text-3xl font-bold text-gray-800">
        Tower Testing Services
      </h2>

      <p className="text-gray-600 mt-3">
        Comprehensive tower testing solutions to ensure structural integrity
        and compliance with industry standards.
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-6">
        <div className="bg-gray-50 p-5 rounded-xl">
          <h3 className="font-semibold text-blue-700 mb-3">Features</h3>
          <ul className="space-y-2 text-gray-700">
            <li>✔ Full-scale tower testing</li>
            <li>✔ Component level testing</li>
            <li>✔ Fatigue and stress analysis</li>
            <li>✔ Quality assurance protocols</li>
          </ul>
        </div>

        <div className="bg-blue-50 p-5 rounded-xl">
          <h3 className="font-semibold text-blue-700 mb-3">Benefits</h3>
          <ul className="space-y-2 text-gray-700">
            <li>★ Verified structural performance</li>
            <li>★ Risk mitigation</li>
            <li>★ Extended tower lifespan</li>
            <li>★ Standards compliance certification</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TowerTestingLayout;
