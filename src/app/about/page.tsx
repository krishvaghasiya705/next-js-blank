import Head from "next/head";
import About from "@/pages/aboutpage";

export default function AboutPage() {
    return (
        <>
            <Head>
                <title>Home Page Title</title>
            </Head>
            <div>
                <About />
            </div>
        </>
    );
}
