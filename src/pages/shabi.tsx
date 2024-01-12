import RootLayout from "@/app/layout"

export default function Shabi() {
return (
  <RootLayout title="Shabi">
    <div className="relative bg-black h-screen flex flex-col justify-between">

        <div className="absolute left-6 top-36 bottom-6 w-1 bg-gradient-to-b from-cyan-400 to-pink-600">
            <p className="text-sm transform -rotate-90 absolute top-[-50px] left-[-21px] whitespace-nowrap text-cyan-400">Design</p>
            {/* <p className="text-sm transform -rotate-90 absolute top-[-50px] left-[-21px] whitespace-nowrap bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500">Design</p> */}
        </div>

        <div className="absolute right-6 top-6 bottom-36 w-1 translate-y-14 bg-gradient-to-b from-pink-600 to-cyan-500">
            <p className="text-sm transform -rotate-90 absolute bottom-[-50px] right-[-21px] whitespace-nowrap text-cyan-400">Design</p>
        </div>

        <div className="w-full h-24 mt-20 flex justify-between">
            <p className="text-2xl mt-6 ml-16 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-pink-500">哈哈哈哈哈</p>
            <p className="text-2xl mt-6 mr-16 font-semibold bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-cyan-500">测试 001</p>
        </div>

        <div className="w-full h-100 mb-8 flex justify-between">
            <p className="text-6xl ml-16 font-bold text-white translate-x-10">当你在读这短句，<br /> 你就是个大傻逼。</p>
        </div>

        <div className="w-full h-100 mb-8 flex justify-between">
            <p className="text-2xl ml-16 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-cyan-500">恍恍惚惚就像掉进了那无底洞</p>
        </div>

    </div>
  </RootLayout>
)
}