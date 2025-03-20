export default function Paginatinon({ next, back }) {
  return (
    <>
      <button onClick={back}>Back</button>
      <button onClick={next}>Next</button>
    </>
  );
}
