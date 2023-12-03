import { IAdModel } from "../../pages/ReadyToGo";

const AdCards = ({ ad, isSelected }: { ad: IAdModel; isSelected: boolean }) => {
  return (
    <div>
      <div className="flex items-center gap-3">
        <img
          className="w-10 h-10 object-cover rounded-full"
          src={ad.userImage}
        />
        <div>
          <p className="font-medium text-base text-[#2B23A5]">{ad.name}</p>
          <p className="text-xs text-black text-opacity-40">Sponsored</p>
        </div>
      </div>
      <p className="text-sm mt-3">{ad.desc}</p>
      <div className="mt-3">
        <img className="w-full h-28 object-cover" src={ad.productImage} />
        <div className="flex items-center justify-between p-4 py-2 bg-black bg-opacity-5">
          <p className="text-xs text-[#2B23A5] font-medium">{ad.name}</p>
          <img src="/icons/dashboard/like-btn.svg" />
        </div>
      </div>

      {isSelected && (
        <div className="mt-4 flex items-center justify-between gap-3">
          <button className="w-full py-2 text-sm text-accent bg-accent bg-opacity-[0.06] font-medium rounded-md">
            Change image
          </button>
          <button className="w-full py-2 text-sm text-accent bg-accent bg-opacity-[0.06] font-medium rounded-md">
            Edit text
          </button>
        </div>
      )}
    </div>
  );
};

export default AdCards;
