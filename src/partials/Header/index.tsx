import { Button } from "@/components/ui/button"
import Logo from "@/assets/imgs/logo-full.png";

const Header = () => {
  return (
    <div className="w-full border-b-2">
      <div className="flex justify-between items-center py-4 px-8">
        <div>
          <img src={Logo} width={200}/>
        </div>
        <div className="flex flex-row gap-12 text-lg">
          <h1>Home</h1>
          <h1>About</h1>
          <h1>Features</h1>
        </div>
        <div className="flex gap-2">
          <Button className="bg-blue-500 hover:bg-blue-700">Login</Button>
          <Button>+ New Meeting</Button>
        </div>
      </div>
    </div>
  )
}

export default Header