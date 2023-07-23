export function Projects() {
  return (
    <div className="gap-52 flex-col flex items-center">
      <h1 className="justify-center items-center text-6xl font-bold">Projects</h1>
      <div className="grid grid-cols-2 gap-14">
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
        <Project />
      </div>
    </div>
  );
}

function Project() {
  return (
    <div className="phone-1 artboard artboard-horizontal rounded-3xl bg-slate-500"></div>
  );
}
