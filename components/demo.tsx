function Demo() {
    return (
      <section id="demo" className="bg-background/5 py-12 md:py-24 lg:py-32">
        <div className="container drop-shadow-2xl ">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-8 text-3xl font-bold tracking-tighter md:text-4xl">
              See BlockOWL in Action
            </h2>
            <div className="overflow-hidden rounded-lg border bg-background shadow-xl multicolor-shadow">
              <div className="aspect-video w-full bg-zinc-950/5">
                <div className="flex h-full items-center justify-center">
                    <video src="/images/demo.mp4" className="w-full h-full" autoPlay loop muted>
                    </video>
                </div>
              </div>
              <div className="p-6 bg-white/5">
                <h3 className="text-xl font-bold">
                  A smooth, responsive, and user-friendly UI
                </h3>
                <p className="mt-2 text-muted-foreground">
                  Our intuitive dashboard gives you a complete overview of your
                  projects, tasks, and team performance at a glance.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
}
export default Demo;