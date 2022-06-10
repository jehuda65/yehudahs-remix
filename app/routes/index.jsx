export default function Index() {
  return (
    <>
      <div className="bg-gradient-to-r from-white to-sky-600 h-30 p-10 text-center">
        <h1>Welcome to PE safe</h1>
        <div className="text-orange-500">navbar </div>
      </div>

      <div className="text-blue-200 h-100 p-20 text-center">
        <video
          autoPlay
          muted
          loop
          src="/public/img/background.mp4"
          id="myvideo"
          type="video/mp4"
        ></video>
      </div>

      <div className="md:columns-2">
        <div className="w-full bg-white p-10">
          <p>
            PE safe is an integrated IT solution provider and consultancy
            harnessing cyber security for business continuity and digital asset
            protection
          </p>
          <button>Consultancy</button>
          <button>Infrastructure</button>
          <button>DevOps</button>
          <button>AI/ML</button>
        </div>
        <div id="x" className="w-full bg-orange-200">
          <img src="img/cloud.png" alt="lock"/>
        </div>
      </div>

      <div>
      <video autoplay muted loop id="myVideo">
  <source src="/public/img/background.mp4" type="video/mp4">
</video>
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
          <img src="/app/img/chess.jpeg" alt="chess" />
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
    </>
  );
}
