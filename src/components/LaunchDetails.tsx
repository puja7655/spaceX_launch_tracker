import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getLaunches } from '../services/spaceXService';

export interface LaunchDetailsProps {
    launchId?: string;
    name?:string;
    details?: string;
    status?:string;
}

const LaunchDetails: React.FC<LaunchDetailsProps> = ({ launchId }) => {
    const [launch, setLaunch] = useState<any | null>(null);
    const { launchId: paramLaunchId } = useParams<{ launchId: string }>();

    useEffect(() => {
        const fetchLaunch = async () => {
            try {
                const data = await getLaunches();
                const foundLaunch = data.find((launch: any) => launch.id === (launchId || paramLaunchId));
                setLaunch(foundLaunch);
            } catch (error) {
                console.error('Error fetching launch details:', error);
            }
        };

        fetchLaunch();
    }, [launchId, paramLaunchId]);

    if (!launch) {
        return (
            <div className="container mt-4">
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <div className="container mt-4">
            <h2 className="list-group-item-heading">{launch.name}</h2>
            <div className="row">
                <div className="col-md-6">
                    <img src={launch.links.patch.small} alt={launch.name} className="img-fluid" />
                </div>
                <div className="col-md-6">
                    <h4 className="list-group-item-heading">Details</h4>
                    <p>{launch.details}</p>
                    <h4 className="list-group-item-heading">Status</h4>
                    <p>{launch.success ? 'Successful' : 'Failed'}</p>
                    <h4 className="list-group-item-heading">Rocket</h4>
                    <p>{launch.rocket}</p>
                </div>
            </div>
        </div>
    );
};

export default LaunchDetails;
