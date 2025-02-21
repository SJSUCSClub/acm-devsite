import Link from "next/link";

const GetInvolvedButton = () => {
    return (
        /*button not linked to another page yet */
        <Link className="rounded-full bg-[#f3c954] transition ease-in hover:bg-yellow-600 no-underline text-white font-bold py-3 px-6 cursor-pointer" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSfNBu-IGm7bhUmMf2cSOmNca3SiJZyVRzPBVTVOYVBNZIyeYA/viewform?pli=1">
          &lt;/&gt; Get Involved
        </Link>
      
    );
}

export default GetInvolvedButton;
