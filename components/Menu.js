import Link from 'next/link';

const classeLink = {
    marginRight: 15
}


const Menu = () => (
    <div>
        <Link href="/">
            <a style={classeLink}>Home</a>
        </Link>
        <Link href="/empresa">
            <a style={classeLink}>Empresa</a>
        </Link>
        <Link href="/contato">
            <a style={classeLink}>Contato</a>
        </Link>
    </div>
);

export default Menu;