import React from 'react';

/**
 * Props for the CollectionButton component.
 */
interface PropsType {
  title: string;
}

/**
 * CollectionButton component renders a button for a collection.
 * @component
 * @param props - The props of the component.
 * @returns React.JSX.Element - The rendered component.
 */
export default function CollectionButton({ title }: PropsType): React.JSX.Element {
  return (
    <h3 className='bg-[#1D1D1F] text-white p-3 text-[13px] font-medium text-center'>
      {title} Collection
    </h3>
  );
}
