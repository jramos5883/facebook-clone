import Image from "next/image";

export default function Contact() {
  return (
    <div className="mt-4">
      <div className="flex gap-3 items-center">
        <Image
          className="h-[34px] rounded-full"
          src="/bill_gates.jpg"
          alt="Bill Gates"
          width={50}
          height={50}
        />
        <h1 className="font-medium"> Bill Gates</h1>
      </div>
    </div>
  );
}
