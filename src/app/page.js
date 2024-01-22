'use client';
import LandingPage from './home/page';
import RepoPage from './repos/page';
import { Button } from '@carbon/react';
export default function Page() {
  return (
    <div>
      <Button>Button</Button>
      <LandingPage />
      <RepoPage />
    </div>
  );
}
