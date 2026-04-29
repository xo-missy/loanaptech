import react from 'react'

const Dashboard = () => {
    return (
        <div>
            <h1>Welcome to the Dashboard</h1>
            <p>This is a protected route. Only authenticated users can see this.</p>
        </div>
    );
}

export default Dashboard;