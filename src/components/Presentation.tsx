export default function Presentation() {
  return (
    <section className="bg-[#F5F5F3] py-24">
      <div className="mx-auto max-w-[1700px] px-6">
        <div className="overflow-hidden rounded-2xl bg-white shadow-2xl">
          <iframe
            src="/pdf/presentation.pdf"
            title="Nexis Presentation"
            className="h-[1000px] w-full border-0"
          />
        </div>
      </div>
    </section>
  )
}