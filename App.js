import ImageSlider from "./ImageSlider";
const App = () => {
  const slides = [
    { url: "http://localhost:3000/image1.jpg", title: "beach" },
    { url: "http://localhost:3000/image2.jpg", title: "boat" },
    { url: "http://localhost:3000/image3.jpg", title: "forest" },
  ];
  const containerStyles = {
    width: "500px",
    height: "280px",
    margin: "0 auto",
  };
  return (
    <div>
      <h1>Whiz Geek</h1>
      <div style={containerStyles}>
        <ImageSlider slides={slides} />
      </div>
    </div>
  );
};

export default App;