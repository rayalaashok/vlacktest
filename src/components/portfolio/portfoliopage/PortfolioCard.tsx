export default function PortfolioCard({ item }) {
  return (
    <div className="flex flex-col gap-3">
      <img
        className="border-x-[39px] border-y-[30px] w-[545px] h-[317px] object-contain object-center"
        style={{
          borderImage: `${item.border}`,
        }}
        src={item.img}
        alt="some"
      />
      <h1 className="text-xl font-semibold">{item.title}</h1>
      <p className="text-sm">{item.description}</p>
      <a className="text-sm font-medium" href="">
        {item.view}
      </a>
    </div>
  );
}
