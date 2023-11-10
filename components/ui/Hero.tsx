import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

export interface Hero {
    Title: string;
    /** @format textarea */
    Description: string;
     /** @description 150px x 150px image recommended */
    MiniBanner: MiniBanner;
    Title2?: string;
    /** @format textarea */
    Description2: string;
    /** @format textarea */
    Description3?: string;
}

export interface MiniBanner {
    img?: ImageWidget;
    /** @description alternative text */
    alt?: string;
    width?: number;
    height?: number;
    /** @description external link on logo */
}

export default function Hero(props: Hero) {
    const { Title, Description, MiniBanner, Title2, Description2, Description3 } = props;

    return (
        <div className="flex flex-col items-center justify-center w-full h-full px-[50px] py-[30px] bg-[#fff]">
            <div className="flex flex-col items-center justify-center w-full h-full">
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <h1 className="text-[#222] text-[30px] md:text-[44px] font-[400] font-['Montserrat'] mt-[15px] mb-[20px]">
                        {Title}
                    </h1>
                    <p className="text-[#222] text-[16px] font-[400] font-['Montserrat'] text-center"
                        dangerouslySetInnerHTML={{ __html: Description }}
                    >
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <Image
                        className=""
                        src={MiniBanner.img || ""}
                        alt={MiniBanner.alt}
                        width={MiniBanner.width || 171}
                        height={MiniBanner.height || 60}
                    />
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <h1 className="text-[#222] text-[20px] md:text-[37px] font-[400] font-['Droid'] mt-[15px] mb-[20px]">
                        {Title2}
                    </h1>
                    <p className="text-[#222] text-[18px] font-[400] font-['Montserrat'] text-center mt-[10px] mb-[15px]"
                        dangerouslySetInnerHTML={{ __html: Description2 }}
                    >
                    </p>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <a href="https://newsletter.pragmaticengineer.com/" className="bg-[#f0403f] mb-[20px] px-[15px] py-[9px] font-['Montserrat'] text-white">
                        Subscribe
                    </a>
                </div>
                <div className="flex flex-col items-center justify-center w-full h-full">
                    <h1 className="text-[#222] font-[400] font-['Montserrat'] text-center max-w-[638px] text-[16px] leading-[23px]">
                        {Description3}
                    </h1>
                </div>
            </div>
        </div>
    );
}