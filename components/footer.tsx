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
          <div className="flex flex-col gap-8 pt-6 md:pt-8 border-t border-primary-foreground/20">
            <div>
              <h3 className="text-sm font-medium mb-2 uppercase tracking-wide opacity-90">
                Links
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/Richieparrish"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 text-xl md:text-2xl font-light overflow-hidden"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-primary-foreground">
                    GitHub
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary-foreground scale-x-0 origin-right transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-left" />
                  <span className="sr-only">Visit GitHub</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-primary-foreground"
                  >
                    <path
                      d="M1 11L11 1M11 1H3M11 1V9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/richard-adenigba-8432733a2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center gap-2 text-xl md:text-2xl font-light overflow-hidden"
                >
                  <span className="relative z-10 transition-colors duration-300 group-hover:text-primary-foreground">
                    LinkedIn
                  </span>
                  <span className="absolute bottom-0 left-0 w-full h-[1px] bg-primary-foreground scale-x-0 origin-right transition-transform duration-500 ease-out group-hover:scale-x-100 group-hover:origin-left" />
                  <span className="sr-only">Visit LinkedIn</span>
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 12 12"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-0 -translate-x-2 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 text-primary-foreground"
                  >
                    <path
                      d="M1 11L11 1M11 1H3M11 1V9"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
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
