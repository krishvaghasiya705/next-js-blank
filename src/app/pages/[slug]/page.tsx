import { useRouter } from 'next/router';

export default function PostPage() {
    const router = useRouter();
    const { slug } = router.query;

    if (typeof slug === 'string') {
        return (
            <div>
                <h1>Post Slug: {slug}</h1>
            </div>
        );
    }

    return <div>Loading...</div>;
}
