// interface Card {
//   // exam view
//   ExamName: string;
//   Year: number | null;
//   Section: number | null;
// }

export function ClassCard() {
  return (
    <div className="w-full text-white h-12 flex justify-between items-center p-6 mb-2 border border-white/10 bg-white/10">
      <p>1</p>
      <h1>Class name</h1>
      <p>Semester</p>
      <p>total Students</p>
    </div>
  );
}
