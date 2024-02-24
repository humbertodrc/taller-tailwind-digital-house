import {useEffect, useState} from "react";
import {getProducts} from "./services";
import {Product} from "./interface";

function App() {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		getProducts().then((data) => setProducts(data));
	}, []);

	return (
		<main>
			<h1 className="text-3xl font-bold">Taller de Tailwind CSS</h1>
			<section className="grid grid-cols-1 gap-4 p-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
				{products.map((product) => (
					<article
						key={product.id}
						className="bg-white shadow-lg flex flex-col"
					>
						<div>
							<img
								src={product.image}
								alt={product.title}
								className="w-[100%] h-[400px] object-contain"
							/>
						</div>
						<div className="p-4 flex flex-col justify-between h-full w-full">
							<div className="mb-2">
								<h2 className="text-xl font-bold">{product.title}</h2>
								<p className="text-gray-700">{product.description}</p>
								<p className="text-gray-700">${product.price}</p>
							</div>
							<button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
								Comprar
							</button>
						</div>
					</article>
				))}
			</section>
		</main>
	);
}

export default App;
