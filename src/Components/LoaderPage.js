import Loader from "react-loader-spinner";

export default function LoaderPage() {
  return (
    <div className="loader-page">
      <Loader
        type="Oval"
        color="#00BFFF"
        height={50}
        width={50}
        visible={true}
      />
    </div>
  );
}
