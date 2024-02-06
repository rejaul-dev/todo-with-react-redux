import { ReactNode } from "react";

const Wrapper = ({ children }: { children: ReactNode }) => {
  return (
    <section className="h-screen w-full max-w-screen-lg mx-auto px-4 md:px-0">
      {children}
    </section>
  );
};

export default Wrapper;
