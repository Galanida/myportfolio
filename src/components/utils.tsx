export const Preloader = (
  load: boolean
): object | undefined=> {
  if (load) {
    return <div id={load ? "preloader" : "preloader-none"}></div>;
  }
};