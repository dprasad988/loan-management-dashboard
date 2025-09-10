import React from 'react';
import BorrowerPipeline from './borrowerPipeline/BorrowerPipeline';
import BorrowerDetails from './borrowerDetails/BorrowerDetails';
import BrokerOverview from './brokerOverview/BrokerOverview';

const Dashboard: React.FC = () => {
    return (
        <div className="w-full p-4">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 sm:grid-cols-1">

                    <div className="rounded-lg md:col-span-3">
                        <BorrowerPipeline/>
                    </div>

                    <div className="rounded-lg md:col-span-6">
                        <BorrowerDetails/>
                    </div>

                    <div className="rounded-lg md:col-span-3">
                        <BrokerOverview/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
