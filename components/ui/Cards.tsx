import Image from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";

export interface Card {
    card: CardProps[];
}

export interface CardProps {
    img: ImageProps;
     /** @description person name */
    name: string;
     /** @description Under name description */
    description: string;
     /** @description external link */
    link: string;
     /** @description true = linkedin false = twitter */
    linkedinOrTwitter: boolean;
    /** @format textarea */
    text: string;
    date: string;
    twitterLikes: number;
}

export interface ImageProps {
    img?: ImageWidget;
    /** @description alternative text */
    alt?: string;
    width?: number;
    height?: number;
    /** @description external link on logo */
    link?: string;
}

export default function Card (props: Card) {
    const { card } = props;

    return (
        <div className="max-w-[1140px] mx-auto px-[20px] columns-1 gap-4 sm:columns-2 sm:gap-4 md:columns-3  [&>img:not(:first-child)]:mt-8">
            {card.map((card) => (
                <div className="shoutout overflow-hidden w-full shadow rounded-lg border border-[#f3f3f3] text-primary py-5 font-sans mb-[16px]">
                    <div className="flex flex-row px-5">
                        <a href={card.link}>
                            <Image
                            className="rounded-full w-[56px] h-[48px]  "
                            src={card.img.img || ""}
                            alt={card.img.alt}
                            width={card.img.width || 48}
                            height={card.img.height || 48}
                        />
                        </a>
                        <div className="flex flex-col w-full">
                            <div className="flex pl-[20px] flex-row justify-between">
                                <div className="text-black text-[16px] font-[700] font-['Montserrat']">
                                    {card.name}
                                </div>
                                <div>
                                    <a
                                        href={card.link}
                                        className=""
                                    >
                                    {card.linkedinOrTwitter ? 
                                        <svg
                                        width="46"
                                        height="17"
                                        className="xl:w-[46px] w-[32px]"
                                        >
                                            <use href="/icons.svg#linkedin" />
                                        </svg>
                                    : 
                                        <svg
                                        width="46"
                                        height="17"
                                        className="xl:w-[46px] w-[32px]"
                                        >
                                            <use href="/icons.svg#twitter" />
                                        </svg>
                                    }
                                    </a>
                                </div>
                            </div>
                            <div className="text-[12px] font-['Montserrat'] text-black pl-[20px] text-sm font-medium  opacity-70 text-ellipsis overflow-hidden max-w-full">
                                {card.description}
                            </div>
                        </div>

                    </div>
                    <div className="text-black text-[16px] font-['Montserrat'] px-5 pt-5" 
                        dangerouslySetInnerHTML={{__html: card.text}}
                    >
                    </div>
                    <div className="flex flex-row items-center px-5 pt-5">
                        <div className="flex flex-row item-center">
                            <div className={`gap-[2px] text-[#9ca3af] text-[15px] font-['Montserrat'] mr-[8px]
                                ${card.linkedinOrTwitter ? "hidden" : "flex items-start"}
                            `}>
                                <svg
                                width="20"
                                height="20"
                                className="xl:w-[20px] w-[20px]"
                                >
                                    <use href="/icons.svg#twitterLikes" />
                                </svg>
                                {card.twitterLikes}
                            </div>
                        </div>
                        <div className="text-[#9ca3af] text-[14px] font-['Montserrat']">
                            <a href={card.link} className={`hover:underline text-inherit`}>
                                {card.date}
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}