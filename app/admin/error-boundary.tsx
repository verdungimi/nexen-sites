"use client";

import { Component, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export default class AdminErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: any) {
    console.error("Admin Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-[#0a0a0a] flex items-center justify-center p-4">
          <div className="bg-[#0F1620] border border-red-700 rounded-lg p-8 max-w-md">
            <h2 className="text-2xl font-bold text-red-400 mb-4">Hiba történt</h2>
            <p className="text-[#A8B3C7] mb-4">
              {this.state.error?.message || "Ismeretlen hiba történt az admin panelben."}
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false, error: null });
                window.location.reload();
              }}
              className="bg-gradient-to-r from-[#50AEDF] to-[#7C5CFF] hover:from-[#4098cc] hover:to-[#6b4dd1] text-white font-semibold px-6 py-3 rounded-lg transition-all"
            >
              Oldal Újratöltése
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
