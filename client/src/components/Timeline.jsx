import React from 'react'
import { CircleHelp } from 'lucide-react';
import { Chrono } from 'react-chrono';

const Timeline = () => {

  const items = [
    {
      title: "January 2022",
      cardTitle: "Event 1",
      cardSubtitle: "Event 1 Subtitle",
      cardDetailedText: "This is the first event on the timeline.",
    },
    {
      title: "February 2022",
      cardTitle: "Event 2",
      cardSubtitle: "Event 2 Subtitle",
      cardDetailedText: "This is the second event on the timeline.",
    },
    {
      title: "March 2022",
      cardTitle: "Event 3",
      cardSubtitle: "Event 3 Subtitle",
      cardDetailedText: "This is the third event on the timeline.",
    }
  ];


  return (
    <section className='w-full bg-black'>
      <Chrono
        items={items}
        mode="HORIZONTAL"
        itemWidth={150}
        showSingle
        disableToolbar
        showAllCardsHorizontal
      />
      
    </section>
  )
}

export default Timeline