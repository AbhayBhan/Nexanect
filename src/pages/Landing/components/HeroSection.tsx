import { Button } from "@/components/ui/button";
import HeroCallImg from "@/assets/imgs/hero-call.jpg";

const HeroSection = () => {
  return (
    <div className="flex flex-col justify-center items-center space-y-8">
      <h1 className="text-6xl font-bold">Create AI-Powered Virtual Calls</h1>
      <p className="text-sm text-center text-gray-500">Nexanect is your modern gateway to connect with people, with AI-Powered Agenda <br/> Focus & Focused Spotting take your calls to next level.</p>
      <div className="flex flex-row gap-4 justify-center">
        <Button className="bg-blue-500 hover:bg-blue-700">
          Create Meeting
        </Button>
        <Button>
          Register Now
        </Button>
      </div>
      <div className="pt-8">
      <img className="rounded-2xl shadow-lg" src={HeroCallImg} />
      </div>
    </div>
  )
}

export default HeroSection