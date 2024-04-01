import React from 'react';
import NavigationBar from '@/containers/navigation-bar'; 
import SportsContainer from '@/containers/sports-container';
import CollectionSpotlight from '../collection-spotlight'; 

/**
 * ComponentShowcase component showcases various containers like NavigationBar, SportsContainer, and CollectionSpotlight.
 * @returns JSX element representing the ComponentShowcase component.
 */
export default function ComponentShowcase(): React.JSX.Element {
  // Render the component showcase containing NavigationBar, SportsContainer, and CollectionSpotlight
  return (
    <div className='w-full h-screen bg-[#F7F7F8] dark:bg-[#292B32]'>
      {/* Render the NavigationBar component */}
      <NavigationBar />
      <div className='bg-gray-100 dark:bg-[#292B32] border-y border-neutral-200 dark:border-neutral-800 py-16 flex flex-col items-center justify-center'>
        {/* Render the SportsContainer component */}
        <SportsContainer />
        {/* Render the CollectionSpotlight component */}
        <CollectionSpotlight />
      </div>
    </div>
  );
}
