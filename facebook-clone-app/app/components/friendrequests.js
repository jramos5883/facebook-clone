import Image from "next/image";

export default function FriendRequests() {
  return (
    <div>
      <div className="flex gap-2 w-[100%]">
        <Image
          className="h-[50px] w-[50px] rounded-full object-cover"
          src="/elon_musk.jpg"
          alt="dp"
          width={50}
          height={50}
        />
        <div>
          <h1 className="font-semibold">Elon Musk</h1>
          <p className="text-gray-500 text-[14px]">11 mutual friends</p>
        </div>
        <p className="ml-auto text-primary text-[14px]">1 d</p>
      </div>

      <div className="mt-4 flex justify-end gap-2">
        <button className="bg-primary text-white py-2 px-5 rounded-lg">
          Confirm
        </button>
        <button className="bg-gray-300 text-black py-2 px-5 rounded-lg">
          Delete
        </button>
      </div>
    </div>
  );
}
