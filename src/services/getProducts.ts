export const getProducts = async () => {
	try {
		const response = await fetch(
			"https://api-products-humberto.vercel.app/api/products"
		);
		const data = await response.json();

		if (!response.ok) {
			throw new Error("Error en la petición");
		}

		return data["es-ES"];
	} catch (error) {
		throw new Error("Error en la petición");
	}
};
