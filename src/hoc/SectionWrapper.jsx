const SectionWrapper = (Component, componentId) => {
  return function WrappedComponent() {
    return (
      <section id={componentId} className="">
        <Component />
      </section>
    );
  };
};

export default SectionWrapper;
