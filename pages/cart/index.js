// import NavBar from "@/components/NavBar";
import Link from "next/link";

export async function getStaticProps() {
    const res = await fetch('https://fakestoreapi.com/products')
    const result = await res.json();
    console.log(result);
    return {
        props: {
            apiRes: result && result.length > 0 ? result : [],
        }

    }

}
const home = (props) => {
    console.log(props)
    const { apiRes } = props;
    return (
        <>
        {/* <NavBar /> */}
            <h1>Home products</h1>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
                {apiRes.map((item) => (
                    <Link href={`/cart/${item.id}`}>
                        <div style={{ border: '1px solid black', cursor: 'pointer' }} key={item.id}>
                            <img src={item.image} style={{ width: '150px', height: '120px' }} />
                            <p className="text-center" style={{ width: '150px' }}>{item.title.slice(0,35)}</p>
                            <button>Add to cart</button>
                        </div>
                    </Link>
                ))}

            </div>
        </>

    )
}

export default home;