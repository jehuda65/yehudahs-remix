export default function Index() {
  return (
    <>
      <head>
        <title>PE safe</title>
      </head>
      <body>
        <Disclosure as="nav" className="bg-gray-800">
          {({ open }) => (
            <>
              <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                  <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                    {/* Mobile menu button*/}
                    <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                      <span className="sr-only">Open main menu</span>
                      {open ? (
                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                      ) : (
                        <MenuIcon
                          className="block h-6 w-6"
                          aria-hidden="true"
                        />
                      )}
                    </Disclosure.Button>
                  </div>
                  <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                    <div className="flex-shrink-0 flex items-center">
                      <img
                        className="block lg:hidden h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                        alt="Workflow"
                      />
                      <img
                        className="hidden lg:block h-8 w-auto"
                        src="https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg"
                        alt="Workflow"
                      />
                    </div>
                    <div className="hidden sm:block sm:ml-6">
                      <div className="flex space-x-4">
                        {navigation.map((item) => (
                          <a
                            key={item.name}
                            href={item.href}
                            className={classNames(
                              item.current
                                ? "bg-gray-900 text-white"
                                : "text-gray-300 hover:bg-gray-700 hover:text-white",
                              "px-3 py-2 rounded-md text-sm font-medium"
                            )}
                            aria-current={item.current ? "page" : undefined}
                          >
                            {item.name}
                          </a>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                    <button
                      type="button"
                      className="bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                    >
                      <span className="sr-only">View notifications</span>
                      <BellIcon className="h-6 w-6" aria-hidden="true" />
                    </button>

                    {/* Profile dropdown */}
                    <Menu as="div" className="ml-3 relative">
                      <div>
                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                          <span className="sr-only">Open user menu</span>
                          <img
                            className="h-8 w-8 rounded-full"
                            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                            alt=""
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Your Profile
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Settings
                              </a>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href="/"
                                className={classNames(
                                  active ? "bg-gray-100" : "",
                                  "block px-4 py-2 text-sm text-gray-700"
                                )}
                              >
                                Sign out
                              </a>
                            )}
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                </div>
              </div>

              <Disclosure.Panel className="sm:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1">
                  {navigation.map((item) => (
                    <Disclosure.Button
                      key={item.name}
                      as="a"
                      href={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "block px-3 py-2 rounded-md text-base font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Disclosure.Button>
                  ))}
                </div>
              </Disclosure.Panel>
            </>
          )}
        </Disclosure>

        {/* <title>PE safe</title> */}
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
            <h1 className="absolute text-9xl m-28 mt-60 font-mono">
              Secure IT
            </h1>
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
              harnessing cyber security for business continuity and digital
              asset protection
            </p>
            <button className="border-2 rounded-md w-36 m-7 px-4 py-2 text-green-500 bg-cyan-900 font-mono">
              Consultancy
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
              Secure IT services and ongoing maintenance reduces the likelihood
              of an IT service or digital asset attack
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
              Where IT and knowledge assets are protected in a controlled way,
              to support the way your business functions and uses IT.
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
      </body>
    </>
  );
}
