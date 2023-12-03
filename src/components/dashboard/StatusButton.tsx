const StatusButton = ({ name }: { name: string }) => {
  const background =
    name === "Live Now" ? "#E1FFE0" : name === "Paused" ? "#FFF8E0" : "#FFDEDE";
  const textColor =
    name === "Live Now" ? "#317C2E" : name === "Paused" ? "#D1A307" : "#FC3F3F";
  return (
    <div>
      <p
        style={{
          backgroundColor: background,
          color: textColor,
        }}
        className="px-3 py-1.5 text-sm rounded-full font-medium"
      >
        {name}
      </p>
    </div>
  );
};

export default StatusButton;
