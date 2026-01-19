import { ThemeSwitcher } from "./theme-switcher";

export default function Footer() {
  return (
    <section className="px-6 sm:px-10 md:px-16 py-12 md:py-20 bg-primary text-primary-foreground">
      <div className="w-full">
        <h3 className="text-sm font-medium mb-2 uppercase tracking-wide opacity-90">
          Get in Touch
        </h3>
        <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-light mb-8 md:mb-12 leading-tight">
          Let's discuss opportunities in administration, software development,
          or collaboration.
        </p>

        <div className="space-y-6 md:space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 pt-6 md:pt-8 border-t border-primary-foreground/20">
            <div>
              <p className="text-xs md:text-sm opacity-75 mb-1">Email</p>
              <p className="text-base md:text-lg">richardadenigba2@gmail.com</p>
            </div>
            <div>
              <p className="text-xs md:text-sm opacity-75 mb-1">Phone</p>
              <p className="text-base md:text-lg">+44 (0) 7352 206104</p>
            </div>
            <div>
              <p className="text-xs md:text-sm opacity-75 mb-1">Location</p>
              <p className="text-base md:text-lg">England, UK</p>
            </div>
            <div>
              <p className="text-xs md:text-sm opacity-75 mb-1">Links</p>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Richieparrish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base md:text-lg hover:underline underline-offset-2 transition-all"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/richard-adenigba-8432733a2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base md:text-lg hover:underline underline-offset-2 transition-all"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-end w-full pt-6">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </section>
  );
}
