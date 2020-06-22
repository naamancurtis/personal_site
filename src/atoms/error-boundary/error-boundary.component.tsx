import React, { Component, ErrorInfo } from 'react';
import { LoadingFailure } from '../loading/loading.component';

type ErrorBoundaryProps = {};

type ErrorBoundaryState = {
  hasError: boolean;
};

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <LoadingFailure />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
