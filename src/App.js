import Container from "@mui/material/Container";

function App() {
  return (
    <Container>
      <p className="text-xl font-bold my-5">Welcome to the Textile 5.0</p>
      <div className="my-5 mx-1">
        <iframe
          className="w-11/12"
          src="https://www.youtube.com/embed/zhfAsnONwdE"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div>
    </Container>
  );
}

export default App;
