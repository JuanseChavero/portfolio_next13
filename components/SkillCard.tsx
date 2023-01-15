import Image from 'next/image';

interface SkillCardProps {
  title: string;
  image: string;
}

export default function SkillCard({ title, image }: SkillCardProps) {
  return (
    <div className="flex flex-col items-center justify-between p-4 transition-all duration-500 border rounded-lg border-slate-100 bg-slate-100 bg-opacity-10 saturate-0 hover:saturate-100">
      <Image
        width={0}
        height={0}
        src={image}
        alt={title}
        className="h-[100px] w-[100px] object-contain"
      />
      {/* <h5 className="mt-4">{title}</h5> */}
    </div>
  );
}
