const PlatformInfo = ({ platform }: { platform: string }) => {
  const address =
    platform === "YouTube"
      ? "/icons/dashboard/youtube.svg"
      : platform === "Google"
      ? "/icons/dashboard/google.svg"
      : platform === "FB"
      ? "/icons/dashboard/facebook.svg"
      : "/icons/dashboard/instagram.svg";
  return <img className="w-5 object-cover m-auto" src={address} />;
};

export default PlatformInfo;
