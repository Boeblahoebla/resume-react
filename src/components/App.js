// Imports
//////////

// Dependencies
import React from 'react';

// Components
import Spinner from './common/Spinner';
import PageHeader from './header/PageHeader';
import ResumeContent from './resumeContent/ResumeContent';

// Hooks
import { useHttpRequest } from '../hooks/HttpRequest';

// Styling
import '../css/style.css';


// Component
////////////

function App() {
    // Hook to fetch the data on mount
    const [isLoading, fetchedData] =
        useHttpRequest('https://api.myjson.com/bins/1c10gd', []);

    // Initialize & Generate the content
    let content;
    if (isLoading || !fetchedData) {
        content = <Spinner />
    } else {
        content = (
            <div>
                <PageHeader />
                <ResumeContent resumeData={fetchedData}/>
            </div>
        )
    }

    return (
        <div className="container-fluid">
            { content }
        </div>
    );
}


// Export
/////////

export default App;
