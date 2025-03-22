import css from "./Paginatinon.module.css";

export default function Paginatinon({ next, back }) {
  return (
    <div className={css.btns}>
      <button className={css.btn} onClick={back}>
        Back
      </button>
      <button className={css.btn} onClick={next}>
        Next
      </button>
    </div>
  );
}
