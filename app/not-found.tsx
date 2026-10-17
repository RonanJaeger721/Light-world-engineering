import { Button, PageHero } from "@/components/site";
export default function NotFound() {
  return (
    <>
      <PageHero
        label="404 / Page not found"
        title="Let’s reconnect."
        accent="Find your way back."
        description="This page is unavailable. Explore our engineering solutions or get in touch with the team."
      />
      <div className="wrap section">
        <Button href="/">Back to Light World</Button>
      </div>
    </>
  );
}
