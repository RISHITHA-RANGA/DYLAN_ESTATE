/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PropertyForm from './components/PropertyForm';
import PropertyPreview from './components/PropertyPreview';

const App = () => {
    return (
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={<PropertyForm />} />
                    <Route path="/preview" element={<PropertyPreview />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;*/
// src/App.js
// src/App.js

// src/App.js
/*import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import PropertyForm from './components/PropertyForm';
import PropertyPreview from './components/PropertyPreview';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/property-form" element={<ProtectedRoute><PropertyForm /></ProtectedRoute>} />
                    <Route path="/preview" element={<ProtectedRoute><PropertyPreview /></ProtectedRoute>} />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default App;
*/
// src/App.js
// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import Login from './components/Login';
import SignUp from './components/SignUp';
import PropertyForm from './components/PropertyForm';
import PropertyPreview from './components/PropertyPreview';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
    return (
        <Router>
            <AuthProvider>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/property-form" element={<ProtectedRoute><PropertyForm /></ProtectedRoute>} />
                    <Route path="/preview" element={<ProtectedRoute><PropertyPreview /></ProtectedRoute>} />
                </Routes>
            </AuthProvider>
        </Router>
    );
};

export default App;

