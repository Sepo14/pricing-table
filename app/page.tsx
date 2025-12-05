import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center text-center">
      <div className="flex flex-col items-center justify-center background bg-gray-100 w-full gap-5 py-10 px-5">
        <h1 className="text-3xl font-bold">Pricing & Plans</h1>
        <h2 className="text-lg text-gray-500 w-[80%] md:w-[60%] lg:w-[40%]">Discover the plan that unlocks the transformative power of digital art and join our vibrant comunity today</h2>
      </div>
      <section className="flex justify-center px-5 md:px-10 lg:px-20 w-full">
        <table className="w-full table-fixed mt-10 mb-20">
          <thead>
            <tr>
              <th className="">
                
              </th>
              <th className="py-6 hidden lg:table-cell">
                <p className="text-blue-900 font-bold text-lg">Free</p>
                <h3 className="text-6xl font-bold mt-2">$0</h3>
                <p className="text-gray-500 mt-2 mb-6">Per month</p>
              </th>
              <th className="py-6 hidden md:table-cell">
                <p className="text-blue-900 font-bold text-lg">Team</p>
                <h3 className="text-6xl font-bold mt-2">$59</h3>
                <p className="text-gray-500 mt-2 mb-6">Per month</p>
              </th>
              <th className="bg-gray-900 rounded-t-lg py-6">
                <p className="w-fit mx-auto bg-blue-900 rounded-full text-lg text-white px-2">Popular</p>
                <h3 className="text-6xl font-bold mt-2 text-white">$99</h3>
                <p className="mt-2 mb-6 text-white">Per month</p>
              </th>
              <th className="py-6">
                <p className="text-blue-900 font-bold text-lg">Enterprise</p>
                <h3 className="text-6xl font-bold mt-2">$299</h3>
                <p className="text-gray-500 mt-2 mb-6">Per month</p>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-left p-3 border-b font-bold border-gray-200 bg-gray-100 rounded-tl-lg">Website number</td>
              <td className="p-3 border-b border-gray-200 hidden lg:table-cell">01</td>
              <td className="p-3 border-b border-gray-200 hidden md:table-cell">10</td>
              <td className="p-3 border-b border-gray-800 text-white bg-gray-900">50</td>
              <td className="p-3 border-b border-gray-200">Unlimited</td>
            </tr>
            <tr>
              <td className="text-left p-3 border-b font-bold border-gray-200 bg-gray-100">Server storage</td>
              <td className="p-3 border-b border-gray-200 hidden lg:table-cell">100 GB</td>
              <td className="p-3 border-b border-gray-200 hidden md:table-cell">500 GB</td>
              <td className="p-3 border-b border-gray-800 text-white bg-gray-900">1 TB</td>
              <td className="p-3 border-b border-gray-200">Unlimited</td>
            </tr>
            <tr>
              <td className="text-left p-3 border-b font-bold border-gray-200 bg-gray-100">Database</td>
              <td className="p-3 border-b border-gray-200 hidden lg:table-cell">-</td>
              <td className="p-3 border-b border-gray-200 hidden md:table-cell">15</td>
              <td className="p-3 border-b border-gray-800 text-white bg-gray-900">Unlimited</td>
              <td className="p-3 border-b border-gray-200">Unlimited</td>
            </tr>
            <tr>
              <td className="text-left p-3 border-b font-bold border-gray-200 bg-gray-100">Unmetered Bandwidth</td>
              <td className="p-3 border-b border-gray-200 hidden lg:table-cell">-</td>
              <td className="p-3 border-b border-gray-200 hidden md:table-cell"><Image className="mx-auto block" src={"/check-1.svg"} alt="check" height={20} width={20}></Image></td>
              <td className="p-3 border-b border-gray-800 bg-gray-900"><Image className="mx-auto block" src={"/check.svg"} alt="check" height={20} width={20}></Image></td>
              <td className="p-3 border-b border-gray-200"><Image className="mx-auto block" src={"/check-1.svg"} alt="check" height={20} width={20}></Image></td>
            </tr>
            <tr>
              <td className="text-left p-3 border-b font-bold border-gray-200 bg-gray-100">SSD Disk</td>
              <td className="p-3 border-b border-gray-200 hidden lg:table-cell">-</td>
              <td className="p-3 border-b border-gray-200 hidden md:table-cell">-</td>
              <td className="p-3 border-b border-gray-800 bg-gray-900"><Image className="mx-auto block" src={"/check.svg"} alt="check" height={20} width={20}></Image></td>
              <td className="p-3 border-b border-gray-200"><Image className="mx-auto block" src={"/check-1.svg"} alt="check" height={20} width={20}></Image></td>
            </tr>
            <tr>
              <td className="text-left p-3 border-b font-bold border-gray-200 bg-gray-100">VCPUS Fontworld</td>
              <td className="p-3 border-b border-gray-200 hidden lg:table-cell">-</td>
              <td className="p-3 border-b border-gray-200 hidden md:table-cell">-</td>
              <td className="p-3 border-b border-gray-800 bg-gray-900"><Image className="mx-auto block" src={"/check.svg"} alt="check" height={20} width={20}></Image></td>
              <td className="p-3 border-b border-gray-200"><Image className="mx-auto block" src={"/check-1.svg"} alt="check" height={20} width={20}></Image></td>
            </tr>
            <tr>
              <td className="text-left p-3 border-b font-bold border-gray-200 bg-gray-100">Worldpress install</td>
              <td className="p-3 border-b border-gray-200 hidden lg:table-cell">-</td>
              <td className="p-3 border-b border-gray-200 hidden md:table-cell">-</td>
              <td className="p-3 border-b border-gray-800 bg-gray-900"><Image className="mx-auto block" src={"/check.svg"} alt="check" height={20} width={20}></Image></td>
              <td className="p-3 border-b border-gray-200"><Image className="mx-auto block" src={"/check-1.svg"} alt="check" height={20} width={20}></Image></td>
            </tr>
            <tr>
              <td className="text-left p-3 border-b font-bold border-gray-200 bg-gray-100">Server speed</td>
              <td className="p-3 border-b border-gray-200 hidden lg:table-cell">-</td>
              <td className="p-3 border-b border-gray-200 hidden md:table-cell">-</td>
              <td className="p-3 border-b border-gray-800 bg-gray-900"><Image className="mx-auto block" src={"/check.svg"} alt="check" height={20} width={20}></Image></td>
              <td className="p-3 border-b border-gray-200"><Image className="mx-auto block" src={"/check-1.svg"} alt="check" height={20} width={20}></Image></td>
            </tr>
            <tr>
              <td className=""></td>
              <td className=" align-middle text-blue-600 font-semibold p-5 hidden lg:table-cell">Get Started <Image className="mx-auto inline-block" src={"/down arrow-1.svg"} alt="arrow" width={25} height={25}></Image></td>
              <td className=" align-middle text-blue-600 font-semibold p-5 hidden md:table-cell">Get Started <Image className="mx-auto inline-block" src={"/down arrow-1.svg"} alt="arrow" width={25} height={25}></Image></td>
              <td className=" align-middle font-semibold text-white bg-yellow-800 rounded-b-lg p-5">Get Started <Image className="mx-auto inline-block" src={"/down arrow.svg"} alt="arrow" width={25} height={25}></Image></td>
              <td className=" align-middle text-blue-600 font-semibold p-5">Get Started <Image className="mx-auto inline-block" src={"/down arrow-1.svg"} alt="arrow" width={25} height={25}></Image></td>
            </tr>
          </tbody>
        </table>

      </section>
    </main>
  );
}
