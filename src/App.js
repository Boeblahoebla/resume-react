// Imports
//////////

// Dependencies
import React, {useEffect, useState} from 'react';
import Axios from 'axios';

// Components
import Spinner from './components/Spinner';
import Header from './components/header/Header';
import ResumeContent from './components/resumeContent/ResumeContent';

// Styling
import './css/style.css';


// Component
////////////

function App() {
    // State
    const [resumeData, setResumeData] = useState(null);
    const [isLoading, setIsLoading] = useState(true);

    // Effect hook to fetch the data on mount
    useEffect(() => {
        Axios.get("https://api.myjson.com/bins/1dmump")
            .then(res => {
                console.log(res.data);
                setResumeData(res.data);
                setIsLoading(false);
            }).catch(err => {
            console.log("there was an error: " + err);
        })
    }, []);

    // Initialize & Generate the content
    let content;
    if (isLoading) {
        content = <Spinner />
    } else {
        content = (
            <div>
                <Header />
                <ResumeContent resumeData={resumeData}/>
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
