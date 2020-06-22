import React, { Component } from 'react';
import { LoadingFailure } from './loading/loading.component';

type ErrorBoundaryProps = {};

type ErrorBoundaryState = {
  hasError: boolean;
};

const failureRender = () => <LoadingFailure />;

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return failureRender();
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
