import React from 'react';

/**
 * Props interface for the SportDetails component.
 */
interface PropsType {
  totalEvents: number; // The total number of events for the sport.
  sport: string; // The name of the sport.
}

/**
 * SportDetails component represents details about a sport.
 * @param totalEvents The total number of events for the sport.
 * @param sport The name of the sport.
 * @returns JSX element representing the SportDetails component.
 */
export default function SportDetails({ sport, totalEvents }: PropsType): React.JSX.Element {
  // Render details about the sport
  return (
    <div className="bg-[#F7F7F8] dark:bg-[#292B32] flex p-2">
      {/* Render total number of events */}
      <div className="w-1/2">
        <h3 className="text-[12px] text-[#525965] dark:text-[#DFDFDF]">Total Events</h3>
        <h3 className="text-[14px] font-medium">
          {totalEvents} Events
        </h3>
      </div>
      {/* Render the sport name */}
      <div>
        <h3 className="text-[12px] text-[#525965] dark:text-[#DFDFDF]">Sport</h3>
        <h3 className="text-[14px] font-medium">{sport}</h3>
      </div>
    </div>
  );
}
