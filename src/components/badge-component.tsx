export interface IBadgeProps {
  key: string;
  label: string;
  classNames: string;
}

export default function Badge({ label, classNames }: Readonly<IBadgeProps>) {
  return <div className={"size-fit rounded-full border" + " " + classNames}>{label}</div>;
}
