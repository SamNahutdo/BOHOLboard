import svgPaths from "./svg-gpf016jr51";

function Group() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] not-italic place-items-start relative shrink-0 text-[#219653] whitespace-nowrap">
      <div className="col-1 flex flex-col font-['Poppins:Medium',sans-serif] justify-center ml-0 mt-[38px] relative row-1 text-[18px]">
        <p className="leading-none">Wait for the confirmation</p>
      </div>
      <div className="col-1 flex flex-col font-['Poppins:Bold',sans-serif] justify-center ml-px mt-0 relative row-1 text-[30px]">
        <p className="leading-none">Success</p>
      </div>
    </div>
  );
}

export default function SuccessRent() {
  return (
    <div className="bg-[#c9eed9] content-stretch flex gap-[21px] items-center px-[21px] py-[40px] relative rounded-[10px] size-full" data-name="success-rent">
      <div className="relative shrink-0 size-[30px]" data-name="Vector">
        <svg className="absolute block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 30 30">
          <path d={svgPaths.p20f4da00} fill="var(--fill-0, #219653)" id="Vector" />
        </svg>
      </div>
      <Group />
    </div>
  );
}