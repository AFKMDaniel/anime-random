import WaifuService from '@/services/waifuService';
import Image from 'next/image';

export default async function Background() {
  const { files } = await WaifuService.getList();

  return (
    <>
      <div className='fixed -z-40 inset-0 bg-black opacity-25'/>
      <div className='fixed -z-50 lg:columns-5 md:columns-4 sm:columns-3 columns-2 gap-0'>
        {files.map((file) => (
          <Image
            key={file}
            src={file}
            alt='waifu'
            width='0'
            height='0'
            className='w-full h-auto '
          />
        ))}
      </div>
    </>
  );
}
