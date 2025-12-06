import React from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md">
                    <div className="bg-white dark:bg-zinc-800 p-8 rounded-2xl max-w-md text-center">
                        <h2 className="text-xl font-bold mb-4 text-red-500">Something went wrong.</h2>
                        <p className="opacity-70 mb-6">Unable to load project details.</p>
                        <button
                            onClick={() => {
                                this.setState({ hasError: false });
                                this.props.onClose();
                            }}
                            className="px-4 py-2 bg-indigo-600 text-white rounded-full hover:bg-indigo-700"
                        >
                            Close
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
