import { IBadgeProps } from "@/components/badge-component";

type IBadgeVariants = IBadgeProps[];

const badgeLabel = "Label";

const badgesVariants: IBadgeVariants = [
  {
    key: `${badgeLabel}-default-sm`,
    label: badgeLabel,
    classNames: "badge-sm badge-neutral"
  },
  {
    key: `${badgeLabel}-default-md`,
    label: badgeLabel,
    classNames: "badge-md badge-neutral"
  },
  {
    key: `${badgeLabel}-default-lg`,
    label: badgeLabel,
    classNames: "badge-lg badge-neutral"
  },
  {
    key: `${badgeLabel}-error-sm`,
    label: badgeLabel,
    classNames: "badge-sm badge-error"
  },
  {
    key: `${badgeLabel}-error-md`,
    label: badgeLabel,
    classNames: "badge-md badge-error"
  },
  {
    key: `${badgeLabel}-error-lg`,
    label: badgeLabel,
    classNames: "badge-lg badge-error"
  },
  {
    key: `${badgeLabel}-warning-sm`,
    label: badgeLabel,
    classNames: "badge-sm badge-warning"
  },
  {
    key: `${badgeLabel}-warning-md`,
    label: badgeLabel,
    classNames: "badge-md badge-warning"
  },
  {
    key: `${badgeLabel}-warning-lg`,
    label: badgeLabel,
    classNames: "badge-lg badge-warning"
  },
  {
    key: `${badgeLabel}-info-sm`,
    label: badgeLabel,
    classNames: "badge-sm badge-success"
  },
  {
    key: `${badgeLabel}-info-md`,
    label: badgeLabel,
    classNames: "badge-md badge-success"
  },
  {
    key: `${badgeLabel}-info-lg`,
    label: badgeLabel,
    classNames: "badge-lg badge-success"
  },
  {
    key: `${badgeLabel}-brand-sm`,
    label: badgeLabel,
    classNames: "badge-sm badge-brand"
  },
  {
    key: `${badgeLabel}-brand-md`,
    label: badgeLabel,
    classNames: "badge-md badge-brand"
  },
  {
    key: `${badgeLabel}-brand-lg`,
    label: badgeLabel,
    classNames: "badge-lg badge-brand"
  }
];

export default badgesVariants;
