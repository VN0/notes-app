import React from 'react';
import { Helmet } from 'react-helmet-async';

export default function Home() {
  return (
    <React.Fragment>
      <Helmet
        title="Notes App"
        meta={[{
          name: 'description',
          content: "Rapidly capture ideas, checklists, and more with the Notes App by Cody B.",
        }]}
      />
    </React.Fragment>
  );
}
