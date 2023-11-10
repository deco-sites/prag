export interface NLIssuesType {
    /** @format textarea */
    Description: string;
    UnderDescription: string;
    Title: string;
    /** @format textarea */
    list: List[];
}

export interface List {
    /** @description external link */
    link?: string;
    /** @description text on link */
    text?: string;
}

export default function NLIssues(props: NLIssuesType) {
    const { Description, UnderDescription, list, Title } = props;

    return (
        <div className="flex flex-col items-center justify-center w-full h-full px-[50px] py-[30px] bg-[#fff]">
            <div className="flex flex-col md:flex-row items-center justify-center w-full h-full max-w-[912px]">
                <div className="flex flex-col md:w-[50%] ">
                    <p className="text-[#222] text-[20px] font-[400] font-['Montserrat'] leading-[34px] border-l-4 border-[#e2e2e2] px-[30px] py-[15px] my-[25px]"
                        dangerouslySetInnerHTML={{ __html: Description }}
                    >
                    </p>
                    <p className="text-[#222] font-['Montserrat'] text-center"
                        dangerouslySetInnerHTML={{ __html: UnderDescription }}
                    >
                    </p>
                </div>
                <div className="flex flex-col md:w-[50%]">
                    <p className="text-[#222] text-[20px] font-[400] font-['Montserrat'] text-center py-[15px] leading-[50px]"
                        dangerouslySetInnerHTML={{ __html: Title }}
                    >
                    </p>
                    <ul className="text-[#222] font-['Montserrat'] list-disc marker:text-black underline pl-[40px] mt-[10px] mb-[20px]">
                        {list?.map((list) => (
                            <li key={list.text} className="w-full h-full mb-[12px]"
                            >
                                <a
                                    href={list.link}
                                    className=" py-[9px] hover:text-black text-[16px] font-[400] tracking-[1px] font-['Montserrat']"
                                >
                                    {list.text}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}