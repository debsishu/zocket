import { Link } from "react-router-dom";

interface IUserInfo {
  name: string;
  image: string;
  isTrial: boolean;
  trialTime: number;
}

const Nav = ({
  userData,
  isLoading,
}: {
  userData: IUserInfo | undefined;
  isLoading: boolean;
}) => {
  return !isLoading && userData ? (
    <div className="flex items-center justify-end bg-white py-4 border border-borders border-b-1 gap-4 px-12">
      {userData.isTrial && (
        <p className="text-sm text-black text-opacity-60">
          Free trial ends in {userData.trialTime} days
        </p>
      )}
      {userData.isTrial && (
        <Link
          className="flex items-center justify-center gap-2 bg-accent-secondary bg-opacity-10 px-2 py-1.5 rounded-md"
          to="/"
        >
          <img src="/icons/nav/crown.svg" />
          <p className="text-sm text-accent-secondary font-medium">Buy Plan</p>
        </Link>
      )}
      <button>
        <img src="/icons/nav/gift.svg" />
      </button>
      <button>
        <img src="/icons/nav/notification.svg" />
      </button>
      <p className="flex items-center justify-center gap-2">
        <img
          className="w-10 h-10 object-cover rounded-full border border-accent-secondary"
          src={userData.image}
        />
        <button className="flex items-center gap-1 text-text-darker text-sm">
          {userData.name}
          <img src="/icons/nav/dropdown.svg" />
        </button>
      </p>
      <button>
        <img src="/icons/nav/change-language.svg" />
      </button>
    </div>
  ) : (
    <div className="flex items-center justify-end bg-white py-6 border border-borders border-b-1 gap-4 px-12">
      <p>Loading nav...</p>
    </div>
  );
};

export default Nav;
