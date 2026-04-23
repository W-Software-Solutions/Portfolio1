import React from 'react';

export class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null, errorInfo: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught:", error, errorInfo);
        this.setState({ error, errorInfo });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div style={{ padding: '20px', background: '#333', color: 'red', minHeight: '100vh', zIndex: 9999 }}>
                    <h1 style={{ color: 'red' }}>React Crash</h1>
                    <pre>{this.state.error && this.state.error.toString()}</pre>
                    <pre>{this.state.errorInfo && this.state.errorInfo.componentStack}</pre>
                </div>
            );
        }
        return this.props.children;
    }
}
