import React, { Component } from 'react';

/**
 * Simple error boundary to catch rendering errors in the app.
 * Displays the error message and stack trace so we can diagnose the issue.
 */
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render shows the fallback UI.
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log error details to an external service here.
    this.setState({ errorInfo });
    console.error('ErrorBoundary caught an error', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI with error details.
      return (
        <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
          <h2 style={{ color: 'red' }}>Something went wrong.</h2>
          <details style={{ whiteSpace: 'pre-wrap' }} open>
            <summary>{this.state.error && this.state.error.toString()}</summary>
            {this.state.errorInfo && this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }
    // Normal rendering.
    return this.props.children;
  }
}

export default ErrorBoundary;
