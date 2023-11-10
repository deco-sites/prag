import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

export interface Header {
    /** @description 150px x 150px image recommended */
    logo?: Logo;
    /** @format textarea */
    link?: Link[];
}
  
export interface Logo {
    img?: ImageWidget;
    /** @description alternative text */
    alt?: string;
    width?: number;
    height?: number;
    /** @description external link on logo */
    link?: string;
}

export interface Link {
    /** @description external link */
    link?: string;
    /** @description text on link */
    text?: string;
}

export default function HeaderInfos(props: Header) {
    const { logo, link } = props;

    return (
        <div className="flex flex-row items-center justify-between lg:justify-center w-full h-full px-[50px] py-[30px] bg-[#fff]">
            {logo && (
                <Image
                    className="w-[50px] h-[50px]"
                    src={logo.img || ""}
                    alt={logo.alt}
                    width={logo.width || 171}
                    height={logo.height || 60}
                />
            )}
            <div className="pl-[50px] hidden lg:flex flex-row items-center justify-center w-full h-full">
                {link?.map((link) => (
                    <a
                        key={link.text}
                        href={link.link}
                        className="text-[#222} px-[20px] py-[9px] opacity-[0.6] hover:text-black uppercase text-[12px] font-[500] tracking-[1px] font-['Montserrat']"
                    >
                        {link.text}
                    </a>
                ))}
            </div>
            <div className="hidden lg:flex flex-row items-center justify-end h-full"
            >
                <a
                    href="https://blog.pragmaticengineer.com/connect/"
                    className="px-[25px] py-[12px] text-sm text-white bg-black text-[12px] tracking-[2px] uppercase font-[400]font-['Montserrat'] "
                >
                    contact
                </a>
            </div>
            <div className="flex lg:hidden flex-row items-center justify-end h-full"
            >
                <Image
                    className="w-[30px] h-[30px]"
                    src="https://www.pragmaticengineer.com/assets/menu_icon.png"
                    alt="menu"
                    width={30}
                    height={30}
                />
            </div>
        </div>
    );
}