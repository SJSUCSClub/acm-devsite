import Link from "next/link";

const GetInvolvedButton = () => {
    return (
        /*button not linked to another page yet */
        <Link className="rounded-full bg-[#f3c954] transition ease-in hover:bg-yellow-600 no-underline text-white font-bold py-3 px-6 cursor-pointer" href="https://docs.google.com/forms/d/e/1FAIpQLSf1KNg9T5sPAM9EtOm3i_bQctlq81b7QIns1uNkWtlSCpzOvg/viewform">
          &lt;/&gt; Get Involved
        </Link>
      
    );
}

export default GetInvolvedButton;