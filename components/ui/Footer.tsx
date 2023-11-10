export interface FooterProps {
    text: string;  
}

export default function Footer (props: FooterProps) {
    const { text } = props;

    return (
        <footer className="max-w-[940px] border-t-4 mx-auto flex flex-col items-center justify-center mt-[15px]">
            <a href="https://newsletter.pragmaticengineer.com/" className="bg-[#f0403f] mb-[20px] px-[15px] py-[9px] font-['Montserrat'] text-white w-fit">
                Subscribe
            </a>
            <p>{text}</p>
        </footer>
    );
}