import Image from "next/image";

const Loading = () => {
  return (
    <div className="flex items-center justify-center">
      <Image
        src="spinner.svg"
        alt="bean-eater"
        width={24 * 16}
        height={24 * 16}
      />
    </div>
  );
};

export default Loading;
