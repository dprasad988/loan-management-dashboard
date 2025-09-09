import React from 'react';
import BorrowerPipeline from './borrowerPipeline/BorrowerPipeline';
import BorrowerDetails from './borrowerDetails/BorrowerDetails';

const Dashboard: React.FC = () => {
    return (
        <div className="w-full p-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

                    <div className="rounded-lg md:col-span-3">
                        <BorrowerPipeline/>
                    </div>

                    <div className="rounded-lg md:col-span-5">
                        <BorrowerDetails/>
                    </div>

                    <div className="bg-red-500 p-4 rounded-lg md:col-span-4">
                        <h2 className="text-white text-xl">Column 3</h2>
                        <p className="text-white">This is the content for the third column.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
