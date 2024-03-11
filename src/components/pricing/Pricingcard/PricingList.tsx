import PricingListSvg from "./PricingListSvg";
export default function PricingList({ listItem }) {
  return (
    <div className="flex gap-4 pb-2">
      <PricingListSvg />
      <li>{listItem}</li>
    </div>
  );
}
