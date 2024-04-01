import React from 'react';
import { Bars } from 'react-loader-spinner';

/**
 * Loading component represents a loading indicator.
 * @returns JSX element representing the Loading component.
 */
export default function Loading(): React.JSX.Element {
  // Render the loading indicator centered vertically and horizontally
  return (
    <div className="h-[40rem] flex items-center justify-center">
      {/* Render the Bars loading spinner */}
      <Bars height={32} color="#738FFF" />
    </div>
  );
}
