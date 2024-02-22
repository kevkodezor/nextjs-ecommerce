import { notFound } from 'next/navigation';

interface Props {
    params: { id: string }
}

export default function Category ({ params}:Props) {
    
    const { id } = params;
    if (id !== 'kids' || 'men' || 'women') {
        notFound();
    }

    return (
        <div>
            <h1>Category page</h1>
        </div>
    );
}