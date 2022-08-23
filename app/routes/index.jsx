// In remix you add all the stuff you want inside the <head> tag here like this:
// https://remix.run/docs/en/v1/guides/migrating-react-router-app#rendering-components-in-head
export let meta = {
  title: "PE Safe",
};

export default function Index() {
  // Create a function:
  function changeWordToUpperCase(word) {
    return word.toUpperCase();
  }

  return (
    // Because remix already uses a body tag, you don't need it here.
    // Look at /app/root.jsx it uses an <Outlet /> tag, which this replaces that by.
    // Speak to me if you want a deeper explanation.
    // Read this: https://remix.run/docs/en/v1/guides/routing
    
{/* <<<<<<< HEAD */}

  
  

        <div className="flex bg-gradient-to-r from-white to-sky-600 p-10 justify-center items-center h-24">
          <img className="h-24" src="img/logo.png" alt="logo" />
          <div className="w-36"></div>
          <div className="w-36"></div>
          <div className="mx-20 flex space-x-14">
            <a
              className="mt-4 hover:bg-emerald-300 rounded px-2 py-1 transition-all"
              href="/"
            >
              home
            </a>
            <a
              className="mt-4 hover:bg-emerald-300 rounded px-2 py-1 transition-all"
              href="/"
            >
              our services
            </a>
            <a
              className="mt-4 hover:bg-emerald-300 rounded px-2 py-1 transition-all"
              href="/"
            >
              about us
            </a>
            <a
              className="mt-4 hover:bg-emerald-300 rounded px-2 py-1 transition-all"
              href="/"
            >
              our team
            </a>
            <a
              className="mt-4 hover:bg-emerald-300 rounded px-2 py-1 transition-all"
              href="/"
            >
              contact us
            </a>
          </div>
          </div>

      <div className="flex bg-gradient-to-r from-white to-sky-600 p-10 justify-center items-center h-24">
        <img className="h-24" src="img/logo.png" alt="logo" />
        <div className="w-36"></div>
        <div className="w-36"></div>
        <div className="mx-20 flex space-x-14">
          <a
            className="mt-4 hover:bg-emerald-300 rounded px-2 py-1 transition-all"
            href="/"
          >
            home
          </a>
          <a
            className="mt-4 hover:bg-emerald-300 rounded px-2 py-1 transition-all"
            href="/"
          >
            our services
          </a>
          <a
            className="mt-4 hover:bg-emerald-300 rounded px-2 py-1 transition-all"
            href="/"
          >
            about us
          </a>
          <a
            className="mt-4 hover:bg-emerald-300 rounded px-2 py-1 transition-all"
            href="/"
          >
            our team
          </a>
          <a
            className="mt-4 hover:bg-emerald-300 rounded px-2 py-1 transition-all"
            href="/"
          >
            contact us
          </a>

        </div>
        </div>
       
       
     

      <div className="text-white flex w-max bg-slate-500">
        <div id="x1">
          <h1 className="absolute text-9xl m-28 mt-60 font-mono">Secure IT</h1>
          <h3 className="absolute text-4xl mt-96 ml-28 text-emerald-500 italic font-bold">
            USE US TO SECURE ALL OF YOUR ONLINE ASSETS
          </h3>
          <video
            className="w-screen bg-no-repeat bg-cover"
            autoPlay
            muted
            loop
            src="img/background.mp4"
            alt="vid"
          />
        </div>
      </div>
      <div className="md:columns-2">
        <div className="w-full bg-white p-10 h-">
          <p>
            PE safe is an integrated IT solution provider and consultancy
            harnessing cyber security for business continuity and digital asset
            protection
          </p>
          <button className="border-2 rounded-md w-36 m-7 px-4 py-2 text-green-500 bg-cyan-900 font-mono">
            {/* Here we call the function: remember to use javascript inside your html 
                you have to use curly braces {}
              */}
            {changeWordToUpperCase("Consultancy")}
          </button>
          <button className="border-2 rounded-md w-36 m-7 px-2 py-2 text-green-500 bg-cyan-900 font-mono">
            Infrastructure
          </button>
          <button className="border-2 rounded-md w-36 m-7 px-4 py-2 text-green-500 bg-cyan-900 font-mono">
            DevOps
          </button>
          <button className="border-2 rounded-md w-36 m-7 px-4 py-2 text-green-500 bg-cyan-900 font-mono">
            AI/ML
          </button>
        </div>
        <div id="x" className="hidden md:block">
          <img src="img/cloud.png" alt="lock" />
        </div>
      </div>

      <div className="bg-cyan-900 text-white p-10">
        <h2 className="text-center">Securing IT and Knowledge assets</h2>
        <div className="columns-3 text-green-500">
          <div className="p-4 ">
            <p>Peace of mind</p>
          </div>
          <div>
            <p>Reduced downtime</p>
          </div>
          <div>
            <p>Faster deployment of software</p>
          </div>
        </div>
        <ol className="text-center">
          <li>Customers trust your brand with their data</li>
          <li>
            Secure IT services and ongoing maintenance reduces the likelihood of
            an IT service or digital asset attack
          </li>
          <li>
            Peace of mind – you are in good hands with PESafe so you can focus
            on your business
          </li>
        </ol>
      </div>

      <div className="columns-2">
        <div>
          <h2>A CLEAR HOLISTIC BUSINESS-LED APPROACH</h2>
          <p>
            Where IT and knowledge assets are protected in a controlled way, to
            support the way your business functions and uses IT.
          </p>
        </div>
        <div>
          <img src="img/chess.jpeg" alt="chess" />
        </div>
      </div>

      <div className="bg-sky-600">
        <h2>Secure IT Across the Enterprise</h2>
        <p>
          <em>We protect your assets in 4 areas:</em>
        </p>
        <div className="columns-2">
          <div>
            <p>Hardware</p>
            <p>Security processes and auditing</p>
          </div>
          <div>
            <p>software</p>
            <p>security training</p>
          </div>
          <div></div>
        </div>
      </div>
      
  );
}
