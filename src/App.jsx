import SignUpForm from "./components/SignUpForm";

const App = () => {
  return (
    <div className="container min-h-screen flex max-lg:flex-col items-center justify-center gap-10 py-2">
      <div className="text-white lg:flex-1 max-lg:text-center">
        <h1 className="max-lg:text-3xl text-5xl xl:text-6xl font-bold">
          Learn to code by <br /> watching others
        </h1>
        <p className="mt-6 max-w-[700px]">
          See how experienced developers solve problems in real-time. Watching
          scripted tutorials is great, but understanding how developers think is
          invaluable.
        </p>
      </div>
      <div className="lg:flex-1 w-full">
        <div className="p-5 bg-blue rounded-lg font-bold text-gray-100 text-center mb-5">
          {" "}
          <span className="text-white">Try it free for 7 days</span> then
          $20/mo. thereafter{" "}
        </div>
        <SignUpForm />
      </div>
    </div>
  );
};

export default App;
