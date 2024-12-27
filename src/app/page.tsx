import Badge from "@/components/badge-component";

import badgesVariants from "./badges.data";

export default function Home() {
  return (
    // `<main>` -> this is the "Page body" element in the Figma design
    <main className='gfe-main'>
      <div className='flex w-full max-w-[240px] flex-wrap items-center justify-start gap-6 pl-[10px]'>
        {badgesVariants.map(badge => (
          <Badge
            key={badge.key}
            label={badge.label}
            classNames={badge.classNames}
          />
        ))}
      </div>
    </main>
  );
}
