import { Separator } from "@/components/ui/separator";

const Footer = () => {
  return (
    <div className="w-full h-full px-24 py-6 border-t-2 border-black bg-black">
      <div className="flex flex-col gap-4">
        <h1 className="text-lg text-white font-bold">NexaNect Links</h1>
        <Separator />
        <div className="flex flex-row justify-between">
          <h1 className="text-white">NexaNect</h1>
          <p className="text-white">2024 NexaNext OpenSource. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
